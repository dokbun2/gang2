import React, { useState, useCallback, useRef } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Textarea } from './ui/Textarea';
import { Spinner } from './ui/Spinner';
import { UploadCloud, Download } from './ui/Icon';
import { generateImageVariation } from '../services/geminiService';
import { fileToBase64 } from '../utils/file';
import type { ImageVariationResult } from '../types';

const ImageVariator: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [prompt, setPrompt] = useState<string>('');
    const [variationResult, setVariationResult] = useState<ImageVariationResult | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (file.size > 4 * 1024 * 1024) { // 4MB limit
                setError("파일 크기는 4MB를 초과할 수 없습니다.");
                return;
            }
            setSelectedFile(file);
            setError(null);
            setVariationResult(null);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleGenerate = useCallback(async () => {
        if (!selectedFile) {
            setError('먼저 이미지를 업로드해주세요.');
            return;
        }
        if (!prompt.trim()) {
            setError('변형에 대한 설명을 프롬프트로 입력해주세요.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setVariationResult(null);

        try {
            const base64Image = await fileToBase64(selectedFile);
            const result = await generateImageVariation(base64Image, selectedFile.type, prompt);
            setVariationResult(result);
        } catch (e) {
            setError(e instanceof Error ? e.message : '알 수 없는 오류가 발생했습니다.');
        } finally {
            setIsLoading(false);
        }
    }, [selectedFile, prompt]);
    
    const handleDownload = useCallback(() => {
        if (!variationResult) return;
        const link = document.createElement('a');
        link.href = `data:image/jpeg;base64,${variationResult.image}`;
        link.download = `variation-${Date.now()}.jpeg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [variationResult]);

    return (
        <Card className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Left Panel */}
            <div className="flex flex-col space-y-6">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-tight">이미지 변형</h2>
                </div>
                
                <div 
                    className="aspect-square w-full bg-zinc-900 border-2 border-dashed border-zinc-700 rounded-xl flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-zinc-800 transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                >
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/png, image/jpeg, image/webp"
                        className="hidden"
                        disabled={isLoading}
                    />
                    {imagePreview ? (
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                    ) : (
                        <div className="text-center text-zinc-500">
                            <UploadCloud className="w-12 h-12 mx-auto mb-2" />
                            <p className="font-medium">이미지를 업로드하세요</p>
                            <p className="text-xs">PNG, JPG, WEBP (최대 4MB)</p>
                        </div>
                    )}
                </div>

                <Textarea
                    placeholder="예: 이 고양이에게 우주 헬멧을 씌워줘"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={4}
                    disabled={isLoading || !selectedFile}
                    className="resize-none"
                />

                <Button onClick={handleGenerate} disabled={isLoading || !selectedFile || !prompt.trim()} className="w-full">
                    {isLoading ? <><Spinner className="mr-2" /> 생성 중...</> : '이미지 변형 생성'}
                </Button>
                {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            </div>

            {/* Right Panel */}
            <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">변형된 이미지</h3>
                    {variationResult && !isLoading && (
                         <Button variant="secondary" size="sm" onClick={handleDownload}>
                            <Download className="w-4 h-4 mr-2" />
                            다운로드
                        </Button>
                    )}
                </div>
                <div className="aspect-square w-full bg-zinc-900 rounded-xl flex flex-col items-center justify-center p-4">
                    {isLoading ? (
                        <Spinner size="lg" />
                    ) : variationResult ? (
                        <div className="w-full h-full flex flex-col space-y-2">
                           <img src={`data:image/jpeg;base64,${variationResult.image}`} alt="Variation" className="flex-grow w-full object-cover rounded-lg" />
                           {variationResult.description && <p className="text-xs text-center text-gray-400 p-2 bg-zinc-800 rounded-md">{variationResult.description}</p>}
                        </div>
                    ) : (
                        <p className="text-zinc-500 text-center">이곳에 변형된 이미지가 표시됩니다.</p>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default ImageVariator;
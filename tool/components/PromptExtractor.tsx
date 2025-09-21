import React, { useState, useCallback, useRef } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Spinner } from './ui/Spinner';
import { UploadCloud, Copy, Check } from './ui/Icon';
import { getPromptFromImage } from '../services/geminiService';
import { fileToBase64 } from '../utils/file';

const PromptExtractor: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [extractedPrompt, setExtractedPrompt] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [isCopied, setIsCopied] = useState<boolean>(false);
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
            setExtractedPrompt(null);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleExtract = useCallback(async () => {
        if (!selectedFile) {
            setError('이미지를 먼저 업로드해주세요.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setExtractedPrompt(null);

        try {
            const base64Image = await fileToBase64(selectedFile);
            const prompt = await getPromptFromImage(base64Image, selectedFile.type);
            setExtractedPrompt(prompt);
        } catch (e) {
            setError(e instanceof Error ? e.message : '알 수 없는 오류가 발생했습니다.');
        } finally {
            setIsLoading(false);
        }
    }, [selectedFile]);
    
    const handleCopy = useCallback(() => {
        if (!extractedPrompt) return;
        navigator.clipboard.writeText(extractedPrompt).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            setError('프롬프트를 복사하는데 실패했습니다.');
        });
    }, [extractedPrompt]);

    return (
        <Card className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Left Panel */}
            <div className="flex flex-col space-y-6 items-center">
                <div className="w-full space-y-2 text-center lg:text-left">
                     <h2 className="text-2xl font-semibold tracking-tight">프롬프트 추출</h2>
                </div>

                <div 
                    className="aspect-square w-full max-w-sm bg-zinc-900 border-2 border-dashed border-zinc-700 rounded-xl flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-zinc-800 transition-colors"
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
                <Button onClick={handleExtract} disabled={isLoading || !selectedFile} className="w-full max-w-sm">
                    {isLoading ? <><Spinner className="mr-2" /> 추출 중...</> : '프롬프트 추출'}
                </Button>
                {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            </div>

            {/* Right Panel */}
            <div className="flex flex-col space-y-4">
                 <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">추출된 프롬프트</h3>
                    {extractedPrompt && !isLoading && (
                        <Button variant="secondary" size="sm" onClick={handleCopy}>
                            {isCopied ? (
                                <>
                                    <Check className="w-4 h-4 mr-2" />
                                    복사됨
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4 mr-2" />
                                    복사하기
                                </>
                            )}
                        </Button>
                    )}
                </div>
                <div className="bg-zinc-900 rounded-xl p-4 h-full min-h-[200px] flex items-center justify-center">
                    {isLoading ? (
                        <Spinner size="lg" />
                    ) : extractedPrompt ? (
                        <pre className="text-gray-300 whitespace-pre-wrap w-full h-full overflow-y-auto text-sm">{extractedPrompt}</pre>
                    ) : (
                        <p className="text-zinc-500 text-center">이곳에 추출된 프롬프트가 표시됩니다.</p>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default PromptExtractor;
import React, { useState, useCallback } from 'react';
import { Card } from './ui/Card';
import { Textarea } from './ui/Textarea';
import { Button } from './ui/Button';
import { Spinner } from './ui/Spinner';
import { Download } from './ui/Icon';
import { generateImageFromText } from '../services/geminiService';

const ImagePlaceholder: React.FC<{ title: string }> = ({ title }) => (
    <div className="aspect-square w-full bg-zinc-900 border-2 border-dashed border-zinc-700 rounded-xl flex flex-col items-center justify-center p-4">
        <p className="text-zinc-500 text-center font-medium">{title}</p>
    </div>
);

const ImageGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('');
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = useCallback(async () => {
        if (!prompt.trim()) {
            setError('프롬프트를 입력해주세요.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setGeneratedImage(null);

        try {
            const imageBase64 = await generateImageFromText(prompt);
            setGeneratedImage(imageBase64);
        } catch (e) {
            setError(e instanceof Error ? e.message : '알 수 없는 오류가 발생했습니다.');
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);
    
    const handleDownload = useCallback(() => {
        if (!generatedImage) return;
        const link = document.createElement('a');
        link.href = `data:image/jpeg;base64,${generatedImage}`;
        link.download = `generated-${Date.now()}.jpeg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [generatedImage]);

    return (
        <Card className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Left Panel */}
            <div className="flex flex-col space-y-6">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-tight">이미지 생성 설정</h2>
                </div>
                <Textarea
                    placeholder="예: 우주복을 입은 고양이가 스케이트보드를 타는 모습"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={6}
                    disabled={isLoading}
                    className="resize-none"
                />
                <Button onClick={handleGenerate} disabled={isLoading} className="w-full">
                    {isLoading ? <><Spinner className="mr-2" /> 생성 중...</> : '이미지 생성'}
                </Button>

                {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            </div>
            {/* Right Panel */}
            <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">생성된 이미지</h3>
                    {generatedImage && !isLoading && (
                        <Button variant="secondary" size="sm" onClick={handleDownload}>
                            <Download className="w-4 h-4 mr-2" />
                            다운로드
                        </Button>
                    )}
                </div>
                 <div className="aspect-square w-full">
                     {isLoading ? (
                        <div className="w-full h-full bg-zinc-900 rounded-xl flex items-center justify-center">
                            <Spinner size="lg" />
                        </div>
                    ) : generatedImage ? (
                        <img src={`data:image/jpeg;base64,${generatedImage}`} alt="Generated" className="w-full h-full object-cover rounded-xl" />
                    ) : (
                        <ImagePlaceholder title="이곳에 생성된 이미지가 표시됩니다." />
                    )}
                </div>
            </div>
        </Card>
    );
};

export default ImageGenerator;
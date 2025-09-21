
import React, { useState, useCallback } from 'react';
import { Card } from './ui/Card';
import { Textarea } from './ui/Textarea';
import { Button } from './ui/Button';
import { Spinner } from './ui/Spinner';
import { Copy, Check } from './ui/Icon';
import { generateVideoPrompt } from '../services/geminiService';

const VideoPromptGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('');
    const [generatedVideoPrompt, setGeneratedVideoPrompt] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const handleGenerate = useCallback(async () => {
        if (!prompt.trim()) {
            setError('아이디어를 입력해주세요.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setGeneratedVideoPrompt(null);

        try {
            const videoPromptJson = await generateVideoPrompt(prompt);
            setGeneratedVideoPrompt(videoPromptJson);
        } catch (e) {
            setError(e instanceof Error ? e.message : '알 수 없는 오류가 발생했습니다.');
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);

    const handleCopy = useCallback(() => {
        if (!generatedVideoPrompt) return;
        navigator.clipboard.writeText(generatedVideoPrompt).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            setError('프롬프트를 복사하는데 실패했습니다.');
        });
    }, [generatedVideoPrompt]);

    return (
        <Card className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Left Panel */}
            <div className="flex flex-col space-y-6">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-tight">영상 프롬프트 생성</h2>
                    <p className="text-zinc-400">
                        장면, 캐릭터, 동작에 대한 아이디어를 입력하면 Veo 3 모델에 최적화된 상세한 JSON 프롬프트를 생성해 드립니다.
                    </p>
                </div>
                <Textarea
                    placeholder="예: 은행 강도 두목이 사무실에서 화를 내며 소리치는 장면"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={6}
                    disabled={isLoading}
                    className="resize-none"
                />
                <Button onClick={handleGenerate} disabled={isLoading} className="w-full">
                    {isLoading ? <><Spinner className="mr-2" /> 생성 중...</> : '프롬프트 생성'}
                </Button>

                {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            </div>
            {/* Right Panel */}
            <div className="flex flex-col space-y-4">
                 <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">생성된 프롬프트</h3>
                    {generatedVideoPrompt && !isLoading && (
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
                <div className="bg-zinc-900 rounded-xl p-4 h-full min-h-[300px] flex items-center justify-center">
                    {isLoading ? (
                        <Spinner size="lg" />
                    ) : generatedVideoPrompt ? (
                        <pre className="text-gray-300 whitespace-pre-wrap w-full h-full overflow-y-auto text-sm font-mono">{generatedVideoPrompt}</pre>
                    ) : (
                        <p className="text-zinc-500 text-center">이곳에 생성된 영상 프롬프트가 표시됩니다.</p>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default VideoPromptGenerator;

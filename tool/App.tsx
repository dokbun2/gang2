
import React, { useState } from 'react';
import ImageGenerator from './components/ImageGenerator';
import ImageVariator from './components/ImageVariator';
import PromptExtractor from './components/PromptExtractor';
import VideoPromptGenerator from './components/VideoPromptGenerator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/Tabs';
import { WandSparkles, ImageIcon, ImageEdit, Video } from './components/ui/Icon';

type Tab = 'generator' | 'variator' | 'extractor' | 'video';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('generator');

  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <header className="w-full max-w-7xl mb-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
          Gemini AI 이미지 생성기
        </h1>
        <p className="mt-2 text-lg text-gray-400">Apple 스타일 다크 테마로 제작되었습니다.</p>
      </header>

      <main className="w-full max-w-7xl">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as Tab)}>
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="generator">
              <WandSparkles className="w-4 h-4 mr-2" />
              이미지 생성
            </TabsTrigger>
            <TabsTrigger value="variator">
              <ImageEdit className="w-4 h-4 mr-2" />
              이미지 변형
            </TabsTrigger>
            <TabsTrigger value="extractor">
              <ImageIcon className="w-4 h-4 mr-2" />
              프롬프트 추출
            </TabsTrigger>
            <TabsTrigger value="video">
              <Video className="w-4 h-4 mr-2" />
              영상 프롬프트
            </TabsTrigger>
          </TabsList>
          <TabsContent value="generator">
            <ImageGenerator />
          </TabsContent>
          <TabsContent value="variator">
            <ImageVariator />
          </TabsContent>
          <TabsContent value="extractor">
            <PromptExtractor />
          </TabsContent>
          <TabsContent value="video">
            <VideoPromptGenerator />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default App;
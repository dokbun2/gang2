// AIFI Tool - ES Module Version with Google AI SDK

// Google AI SDK를 ES 모듈 형태로 가져옵니다.
import { GoogleGenerativeAI } from "https://cdn.jsdelivr.net/npm/@google/generative-ai/dist/index.min.js";

// Global variables
let geminiApiKey = localStorage.getItem('gemini_api_key') || '';
let nanoBananaApiKey = localStorage.getItem('nano_banana_api_key') || '';
let genAI = null; // Google AI SDK 인스턴스
let currentTab = 'generator';
let uploadedImages = {
    variator: null,
    extractor: null
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Check if API keys exist
    if (geminiApiKey) {
        document.getElementById('gemini-api-key').value = geminiApiKey;
        // Google AI SDK 초기화
        genAI = new GoogleGenerativeAI(geminiApiKey);
    }
    if (nanoBananaApiKey) {
        document.getElementById('nano-api-key').value = nanoBananaApiKey;
    }
    if (geminiApiKey) {
        document.getElementById('api-key-card').style.display = 'none';
    }

    // Setup drag and drop
    setupDragAndDrop();
});

// API Key Management
window.saveApiKey = function() {
    const geminiKey = document.getElementById('gemini-api-key').value.trim();

    if (!geminiKey) {
        showAlert('error', 'Gemini API 키를 입력해주세요.');
        return;
    }

    geminiApiKey = geminiKey;
    localStorage.setItem('gemini_api_key', geminiKey);

    // Google AI SDK 초기화
    genAI = new GoogleGenerativeAI(geminiApiKey);

    // Nano Banana API 키는 선택사항
    const nanoKey = document.getElementById('nano-api-key').value.trim();
    if (nanoKey) {
        nanoBananaApiKey = nanoKey;
        localStorage.setItem('nano_banana_api_key', nanoKey);
    }

    document.getElementById('api-key-card').style.display = 'none';
    showAlert('success', 'API 키가 저장되었습니다!');
}

// Tab Switching
window.switchTab = function(tabName) {
    // Update buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }

    // Update content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');

    currentTab = tabName;
}

// Alert System
function showAlert(type, message) {
    const alert = document.getElementById(`${type}-alert`);
    alert.textContent = message;
    alert.classList.add('show');

    setTimeout(() => {
        alert.classList.remove('show');
    }, 5000);
}

// File Handling
window.handleVariatorFile = function(event) {
    handleImageFile(event, 'variator');
}

window.handleExtractorFile = function(event) {
    handleImageFile(event, 'extractor');
}

function handleImageFile(event, type) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        showAlert('error', '이미지 파일만 업로드 가능합니다.');
        return;
    }

    // 파일 크기 체크 (4MB)
    if (file.size > 4 * 1024 * 1024) {
        showAlert('error', '파일 크기는 4MB 이하여야 합니다.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const base64 = e.target.result.split(',')[1];
        uploadedImages[type] = {
            base64: base64,
            mimeType: file.type
        };

        // Show preview - 업로드 영역을 이미지로 교체
        const uploadArea = document.getElementById(`${type === 'variator' ? 'var' : 'ext'}-upload`);
        uploadArea.style.padding = '0';
        uploadArea.style.overflow = 'hidden';
        uploadArea.style.background = 'transparent';
        uploadArea.innerHTML = `
            <div style="position: relative; width: 100%; height: 250px;">
                <img src="${e.target.result}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">
                <button onclick="clearImage('${type}')" style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 16px; line-height: 1;">
                    ×
                </button>
            </div>
        `;

        // 비어있는 preview div 초기화
        const previewDiv = document.getElementById(`${type === 'variator' ? 'var' : 'ext'}-preview`);
        previewDiv.innerHTML = '';
    };
    reader.readAsDataURL(file);
}

window.clearImage = function(type) {
    uploadedImages[type] = null;

    // 업로드 영역을 원래 상태로 복구
    const uploadArea = document.getElementById(`${type === 'variator' ? 'var' : 'ext'}-upload`);
    uploadArea.style.padding = '40px';
    uploadArea.style.background = 'rgba(255, 255, 255, 0.02)';
    uploadArea.innerHTML = `
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
        <p>이미지를 업로드하세요</p>
        <p style="font-size: 12px; color: #666;">PNG, JPG, WEBP (최대 4MB)</p>
        <input type="file" id="${type === 'variator' ? 'var' : 'ext'}-file" accept="image/*" style="display: none;" onchange="handle${type === 'variator' ? 'Variator' : 'Extractor'}File(event)">
    `;

    const previewDiv = document.getElementById(`${type === 'variator' ? 'var' : 'ext'}-preview`);
    previewDiv.innerHTML = '';
}

// Drag and Drop
function setupDragAndDrop() {
    const uploadAreas = document.querySelectorAll('.upload-area');

    uploadAreas.forEach(area => {
        area.addEventListener('dragover', (e) => {
            e.preventDefault();
            area.classList.add('dragover');
        });

        area.addEventListener('dragleave', () => {
            area.classList.remove('dragover');
        });

        area.addEventListener('drop', (e) => {
            e.preventDefault();
            area.classList.remove('dragover');

            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                const input = area.querySelector('input[type="file"]');
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                input.files = dataTransfer.files;
                input.dispatchEvent(new Event('change'));
            }
        });
    });
}

// API Functions
async function generateImage() {
    if (!geminiApiKey) {
        showAlert('error', 'API 키를 먼저 설정해주세요.');
        document.getElementById('api-key-card').style.display = 'block';
        return;
    }

    const prompt = document.getElementById('gen-prompt').value.trim();
    if (!prompt) {
        showAlert('error', '프롬프트를 입력해주세요.');
        return;
    }

    showLoading('gen', true);

    try {
        // Nano Banana API가 있으면 사용, 없으면 Gemini API 사용
        if (nanoBananaApiKey) {
            // Nano Banana API로 실제 이미지 생성
            const response = await fetch('https://api.nanobanana.com/v1/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': nanoBananaApiKey
                },
                body: JSON.stringify({
                    prompt: prompt,
                    model: 'sdxl',  // Stable Diffusion XL
                    width: 1024,
                    height: 1024,
                    steps: 30,
                    cfg_scale: 7.5
                })
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            const data = await response.json();

            // Nano Banana API 응답 처리
            if (data.status === 'processing') {
                // 비동기 처리인 경우
                showAlert('info', '이미지 생성 중... 잠시만 기다려주세요.');

                const taskId = data.task_id || data.id;
                let result = await pollNanoBananaResult(taskId, nanoBananaApiKey);

                if (result && result.image_url) {
                    displayGeneratedImageFromUrl(result.image_url);
                    showAlert('success', '이미지가 성공적으로 생성되었습니다!');
                } else if (result && result.image) {
                    displayGeneratedImage(result.image);
                    showAlert('success', '이미지가 성공적으로 생성되었습니다!');
                } else {
                    throw new Error('No image data in response');
                }
            } else if (data.image_url) {
                // 동기 처리 - 즉시 이미지 URL 반환
                displayGeneratedImageFromUrl(data.image_url);
                showAlert('success', '이미지가 성공적으로 생성되었습니다!');
            } else if (data.image) {
                // Base64 이미지 반환
                displayGeneratedImage(data.image);
                showAlert('success', '이미지가 성공적으로 생성되었습니다!');
            } else {
                throw new Error('Unexpected response format');
            }
        } else {
            // Nano Banana API 키가 없으면 Gemini로 프롬프트 생성
            console.log('Nano Banana API key not found, using Gemini for prompt enhancement');
            showAlert('info', 'Nano Banana API 키가 없습니다. Gemini로 향상된 프롬프트를 생성합니다.');
            generateAlternativePrompt(prompt);
        }

    } catch (error) {
        console.error('Error in generateImage:', error);
        showAlert('warning', 'Nano Banana API 오류. Gemini로 프롬프트를 생성합니다.');
        generateAlternativePrompt(prompt);
    } finally {
        showLoading('gen', false);
    }
}

// Polling function for Nano Banana API
async function pollNanoBananaResult(taskId, apiKey) {
    const maxAttempts = 30; // 최대 30초 대기
    let attempts = 0;

    while (attempts < maxAttempts) {
        try {
            const response = await fetch(`https://api.nanobanana.com/v1/status/${taskId}`, {
                headers: {
                    'x-api-key': apiKey
                }
            });

            if (!response.ok) {
                throw new Error(`Polling error: ${response.status}`);
            }

            const result = await response.json();

            if (result.status === 'completed' || result.status === 'success') {
                return result;
            } else if (result.status === 'failed' || result.status === 'error') {
                throw new Error(`Task ${result.status}: ${result.error || 'Unknown error'}`);
            }

            // 1초 대기 후 재시도
            await new Promise(resolve => setTimeout(resolve, 1000));
            attempts++;
        } catch (error) {
            console.error('Polling error:', error);
            attempts++;
        }
    }

    throw new Error('Timeout waiting for image generation');
}

// Display image from URL
async function displayGeneratedImageFromUrl(imageUrl) {
    const resultDiv = document.getElementById('gen-result');
    resultDiv.style.border = 'none';
    resultDiv.style.background = 'transparent';
    resultDiv.style.padding = '0';

    resultDiv.innerHTML = `
        <div style="flex: 1; display: flex; flex-direction: column;">
            <img src="${imageUrl}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 10px; flex: 1;"
                 crossorigin="anonymous"
                 onerror="console.error('Image failed to load')">
        </div>
        <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
            <button class="button" onclick="downloadImageFromUrl('${imageUrl}')">
                다운로드
            </button>
            <button class="button button-secondary" onclick="copyImagePrompt()">
                프롬프트 복사
            </button>
        </div>
    `;
}

// Display variated image from URL
async function displayVariatedImageFromUrl(imageUrl) {
    const resultDiv = document.getElementById('var-result');
    resultDiv.style.border = 'none';
    resultDiv.style.background = 'transparent';
    resultDiv.style.padding = '0';

    resultDiv.innerHTML = `
        <div style="flex: 1; display: flex; flex-direction: column;">
            <img src="${imageUrl}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 10px; flex: 1;"
                 crossorigin="anonymous"
                 onerror="console.error('Image failed to load')">
        </div>
        <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
            <button class="button" onclick="downloadImageFromUrl('${imageUrl}')">
                다운로드
            </button>
        </div>
    `;
}

// Download image from URL
window.downloadImageFromUrl = async function(imageUrl) {
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `generated-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Download error:', error);
        // 대체 방법: 새 탭에서 열기
        window.open(imageUrl, '_blank');
    }
}

// Export functions to window for HTML onclick events
window.generateImage = generateImage;
window.generateAlternativePrompt = generateAlternativePrompt;
window.variateImage = variateImage;
window.extractPrompt = extractPrompt;
window.generateVideoPrompt = generateVideoPrompt;
window.fallbackToGeminiVariation = fallbackToGeminiVariation;

async function generateAlternativePrompt(prompt) {
    // Gemini 2.5 Flash를 사용하여 향상된 프롬프트 생성
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Create an enhanced image generation prompt for: "${prompt}"

Rules:
1. Output ONLY the final prompt text
2. No introductions like "Here is" or "This is"
3. No explanations or additional text
4. Single paragraph format
5. Include: style, lighting, composition, colors, camera angle, quality modifiers

Prompt:`
                    }]
                }]
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0]) {
            let enhancedPrompt = data.candidates[0].content.parts[0].text;
            // 모든 안내문 제거
            enhancedPrompt = enhancedPrompt.replace(/^(Here is|Here's|This is|Here are).*?[:.]\s*/gi, '');
            enhancedPrompt = enhancedPrompt.replace(/^.*?prompt.*?[:.]\s*/gi, '');
            enhancedPrompt = enhancedPrompt.replace(/^Prompt[:.]\s*/gi, '');
            // 마지막 줄만 추출 (경우에 따라)
            const lines = enhancedPrompt.split('\n').filter(line => line.trim());
            if (lines.length > 1 && lines[lines.length - 1].length > 50) {
                enhancedPrompt = lines[lines.length - 1];
            }
            enhancedPrompt = enhancedPrompt.trim();
            // 생성된 프롬프트를 결과 영역에 표시
            const resultDiv = document.getElementById('gen-result');
            resultDiv.style.border = 'none';
            resultDiv.style.background = 'transparent';
            resultDiv.style.padding = '0';
            resultDiv.innerHTML = `
                <div style="flex: 1; display: flex; flex-direction: column;">
                    <div class="result-text" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 10px; padding: 20px; font-size: 13px; line-height: 1.6; flex: 1; overflow-y: auto; color: #e0e0e0; font-family: 'Courier New', monospace;">${enhancedPrompt}</div>
                </div>
                <div style="margin-top: 20px; display: flex; justify-content: center;">
                    <button class="button" onclick="copyToClipboard('${btoa(enhancedPrompt)}')">
                        프롬프트 복사
                    </button>
                </div>
            `;
        }
    } catch (error) {
        showAlert('error', '프롬프트 생성에 실패했습니다.');
    }
}

async function variateImage() {
    if (!geminiApiKey) {
        showAlert('error', 'API 키를 먼저 설정해주세요.');
        document.getElementById('api-key-card').style.display = 'block';
        return;
    }

    if (!uploadedImages.variator) {
        showAlert('error', '먼저 이미지를 업로드해주세요.');
        return;
    }

    const prompt = document.getElementById('var-prompt').value.trim();
    if (!prompt) {
        showAlert('error', '변형 지시사항을 입력해주세요.');
        return;
    }

    showLoading('var', true);

    try {
        if (nanoBananaApiKey) {
            // Nano Banana API로 이미지 변형
            const response = await fetch('https://api.nanobanana.com/v1/img2img', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': nanoBananaApiKey
                },
                body: JSON.stringify({
                    init_image: `data:${uploadedImages.variator.mimeType};base64,${uploadedImages.variator.base64}`,
                    prompt: prompt,
                    model: 'sdxl',
                    strength: 0.75,  // 변형 강도 (0-1)
                    steps: 30,
                    cfg_scale: 7.5,
                    width: 1024,
                    height: 1024
                })
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            const data = await response.json();

            // Nano Banana API 응답 처리
            if (data.status === 'processing') {
                showAlert('info', '이미지 변형 중... 잠시만 기다려주세요.');

                const taskId = data.task_id || data.id;
                let result = await pollNanoBananaResult(taskId, nanoBananaApiKey);

                if (result && result.image_url) {
                    displayVariatedImageFromUrl(result.image_url);
                    showAlert('success', '이미지가 성공적으로 변형되었습니다!');
                } else if (result && result.image) {
                    displayVariatedImage(result.image);
                    showAlert('success', '이미지가 성공적으로 변형되었습니다!');
                } else {
                    throw new Error('No image data in response');
                }
            } else if (data.image_url) {
                displayVariatedImageFromUrl(data.image_url);
                showAlert('success', '이미지가 성공적으로 변형되었습니다!');
            } else if (data.image) {
                displayVariatedImage(data.image);
                showAlert('success', '이미지가 성공적으로 변형되었습니다!');
            } else {
                throw new Error('Unexpected response format');
            }
        } else {
            // Nano Banana API 키가 없으면 Gemini로 변형 프롬프트 생성
            console.log('Nano Banana API key not found, using Gemini for variation prompt');
            showAlert('info', 'Nano Banana API 키가 없습니다. Gemini로 변형 프롬프트를 생성합니다.');

            // 이미지 분석 + 변형 프롬프트 생성을 위해 gemini-2.5-flash 모델 사용
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

            const imagePart = {
                inlineData: {
                    data: uploadedImages.variator.base64,
                    mimeType: uploadedImages.variator.mimeType
                }
            };

            const textPart = {
                text: `Analyze this image and create a detailed prompt that would generate a variation with these modifications: "${prompt}"

Provide ONLY the image generation prompt without any explanations or additional text.`
            };

            const result = await model.generateContent([imagePart, textPart]);
            const response = await result.response;

            if (response && response.candidates && response.candidates[0]) {
                let variationPrompt = response.candidates[0].content.parts[0].text;

                // 안내문 제거
                variationPrompt = variationPrompt.replace(/^(Here is|Here's|This is|Here are).*?[:.]\s*/gi, '');
                variationPrompt = variationPrompt.replace(/^.*?prompt.*?[:.]\s*/gi, '');
                variationPrompt = variationPrompt.trim();

                displayPromptResult('var', variationPrompt);
            }
        }

    } catch (error) {
        console.error('Error in variateImage:', error);

        if (nanoBananaApiKey) {
            showAlert('warning', 'Nano Banana API 오류. Gemini로 변형 프롬프트를 생성합니다.');
        }

        // Fallback to Gemini prompt generation
        fallbackToGeminiVariation(prompt);
    } finally {
        showLoading('var', false);
    }
}

window.variateImage = variateImage;

async function fallbackToGeminiVariation(prompt) {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        {
                            inline_data: {
                                mime_type: uploadedImages.variator.mimeType,
                                data: uploadedImages.variator.base64
                            }
                        },
                        {
                            text: `Analyze this image and create a variation prompt with these changes: "${prompt}"

Provide ONLY the enhanced prompt without explanations. Maintain the core elements while applying the requested variations. Output format: single paragraph English prompt.`
                        }
                    ]
                }]
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0]) {
            const variationPrompt = data.candidates[0].content.parts[0].text;
            displayPromptResult('var', variationPrompt);
        }
    } catch (error) {
        console.error('Error:', error);
        showAlert('error', '이미지 변형에 실패했습니다.');
    }
}

function displayVariatedImage(base64) {
    const resultDiv = document.getElementById('var-result');
    resultDiv.style.border = 'none';
    resultDiv.style.background = 'transparent';
    resultDiv.style.padding = '0';

    // base64가 data URL인지 확인
    let imageSrc = base64;
    if (!base64.startsWith('data:')) {
        imageSrc = `data:image/png;base64,${base64}`;
    }

    resultDiv.innerHTML = `
        <div style="flex: 1; display: flex; flex-direction: column;">
            <img src="${imageSrc}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 10px; flex: 1;" onerror="console.error('Image failed to load')">
        </div>
        <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
            <button class="button" onclick="downloadImage('${base64}')">
                다운로드
            </button>
        </div>
    `;
}

async function extractPrompt() {
    if (!checkApiKey()) return;

    if (!uploadedImages.extractor) {
        showAlert('error', '먼저 이미지를 업로드해주세요.');
        return;
    }

    showLoading('ext', true);

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        {
                            inline_data: {
                                mime_type: uploadedImages.extractor.mimeType,
                                data: uploadedImages.extractor.base64
                            }
                        },
                        {
                            text: `Analyze this image and generate only the prompt that could recreate it. Do not include any explanations, instructions, or additional text. Just provide the prompt in this format:

[style], [medium], [subject], [camera angle], [composition], [lighting], [color palette], [mood], [details], [quality modifiers]`
                        }
                    ]
                }]
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0]) {
            const extractedPrompt = data.candidates[0].content.parts[0].text;
            displayPromptResult('ext', extractedPrompt);
        }
    } catch (error) {
        console.error('Error:', error);
        showAlert('error', '프롬프트 추출에 실패했습니다.');
    } finally {
        showLoading('ext', false);
    }
}

async function generateVideoPrompt() {
    if (!checkApiKey()) return;

    const prompt = document.getElementById('video-prompt').value.trim();
    if (!prompt) {
        showAlert('error', '영상 아이디어를 입력해주세요.');
        return;
    }

    showLoading('video', true);

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Create a video generation prompt in JSON format for: "${prompt}"

Provide ONLY the JSON object without any explanation or additional text. Include:
{
  "metadata": {"title": "", "duration": ""},
  "scene": "",
  "camera": "",
  "characters": "",
  "lighting": "",
  "audio": "",
  "style": "",
  "color": ""
}`
                    }]
                }],
                generationConfig: {
                    temperature: 0.7
                }
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0]) {
            let videoPrompt = data.candidates[0].content.parts[0].text;

            // Try to format as JSON
            try {
                const jsonMatch = videoPrompt.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    const jsonObj = JSON.parse(jsonMatch[0]);
                    videoPrompt = JSON.stringify(jsonObj, null, 2);
                }
            } catch (e) {
                // If not valid JSON, use as is
            }

            displayPromptResult('video', videoPrompt);
        }
    } catch (error) {
        console.error('Error:', error);
        showAlert('error', '영상 프롬프트 생성에 실패했습니다.');
    } finally {
        showLoading('video', false);
    }
}

// Helper Functions
function checkApiKey() {
    if (!geminiApiKey) {
        showAlert('error', 'Gemini API 키를 먼저 설정해주세요.');
        document.getElementById('api-key-card').style.display = 'block';
        document.getElementById('api-key-card').scrollIntoView({ behavior: 'smooth' });
        return false;
    }
    // Nano Banana API 키는 선택사항
    return true;
}

window.copyImagePrompt = function() {
    const prompt = document.getElementById('gen-prompt').value;
    if (prompt) {
        copyToClipboard(btoa(prompt));
    } else {
        showAlert('error', '복사할 프롬프트가 없습니다.');
    }
}

function showLoading(type, show) {
    const loading = document.getElementById(`${type}-loading`);
    if (loading) {
        loading.classList.toggle('active', show);
    }
}

function displayGeneratedImage(base64) {
    const resultDiv = document.getElementById('gen-result');
    resultDiv.style.border = 'none';
    resultDiv.style.background = 'transparent';
    resultDiv.style.padding = '0';

    // base64가 data URL인지 확인
    let imageSrc = base64;
    if (!base64.startsWith('data:')) {
        imageSrc = `data:image/png;base64,${base64}`;
    }

    resultDiv.innerHTML = `
        <div style="flex: 1; display: flex; flex-direction: column;">
            <img src="${imageSrc}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 10px; flex: 1;" onerror="console.error('Image failed to load')">
        </div>
        <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
            <button class="button" onclick="downloadImage('${base64}')">
                다운로드
            </button>
            <button class="button button-secondary" onclick="copyImagePrompt()">
                프롬프트 복사
            </button>
        </div>
    `;
}

function displayPromptResult(type, prompt) {
    const resultDiv = document.getElementById(`${type}-result`);

    // 스타일 초기화
    resultDiv.style.border = 'none';
    resultDiv.style.background = 'transparent';
    resultDiv.style.padding = '0';

    // 모든 탭에서 동일한 스타일로 통일
    resultDiv.innerHTML = `
        <div style="flex: 1; display: flex; flex-direction: column;">
            <div class="result-text" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 10px; padding: 20px; font-size: 13px; line-height: 1.6; flex: 1; overflow-y: auto; color: #e0e0e0; font-family: 'Courier New', monospace;">${prompt}</div>
        </div>
        <div style="margin-top: 20px; display: flex; justify-content: center;">
            <button class="button" onclick="copyToClipboard('${btoa(prompt)}')">
                프롬프트 복사
            </button>
        </div>
    `;
}

window.copyToClipboard = function(base64Text) {
    const text = atob(base64Text);
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        showAlert('success', '클립보드에 복사되었습니다!');
    } catch (err) {
        showAlert('error', '복사에 실패했습니다.');
    }

    document.body.removeChild(textarea);
}

window.downloadImage = function(base64) {
    const link = document.createElement('a');
    link.href = `data:image/jpeg;base64,${base64}`;
    link.download = `generated-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// AIFI Tool - Vanilla JS Version

// Global variables
let geminiApiKey = localStorage.getItem('gemini_api_key') || '';
let nanoBananaApiKey = localStorage.getItem('nano_banana_api_key') || '';
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
    }
    if (nanoBananaApiKey) {
        document.getElementById('nano-api-key').value = nanoBananaApiKey;
    }
    if (geminiApiKey && nanoBananaApiKey) {
        document.getElementById('api-key-card').style.display = 'none';
    }

    // Setup drag and drop
    setupDragAndDrop();
});

// API Key Management
function saveApiKey() {
    const geminiKey = document.getElementById('gemini-api-key').value.trim();
    const nanoKey = document.getElementById('nano-api-key').value.trim();

    if (!geminiKey || !nanoKey) {
        showAlert('error', '모든 API 키를 입력해주세요.');
        return;
    }

    geminiApiKey = geminiKey;
    nanoBananaApiKey = nanoKey;
    localStorage.setItem('gemini_api_key', geminiKey);
    localStorage.setItem('nano_banana_api_key', nanoKey);
    document.getElementById('api-key-card').style.display = 'none';
    showAlert('success', 'API 키가 저장되었습니다!');
}

// Tab Switching
function switchTab(tabName) {
    // Update buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

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
function handleVariatorFile(event) {
    handleImageFile(event, 'variator');
}

function handleExtractorFile(event) {
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

function clearImage(type) {
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
    if (!checkApiKey()) return;

    const prompt = document.getElementById('gen-prompt').value.trim();
    if (!prompt) {
        showAlert('error', '프롬프트를 입력해주세요.');
        return;
    }

    showLoading('gen', true);

    try {
        // Nano Banana API를 사용하여 이미지 생성
        const response = await fetch('https://api.nanobanano.com/v1/generate', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${nanoBananaApiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: prompt,
                model: 'flux-1.1-pro',
                width: 1024,
                height: 1024,
                steps: 30
            })
        });

        if (!response.ok) {
            throw new Error('이미지 생성에 실패했습니다.');
        }

        const data = await response.json();
        if (data.image) {
            displayGeneratedImage(data.image);
        } else {
            // Nano Banana가 실패하면 프롬프트 향상 제공
            showAlert('warning', 'Nano Banana API를 사용할 수 없습니다. 향상된 프롬프트를 생성합니다.');
            generateAlternativePrompt(prompt);
        }
    } catch (error) {
        console.error('Error:', error);
        // 에러 발생시 프롬프트 향상 제공
        generateAlternativePrompt(prompt);
    } finally {
        showLoading('gen', false);
    }
}

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
                        text: `다음 아이디어를 Midjourney나 DALL-E 3에서 사용할 수 있는 상세한 이미지 생성 프롬프트로 변환해주세요. 영어로 작성하고, 스타일, 조명, 구도, 색상 등을 포함해주세요. 프롬프트만 제공하고 추가 설명은 하지 마세요.\n\n"${prompt}"`
                    }]
                }]
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0]) {
            const enhancedPrompt = data.candidates[0].content.parts[0].text;
            // 생성된 프롬프트를 결과 영역에 표시
            const resultDiv = document.getElementById('gen-result');
            resultDiv.style.border = 'none';
            resultDiv.style.background = 'transparent';
            resultDiv.style.padding = '0';
            resultDiv.innerHTML = `
                <div style="flex: 1; display: flex; flex-direction: column;">
                    <div style="background: rgba(255, 193, 7, 0.1); border: 1px solid rgba(255, 193, 7, 0.3); border-radius: 10px; padding: 15px; margin-bottom: 15px;">
                        <p style="color: #FFC107; margin: 0; font-size: 12px;">⚠️ Imagen API 대신 프롬프트를 생성했습니다</p>
                    </div>
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
    if (!checkApiKey()) return;

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
        // Nano Banana API를 사용하여 이미지 변형
        const response = await fetch('https://api.nanobanano.com/v1/img2img', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${nanoBananaApiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image: uploadedImages.variator.base64,
                prompt: prompt,
                model: 'flux-1.1-pro',
                strength: 0.7,
                steps: 30
            })
        });

        const data = await response.json();
        if (data.image) {
            displayVariatedImage(data.image);
        } else {
            // 실패하면 Gemini로 프롬프트 생성
            fallbackToGeminiVariation(prompt);
        }
    } catch (error) {
        console.error('Error:', error);
        // 에러 발생시 Gemini로 프롬프트 생성
        fallbackToGeminiVariation(prompt);
    } finally {
        showLoading('var', false);
    }
}

async function fallbackToGeminiVariation(prompt) {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-vision:generateContent?key=${geminiApiKey}`, {
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
                            text: `이 이미지를 다음과 같이 변형하기 위한 상세한 프롬프트를 생성해주세요: "${prompt}"\n\n원본 이미지의 주요 요소를 유지하면서 요청된 변형을 적용한 새로운 이미지 생성 프롬프트만 영어로 작성해주세요. 추가 설명이나 안내글은 포함하지 마세요.`
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
    resultDiv.innerHTML = `
        <div style="flex: 1; display: flex; flex-direction: column;">
            <img src="data:image/jpeg;base64,${base64}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 10px; flex: 1;">
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
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-vision:generateContent?key=${geminiApiKey}`, {
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
    if (!geminiApiKey || !nanoBananaApiKey) {
        showAlert('error', 'API 키를 먼저 설정해주세요.');
        document.getElementById('api-key-card').style.display = 'block';
        document.getElementById('api-key-card').scrollIntoView({ behavior: 'smooth' });
        return false;
    }
    return true;
}

function copyImagePrompt() {
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
    resultDiv.innerHTML = `
        <div style="flex: 1; display: flex; flex-direction: column;">
            <img src="data:image/jpeg;base64,${base64}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 10px; flex: 1;">
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

function copyToClipboard(base64Text) {
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

function downloadImage(base64) {
    const link = document.createElement('a');
    link.href = `data:image/jpeg;base64,${base64}`;
    link.download = `generated-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
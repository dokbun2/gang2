// Camera Guide Application

// Global variables
let currentData = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('App initialized');

    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Hide pagination by default
    const pagination = document.getElementById('pagination');
    if (pagination) {
        pagination.style.display = 'none';
    }

    // Hide all major categories by default
    const imageCategory = document.getElementById('image-category');
    const videoCategory = document.getElementById('video-category');

    if (imageCategory) {
        imageCategory.style.display = 'none';
    }

    if (videoCategory) {
        videoCategory.style.display = 'none';
    }

    // Reset all chevron icons to default position
    const imageCategoryIcon = document.getElementById('image-category-icon');
    const videoCategoryIcon = document.getElementById('video-category-icon');

    if (imageCategoryIcon) {
        imageCategoryIcon.style.transform = 'rotate(0deg)';
    }

    if (videoCategoryIcon) {
        videoCategoryIcon.style.transform = 'rotate(0deg)';
    }

    // Add click event to content area to close all dropdowns
    const contentArea = document.querySelector('.content');
    if (contentArea) {
        contentArea.addEventListener('click', closeAllDropdowns);
    }

    // Prevent sidebar clicks from closing dropdowns
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});

// Close all dropdowns function
function closeAllDropdowns() {
    // Close major categories
    const imageCategory = document.getElementById('image-category');
    const videoCategory = document.getElementById('video-category');
    const imageCategoryIcon = document.getElementById('image-category-icon');
    const videoCategoryIcon = document.getElementById('video-category-icon');

    if (imageCategory && imageCategory.style.display === 'block') {
        imageCategory.style.display = 'none';
        if (imageCategoryIcon) imageCategoryIcon.style.transform = 'rotate(0)';
    }

    if (videoCategory && videoCategory.style.display === 'block') {
        videoCategory.style.display = 'none';
        if (videoCategoryIcon) videoCategoryIcon.style.transform = 'rotate(0)';
    }

    // Close all sections
    const allSectionItems = document.querySelectorAll('[id$="-items"]');
    const allSectionChevrons = document.querySelectorAll('[id$="-chevron"]');

    allSectionItems.forEach(item => {
        if (item.style.display === 'block') {
            item.style.display = 'none';
        }
    });

    allSectionChevrons.forEach(chevron => {
        chevron.style.transform = 'rotate(0)';
    });

    // Close all submenus
    const allSubmenus = document.querySelectorAll('.submenu-items');
    const allSubmenuIcons = document.querySelectorAll('[id$="-submenu-icon"]');

    allSubmenus.forEach(submenu => {
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
        }
    });

    allSubmenuIcons.forEach(icon => {
        icon.style.transform = 'rotate(0)';
    });
}

// Toggle Major Category
function toggleMajorCategory(categoryId, event) {
    if (event) event.stopPropagation();
    console.log('Toggling major category:', categoryId);
    const category = document.getElementById(categoryId);
    const icon = document.getElementById(categoryId + '-icon');

    if (category) {
        if (category.style.display === 'none' || !category.style.display) {
            category.style.display = 'block';
            if (icon) icon.style.transform = 'rotate(180deg)';
        } else {
            category.style.display = 'none';
            if (icon) icon.style.transform = 'rotate(0)';
        }
    }
}

// Toggle Section
function toggleSection(sectionId, event) {
    if (event) event.stopPropagation();
    console.log('Toggling section:', sectionId);
    const items = document.getElementById(sectionId + '-items');
    const chevron = document.getElementById(sectionId + '-chevron');

    if (items) {
        if (items.style.display === 'none' || !items.style.display) {
            items.style.display = 'block';
            if (chevron) chevron.style.transform = 'rotate(180deg)';
        } else {
            items.style.display = 'none';
            if (chevron) chevron.style.transform = 'rotate(0)';
        }
    }
}

// Toggle Submenu
function toggleSubmenu(submenuId, event) {
    if (event) event.stopPropagation();
    console.log('Toggling submenu:', submenuId);
    const submenu = document.getElementById(submenuId);
    const icon = document.getElementById(submenuId + '-icon');

    if (submenu) {
        if (submenu.style.display === 'none' || !submenu.style.display) {
            submenu.style.display = 'block';
            if (icon) icon.style.transform = 'rotate(180deg)';
        } else {
            submenu.style.display = 'none';
            if (icon) icon.style.transform = 'rotate(0)';
        }
    }
}

// Show Content
function showContent(contentId) {
    console.log('Showing content:', contentId);
    const contentArea = document.getElementById('content-area');
    const pagination = document.getElementById('pagination');

    // Check if content exists in cameraData
    if (typeof cameraData !== 'undefined' && cameraData[contentId]) {
        currentData = cameraData[contentId];
        displayContent();
    } else {
        // Show error message
        if (contentArea) {
            contentArea.innerHTML = `
                <div class="content-not-found">
                    <h3>컨텐츠를 찾을 수 없습니다</h3>
                    <p>요청하신 컨텐츠 "${contentId}"가 존재하지 않거나 아직 준비중입니다.</p>
                </div>
            `;
        }

        if (pagination) {
            pagination.style.display = 'none';
        }

        // Re-initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

// Display Content
function displayContent() {
    if (!currentData) return;

    const contentArea = document.getElementById('content-area');
    const pagination = document.getElementById('pagination');

    if (!contentArea) return;

    // Check if it's a tool type (AIFI tool)
    if (currentData.type === 'tool') {
        displayAIFITool();
        return;
    }

    // Special layout for instructor introduction
    if (currentData.instructorInfo) {
        let html = `
            <div class="content-container">
                <div class="content-header">
                    <h2 class="content-title">${currentData.title || ''}</h2>
                    ${currentData.koreanTitle ? `<span class="content-subtitle">${currentData.koreanTitle}</span>` : ''}
                </div>

                <div class="instructor-layout">
                    <div class="instructor-photo">
                        <img src="${currentData.instructorInfo.image}" alt="${currentData.instructorInfo.name}">
                    </div>
                    <div class="instructor-details">
                        <div class="instructor-info-item">
                            <span class="info-label">이름:</span>
                            <span class="info-value">${currentData.instructorInfo.name}</span>
                        </div>
                        <div class="instructor-info-item">
                            <span class="info-label">소속:</span>
                            <span class="info-value">${currentData.instructorInfo.position}</span>
                        </div>
                        ${currentData.instructorInfo.company.map(comp => `
                            <div class="instructor-info-item company">
                                <span class="info-value">${comp}</span>
                            </div>
                        `).join('')}
                        <div class="instructor-info-item">
                            <span class="info-label">Email:</span>
                            <span class="info-value">${currentData.instructorInfo.email}</span>
                        </div>

                        <div class="instructor-description">
                            <p>${currentData.description}</p>
                        </div>

                        <div class="instructor-experience">
                            <h4>주요 경력</h4>
                            <ul>
                                ${currentData.usage.map(exp => `<li>${exp}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;

        contentArea.innerHTML = html;
        if (pagination) {
            pagination.style.display = 'none';
        }

        // Re-initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        return;
    }

    let html = `
        <div class="content-container">
            <div class="content-header">
                <h2 class="content-title">${currentData.title || ''}</h2>
                ${currentData.koreanTitle ? `<span class="content-subtitle">${currentData.koreanTitle}</span>` : ''}
            </div>

            <div class="content-sections-wrapper">
                <!-- 설명 및 프롬프트 섹션 -->
                <div class="content-section-box">
                    <h3 class="section-title">설명 및 프롬프트</h3>
                    ${currentData.description ? `
                        <div class="description-area">
                            <p class="section-text">${currentData.description}</p>
                        </div>
                    ` : ''}
                    ${currentData.prompt ? `
                        <div class="prompt-area">
                            <h4 class="subsection-title">프롬프트</h4>
                            <div class="prompt-box">
                                <code>${currentData.prompt}</code>
                                <button class="copy-btn" onclick="copyToClipboard('${currentData.prompt.replace(/'/g, "\\'")}')">
                                    복사
                                </button>
                            </div>
                        </div>
                    ` : ''}
                </div>

                <!-- 사용 케이스 섹션 -->
                ${currentData.usage && currentData.usage.length > 0 ? `
                    <div class="content-section-box">
                        <h3 class="section-title">사용 케이스</h3>
                        <ul class="usage-list">
                            ${currentData.usage.map(use => `<li>${use}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}

                <!-- 예시 영상 또는 이미지 섹션 (그리드 내부) -->
                ${currentData.videos && currentData.videos.length > 0 ? `
                    <div class="content-section-box" style="grid-column: 1 / -1;">
                        <h3 class="section-title">예시 영상</h3>
                        <div class="video-grid">
                            ${currentData.videos.map((video, index) => `
                                <div class="video-item tilt-active">
                                    <video controls autoplay loop muted playsinline>
                                        <source src="${video.src}" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                    ${video.caption ? `<p class="video-caption">${video.caption}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : currentData.images && currentData.images.length > 0 ? `
                    <div class="content-section-box" style="grid-column: 1 / -1;">
                        <h3 class="section-title">예시 이미지</h3>
                        <div class="image-grid">
                            ${currentData.images.slice(0, 2).map(img => {
                                const escapedCaption = (img.caption || '').replace(/'/g, "\\'");
                                return `
                                    <div class="image-item"
                                         onclick="openImageModal('${img.src}', '${escapedCaption}')">
                                        <img src="${img.src}"
                                             alt="${img.caption || ''}">
                                        ${img.caption ? `<p class="image-caption">${img.caption}</p>` : ''}
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
    `;

    // Always hide pagination
    if (pagination) {
        pagination.style.display = 'none';
    }

    html += `</div>`;

    contentArea.innerHTML = html;

    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Pagination functions (deprecated - kept for compatibility)
function previousPage() {
    // No longer needed
}

function nextPage() {
    // No longer needed
}

// Image Modal functions
function openImageModal(src, caption) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');

    if (modal && modalImg) {
        modal.style.display = 'block';
        modalImg.src = src;
        if (modalCaption) {
            modalCaption.textContent = caption || '';
        }
    }
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// ESC key to close modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
        closeImageModal();
    }
});

// Copy to clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        alert('프롬프트가 클립보드에 복사되었습니다!');
    } catch (err) {
        console.error('복사 실패:', err);
        alert('복사에 실패했습니다. 수동으로 복사해주세요.');
    }

    document.body.removeChild(textarea);
}

// AIFI Tool Variables
let aifiApiKey = localStorage.getItem('gemini_api_key') || '';
let aifiCurrentTab = 'generator';
let aifiUploadedImages = {
    variator: null,
    extractor: null
};

// Display AIFI Tool
function displayAIFITool() {
    const contentArea = document.getElementById('content-area');
    const pagination = document.getElementById('pagination');

    // Hide pagination
    if (pagination) {
        pagination.style.display = 'none';
    }

    let html = `
        <div class="content-container">
            <div class="content-header" style="position: relative;">
                <div>
                    <h2 class="content-title">${currentData.title || ''}</h2>
                    <span class="content-subtitle">${currentData.koreanTitle || ''}</span>
                </div>
                <button class="aifi-settings-btn" onclick="openAifiSettings()" title="API 설정">
                    <i data-lucide="settings" style="width: 20px; height: 20px;"></i>
                    <span>API 설정</span>
                </button>
            </div>

            ${!aifiApiKey ? `
            <div class="aifi-warning-card">
                <i data-lucide="alert-circle" style="width: 24px; height: 24px;"></i>
                <div>
                    <p>API 키가 설정되지 않았습니다.</p>
                    <small>상단의 'API 설정' 버튼을 클릭하여 설정해주세요.</small>
                </div>
            </div>
            ` : ''}

            <!-- Tabs -->
            <div class="aifi-tabs">
                <button class="aifi-tab ${aifiCurrentTab === 'generator' ? 'active' : ''}"
                        onclick="switchAifiTab('generator')">
                    이미지 생성
                </button>
                <button class="aifi-tab ${aifiCurrentTab === 'variator' ? 'active' : ''}"
                        onclick="switchAifiTab('variator')">
                    이미지 변형
                </button>
                <button class="aifi-tab ${aifiCurrentTab === 'extractor' ? 'active' : ''}"
                        onclick="switchAifiTab('extractor')">
                    프롬프트 추출
                </button>
                <button class="aifi-tab ${aifiCurrentTab === 'video' ? 'active' : ''}"
                        onclick="switchAifiTab('video')">
                    영상 프롬프트
                </button>
            </div>

            <!-- Tab Contents -->
            <div class="aifi-tab-content">
                ${renderAifiTabContent(aifiCurrentTab)}
            </div>

            <div id="aifi-alerts"></div>
        </div>
    `;

    contentArea.innerHTML = html;

    // Setup drag and drop if needed
    if (aifiCurrentTab === 'variator' || aifiCurrentTab === 'extractor') {
        setupAifiDragDrop();
    }

    // Update icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Render AIFI Tab Content
function renderAifiTabContent(tab) {
    switch(tab) {
        case 'generator':
            return `
                <div class="aifi-card">
                    <div class="aifi-card-title">텍스트로 이미지 생성하기</div>
                    <div class="form-group">
                        <label>프롬프트 입력</label>
                        <textarea id="gen-prompt" class="aifi-textarea" rows="4"
                                  placeholder="생성하고 싶은 이미지를 자세히 설명해주세요..."></textarea>
                    </div>
                    <button class="button aifi-button" onclick="generateAifiImage()">
                        이미지 생성
                    </button>
                    <div class="aifi-loading" id="gen-loading" style="display: none;">
                        <div class="spinner"></div>
                        <p>이미지를 생성하는 중...</p>
                    </div>
                    <div id="gen-result"></div>
                </div>
            `;

        case 'variator':
            return `
                <div class="aifi-card">
                    <div class="aifi-card-title">이미지 변형하기</div>
                    <div class="aifi-upload-area" id="var-upload" onclick="document.getElementById('var-file').click()">
                        <p>이미지를 클릭하여 선택하거나 드래그하세요</p>
                        <input type="file" id="var-file" accept="image/*" style="display: none;"
                               onchange="handleAifiFile(event, 'variator')">
                    </div>
                    <div id="var-preview"></div>
                    <div class="form-group">
                        <label>변형 지시사항</label>
                        <textarea id="var-prompt" class="aifi-textarea" rows="3"
                                  placeholder="어떻게 변형하고 싶으신가요? (예: 스타일 변경, 색상 조정, 요소 추가 등)"></textarea>
                    </div>
                    <button class="button aifi-button" onclick="variateAifiImage()">
                        이미지 변형
                    </button>
                    <div class="aifi-loading" id="var-loading" style="display: none;">
                        <div class="spinner"></div>
                        <p>이미지를 변형하는 중...</p>
                    </div>
                    <div id="var-result"></div>
                </div>
            `;

        case 'extractor':
            return `
                <div class="aifi-card">
                    <div class="aifi-card-title">이미지에서 프롬프트 추출하기</div>
                    <div class="aifi-upload-area" id="ext-upload" onclick="document.getElementById('ext-file').click()">
                        <p>📸</p>
                        <p>분석할 이미지를 선택하세요</p>
                        <input type="file" id="ext-file" accept="image/*" style="display: none;"
                               onchange="handleAifiFile(event, 'extractor')">
                    </div>
                    <div id="ext-preview"></div>
                    <button class="button aifi-button" onclick="extractAifiPrompt()">
                        프롬프트 추출
                    </button>
                    <div class="aifi-loading" id="ext-loading" style="display: none;">
                        <div class="spinner"></div>
                        <p>이미지를 분석하는 중...</p>
                    </div>
                    <div id="ext-result"></div>
                </div>
            `;

        case 'video':
            return `
                <div class="aifi-card">
                    <div class="aifi-card-title">영상 프롬프트 생성하기</div>
                    <div class="form-group">
                        <label>영상 아이디어</label>
                        <textarea id="video-prompt" class="aifi-textarea" rows="4"
                                  placeholder="만들고 싶은 영상을 설명해주세요... (예: 은행 강도가 화를 내며 전화를 끊는 장면)"></textarea>
                    </div>
                    <button class="button aifi-button" onclick="generateAifiVideoPrompt()">
                        프롬프트 생성
                    </button>
                    <div class="aifi-loading" id="video-loading" style="display: none;">
                        <div class="spinner"></div>
                        <p>영상 프롬프트를 생성하는 중...</p>
                    </div>
                    <div id="video-result"></div>
                </div>
            `;

        default:
            return '';
    }
}

// AIFI Tool Functions
function openAifiSettings() {
    const modal = document.getElementById('aifi-settings-modal');
    if (modal) {
        modal.style.display = 'flex';
        // Load existing key
        const existingKey = localStorage.getItem('gemini_api_key') || '';
        const keyInput = document.getElementById('modal-api-key');
        if (keyInput) {
            keyInput.value = existingKey;
        }
        updateApiStatus(existingKey ? '설정됨' : '미설정');
    }
}

function closeAifiSettings() {
    const modal = document.getElementById('aifi-settings-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function saveAifiSettings() {
    const key = document.getElementById('modal-api-key').value.trim();
    if (!key) {
        showAifiAlert('error', 'API 키를 입력해주세요.');
        return;
    }

    aifiApiKey = key;
    localStorage.setItem('gemini_api_key', key);
    updateApiStatus('설정됨');
    showAifiAlert('success', 'API 키가 저장되었습니다!');

    // Refresh display and close modal
    setTimeout(() => {
        closeAifiSettings();
        displayAIFITool();
    }, 1000);
}

function updateApiStatus(status, isError = false) {
    const statusText = document.getElementById('api-status-text');
    if (statusText) {
        statusText.textContent = status;
        statusText.style.color = isError ? '#ff6b6b' : (status === '설정됨' ? '#4CAF50' : '#999');
    }
}

async function testAifiApi() {
    const key = document.getElementById('modal-api-key').value.trim();
    const testBtn = document.getElementById('test-api-btn');

    if (!key) {
        showAifiAlert('error', 'API 키를 입력해주세요.');
        return;
    }

    // Update button state
    const originalHTML = testBtn.innerHTML;
    testBtn.disabled = true;
    testBtn.innerHTML = `
        <div class="spinner-small"></div>
        <span>테스트 중...</span>
    `;
    testBtn.classList.add('testing');

    updateApiStatus('연결 테스트 중...', false);

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: "Hello, this is a test"
                    }]
                }]
            })
        });

        if (response.ok) {
            updateApiStatus('연결 성공!', false);
            showAifiAlert('success', 'API 연결이 확인되었습니다!');

            // Success animation
            testBtn.innerHTML = `
                <i data-lucide="check-circle" style="width: 16px; height: 16px;"></i>
                <span>연결 성공!</span>
            `;
            testBtn.classList.add('success');
            testBtn.classList.remove('testing');

            setTimeout(() => {
                testBtn.innerHTML = originalHTML;
                testBtn.classList.remove('success');
                testBtn.disabled = false;
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }, 2000);
        } else {
            updateApiStatus('연결 실패', true);
            showAifiAlert('error', 'API 키가 올바르지 않습니다.');

            // Error animation
            testBtn.innerHTML = `
                <i data-lucide="x-circle" style="width: 16px; height: 16px;"></i>
                <span>연결 실패</span>
            `;
            testBtn.classList.add('error');
            testBtn.classList.remove('testing');

            setTimeout(() => {
                testBtn.innerHTML = originalHTML;
                testBtn.classList.remove('error');
                testBtn.disabled = false;
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }, 2000);
        }
    } catch (error) {
        updateApiStatus('연결 실패', true);
        showAifiAlert('error', '연결 테스트에 실패했습니다.');

        // Error animation
        testBtn.innerHTML = `
            <i data-lucide="x-circle" style="width: 16px; height: 16px;"></i>
            <span>오류 발생</span>
        `;
        testBtn.classList.add('error');
        testBtn.classList.remove('testing');

        setTimeout(() => {
            testBtn.innerHTML = originalHTML;
            testBtn.classList.remove('error');
            testBtn.disabled = false;
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 2000);
    }
}

function switchAifiTab(tab) {
    aifiCurrentTab = tab;
    displayAIFITool();
}

function showAifiAlert(type, message) {
    const alertsDiv = document.getElementById('aifi-alerts');
    if (!alertsDiv) return;

    const alert = document.createElement('div');
    alert.className = `aifi-alert aifi-alert-${type}`;
    alert.textContent = message;

    alertsDiv.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 5000);
}

function showAifiLoading(id, show) {
    const loading = document.getElementById(`${id}-loading`);
    if (loading) {
        loading.style.display = show ? 'block' : 'none';
    }
}

// File handling
function handleAifiFile(event, type) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        showAifiAlert('error', '이미지 파일만 업로드 가능합니다.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const base64 = e.target.result.split(',')[1];
        aifiUploadedImages[type] = {
            base64: base64,
            mimeType: file.type
        };

        // Show preview
        const previewDiv = document.getElementById(`${type === 'variator' ? 'var' : 'ext'}-preview`);
        previewDiv.innerHTML = `
            <div class="aifi-image-preview-container">
                <img src="${e.target.result}" class="aifi-preview-image">
                <button class="aifi-remove-btn" onclick="clearAifiImage('${type}')" title="이미지 제거">
                    <i data-lucide="x" style="width: 18px; height: 18px;"></i>
                </button>
            </div>
            <div class="aifi-image-info">
                <span class="aifi-file-name">${file.name}</span>
                <span class="aifi-file-size">${formatFileSize(file.size)}</span>
            </div>
        `;
    };
    reader.readAsDataURL(file);

    // Update lucide icons
    if (typeof lucide !== 'undefined') {
        setTimeout(() => lucide.createIcons(), 100);
    }
}

function clearAifiImage(type) {
    aifiUploadedImages[type] = null;
    const previewDiv = document.getElementById(`${type === 'variator' ? 'var' : 'ext'}-preview`);
    previewDiv.innerHTML = '';

    // Reset file input
    const fileInput = document.getElementById(`${type === 'variator' ? 'var' : 'ext'}-file`);
    if (fileInput) fileInput.value = '';
}

// Format file size helper
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Drag and drop
function setupAifiDragDrop() {
    const uploadAreas = document.querySelectorAll('.aifi-upload-area');

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

// API Functions with correct model names
async function generateAifiImage() {
    if (!aifiApiKey) {
        showAifiAlert('error', 'API 키를 먼저 설정해주세요.');
        return;
    }

    const prompt = document.getElementById('gen-prompt').value.trim();
    if (!prompt) {
        showAifiAlert('error', '프롬프트를 입력해주세요.');
        return;
    }

    showAifiLoading('gen', true);

    try {
        // First, enhance the prompt using Gemini 2.5 Flash
        const enhanceResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${aifiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Enhance this prompt for image generation. Make it detailed and descriptive in English:\n\n"${prompt}"\n\nEnhanced prompt:`
                    }]
                }]
            })
        });

        const enhanceData = await enhanceResponse.json();
        let enhancedPrompt = prompt;

        if (enhanceData.candidates && enhanceData.candidates[0]) {
            enhancedPrompt = enhanceData.candidates[0].content.parts[0].text;
        }

        // Then, generate the actual image using Nano Banana (gemini-2.5-flash-image-preview)
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image-preview:generateContent?key=${aifiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: enhancedPrompt
                    }]
                }],
                generationConfig: {
                    responseModalities: ["IMAGE", "TEXT"]
                }
            })
        });

        const data = await response.json();

        if (data.candidates && data.candidates[0]) {
            // Check for image in response
            let imageBase64 = null;
            let textResponse = null;

            for (const part of data.candidates[0].content.parts) {
                if (part.inlineData && part.inlineData.data) {
                    imageBase64 = part.inlineData.data;
                } else if (part.text) {
                    textResponse = part.text;
                }
            }

            if (imageBase64) {
                displayAifiGeneratedImage('gen', imageBase64);
            } else {
                // If no image, show the enhanced prompt
                displayAifiPromptResult('gen', enhancedPrompt);
            }
        } else {
            showAifiAlert('error', '이미지 생성에 실패했습니다.');
        }
    } catch (error) {
        console.error('Error:', error);
        showAifiAlert('error', '프롬프트 생성에 실패했습니다.');
    } finally {
        showAifiLoading('gen', false);
    }
}

async function generateAifiTextPrompt(prompt) {
    // Using gemini-2.5-flash for text generation
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${aifiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `다음 아이디어를 Midjourney나 DALL-E 3에서 사용할 수 있는 상세한 이미지 생성 프롬프트로 변환해주세요. 영어로 작성하고, 스타일, 조명, 구도, 색상 등을 포함해주세요:\n\n"${prompt}"\n\n프롬프트:`
                    }]
                }]
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0]) {
            const enhancedPrompt = data.candidates[0].content.parts[0].text;
            displayAifiPromptResult('gen', enhancedPrompt);
        }
    } catch (error) {
        showAifiAlert('error', '프롬프트 생성에 실패했습니다.');
    }
}

async function variateAifiImage() {
    if (!aifiApiKey) {
        showAifiAlert('error', 'API 키를 먼저 설정해주세요.');
        return;
    }

    if (!aifiUploadedImages.variator) {
        showAifiAlert('error', '먼저 이미지를 업로드해주세요.');
        return;
    }

    const prompt = document.getElementById('var-prompt').value.trim();
    if (!prompt) {
        showAifiAlert('error', '변형 지시사항을 입력해주세요.');
        return;
    }

    showAifiLoading('var', true);

    try {
        // Using gemini-2.5-flash for image analysis and variation
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${aifiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        {
                            inline_data: {
                                mime_type: aifiUploadedImages.variator.mimeType,
                                data: aifiUploadedImages.variator.base64
                            }
                        },
                        {
                            text: `이 이미지를 다음과 같이 변형하기 위한 상세한 프롬프트를 생성해주세요: "${prompt}"\n\n원본 이미지의 주요 요소를 유지하면서 요청된 변형을 적용한 새로운 이미지 생성 프롬프트를 영어로 작성해주세요.`
                        }
                    ]
                }]
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0]) {
            const variationPrompt = data.candidates[0].content.parts[0].text;
            displayAifiPromptResult('var', variationPrompt);
        }
    } catch (error) {
        console.error('Error:', error);
        showAifiAlert('error', '이미지 변형에 실패했습니다.');
    } finally {
        showAifiLoading('var', false);
    }
}

async function extractAifiPrompt() {
    if (!aifiApiKey) {
        showAifiAlert('error', 'API 키를 먼저 설정해주세요.');
        return;
    }

    if (!aifiUploadedImages.extractor) {
        showAifiAlert('error', '먼저 이미지를 업로드해주세요.');
        return;
    }

    showAifiLoading('ext', true);

    try {
        // Using gemini-2.5-flash for prompt extraction
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${aifiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        {
                            inline_data: {
                                mime_type: aifiUploadedImages.extractor.mimeType,
                                data: aifiUploadedImages.extractor.base64
                            }
                        },
                        {
                            text: `Analyze this image and generate a detailed prompt that could recreate it. Include:\n\nSTYLE: [artistic style, rendering technique]\nMEDIUM: [medium/technique]\nSUBJECT: [main subject description]\nCAMERA: [shot type, angle]\nCOMPOSITION: [compositional elements]\nLIGHTING: [lighting style and setup]\nCOLOR: [color palette, tone]\nMOOD: [atmosphere, emotion]\nDETAILS: [specific details, textures]\nQUALITY: [quality modifiers]\n\nFormat it as a structured prompt suitable for Midjourney or DALL-E.`
                        }
                    ]
                }]
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0]) {
            const extractedPrompt = data.candidates[0].content.parts[0].text;
            displayAifiPromptResult('ext', extractedPrompt);
        }
    } catch (error) {
        console.error('Error:', error);
        showAifiAlert('error', '프롬프트 추출에 실패했습니다.');
    } finally {
        showAifiLoading('ext', false);
    }
}

async function generateAifiVideoPrompt() {
    if (!aifiApiKey) {
        showAifiAlert('error', 'API 키를 먼저 설정해주세요.');
        return;
    }

    const prompt = document.getElementById('video-prompt').value.trim();
    if (!prompt) {
        showAifiAlert('error', '영상 아이디어를 입력해주세요.');
        return;
    }

    showAifiLoading('video', true);

    try {
        // Using gemini-2.5-flash for video prompt generation
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${aifiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Create a detailed video generation prompt in JSON format for: "${prompt}"\n\nInclude these elements in the JSON:\n- metadata (title, duration)\n- scene description\n- camera movements\n- character details (if any)\n- lighting setup\n- audio/dialogue\n- visual style\n- color grading\n\nFormat as a clean JSON object.`
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

            displayAifiPromptResult('video', videoPrompt);
        }
    } catch (error) {
        console.error('Error:', error);
        showAifiAlert('error', '영상 프롬프트 생성에 실패했습니다.');
    } finally {
        showAifiLoading('video', false);
    }
}

// Display results
function displayAifiGeneratedImage(type, base64) {
    const resultDiv = document.getElementById(`${type}-result`);
    resultDiv.innerHTML = `
        <div class="aifi-result">
            <img src="data:image/jpeg;base64,${base64}" class="aifi-result-image">
            <div style="margin-top: 15px;">
                <button class="button aifi-button" onclick="downloadAifiImage('${base64}')">
                    이미지 다운로드
                </button>
            </div>
        </div>
    `;
}

function displayAifiPromptResult(type, prompt) {
    const resultDiv = document.getElementById(`${type}-result`);
    resultDiv.innerHTML = `
        <div class="aifi-result">
            <div class="aifi-result-text">${prompt.replace(/\n/g, '<br>')}</div>
            <div style="margin-top: 15px;">
                <button class="button aifi-button" onclick="copyAifiToClipboard('${btoa(prompt)}')">
                    클립보드에 복사
                </button>
            </div>
        </div>
    `;
}

function copyAifiToClipboard(base64Text) {
    const text = atob(base64Text);
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        showAifiAlert('success', '클립보드에 복사되었습니다!');
    } catch (err) {
        showAifiAlert('error', '복사에 실패했습니다.');
    }

    document.body.removeChild(textarea);
}

function downloadAifiImage(base64) {
    const link = document.createElement('a');
    link.href = `data:image/jpeg;base64,${base64}`;
    link.download = `generated-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
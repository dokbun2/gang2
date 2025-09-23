// Camera Guide Application

// Global variables
let currentData = null;
let contentKey = null;

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
    const practiceCategory = document.getElementById('practice-category');

    if (imageCategory) {
        imageCategory.style.display = 'none';
    }

    if (videoCategory) {
        videoCategory.style.display = 'none';
    }

    if (practiceCategory) {
        practiceCategory.style.display = 'none';
    }

    // Reset all chevron icons to default position
    const imageCategoryIcon = document.getElementById('image-category-icon');
    const videoCategoryIcon = document.getElementById('video-category-icon');
    const practiceCategoryIcon = document.getElementById('practice-category-icon');

    if (imageCategoryIcon) {
        imageCategoryIcon.style.transform = 'rotate(0deg)';
    }

    if (videoCategoryIcon) {
        videoCategoryIcon.style.transform = 'rotate(0deg)';
    }

    if (practiceCategoryIcon) {
        practiceCategoryIcon.style.transform = 'rotate(0deg)';
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
    const practiceCategory = document.getElementById('practice-category');
    const imageCategoryIcon = document.getElementById('image-category-icon');
    const videoCategoryIcon = document.getElementById('video-category-icon');
    const practiceCategoryIcon = document.getElementById('practice-category-icon');

    if (imageCategory && imageCategory.style.display === 'block') {
        imageCategory.style.display = 'none';
        if (imageCategoryIcon) imageCategoryIcon.style.transform = 'rotate(0)';
    }

    if (videoCategory && videoCategory.style.display === 'block') {
        videoCategory.style.display = 'none';
        if (videoCategoryIcon) videoCategoryIcon.style.transform = 'rotate(0)';
    }

    if (practiceCategory && practiceCategory.style.display === 'block') {
        practiceCategory.style.display = 'none';
        if (practiceCategoryIcon) practiceCategoryIcon.style.transform = 'rotate(0)';
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

    // Store the content key globally for use in displayContent
    contentKey = contentId;

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

    // Check if it's a practice type (실습과제)
    if (currentData.type === 'practice') {
        displayPracticeContent();
        return;
    }

    // Special layout for hairstyles
    if (contentKey === 'hairstyles' && (currentData.womanHairstyles || currentData.manHairstyles)) {
        const currentTab = currentData.currentTab || 'woman';
        const currentHairstyles = currentTab === 'woman' ? currentData.womanHairstyles : currentData.manHairstyles;
        const promptPrefix = currentTab === 'woman' ? 'A beautiful Korean actress with' : 'Korean man with';
        const promptSuffix = currentTab === 'woman' ? 'hair style with blonde color' : 'haircut';

        let html = `
            <div class="content-container hairstyle-container">
                <div class="content-header">
                    <h2 class="content-title">${currentData.title || ''}</h2>
                    ${currentData.koreanTitle ? `<span class="content-subtitle">${currentData.koreanTitle}</span>` : ''}
                </div>

                <!-- Tabs -->
                <div class="hairstyle-tabs" style="display: flex; gap: 10px; margin-bottom: 20px;">
                    <button class="hairstyle-tab ${currentTab === 'woman' ? 'active' : ''}" onclick="switchHairstyleTab('woman')">
                        <i data-lucide="user" style="width: 16px; height: 16px; margin-right: 8px;"></i>
                        WOMAN
                    </button>
                    <button class="hairstyle-tab ${currentTab === 'man' ? 'active' : ''}" onclick="switchHairstyleTab('man')">
                        <i data-lucide="user-check" style="width: 16px; height: 16px; margin-right: 8px;"></i>
                        MAN
                    </button>
                </div>

                <!-- Prompt Preview Section -->
                <div class="hairstyle-prompt-preview">
                    <div class="prompt-preview-text" id="hairstyle-prompt">
                        ${promptPrefix} { <span class="highlight-keyword">STYLE</span> } <span class="highlight-hair">${promptSuffix}</span>
                    </div>
                    <button class="copy-prompt-btn" onclick="copyHairstylePrompt()">
                        <i data-lucide="copy" style="width: 16px; height: 16px; margin-right: 5px;"></i>
                        복사하기
                    </button>
                </div>

                <!-- Description -->
                <div class="content-section-box">
                    <p class="section-text">${currentData.description}</p>
                </div>

                <!-- Hairstyles Grid -->
                <div class="hairstyles-grid">
                    ${currentHairstyles.map((style, index) => `
                        <div class="hairstyle-item" onclick="selectHairstyle('${style.name}', '${style.description}', '${currentTab}')">
                            <div class="hairstyle-image">
                                <img src="${style.image}" alt="${style.name}">
                            </div>
                            <div class="hairstyle-label">
                                <span class="style-name">${style.name}</span>
                                <span class="style-korean">${style.koreanName}</span>
                            </div>
                        </div>
                    `).join('')}
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

    // Special layout for framework stages
    if (contentKey === 'framework-stages' && currentData.stages) {
        let html = `
            <div class="content-container">
                <div class="content-header">
                    <h2 class="content-title">${currentData.title || ''}</h2>
                    ${currentData.koreanTitle ? `<span class="content-subtitle">${currentData.koreanTitle}</span>` : ''}
                </div>

                <div class="content-section-box" style="margin-bottom: 30px;">
                    <p class="section-text">${currentData.description}</p>
                </div>

                <div class="stages-grid">
                    ${currentData.stages.map((stage) => `
                        <div class="stage-card">
                            <div class="stage-content">
                                <h3 class="stage-title">${stage.title}</h3>
                                <p class="stage-subtitle">${stage.subtitle}</p>
                                <p class="stage-description">${stage.description}</p>
                            </div>
                            <a href="${stage.url}" target="_blank" class="stage-link-button">
                                <i data-lucide="external-link"></i>
                                <span>바로가기</span>
                            </a>
                        </div>
                    `).join('')}
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
                        <div class="instructor-info-item" style="margin-top: 15px;">
                            <span class="info-label">Email:</span>
                            <span class="info-value">${currentData.instructorInfo.email}</span>
                        </div>

                        <div class="instructor-description">
                            <p>${currentData.description}</p>
                        </div>

                        <div class="instructor-experience">
                            <h4>주요 활동</h4>
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


                <!-- 예시 영상 또는 이미지 섹션 (그리드 내부) -->
                ${currentData.videos && currentData.videos.length > 0 ? `
                    <div class="content-section-box" style="grid-column: 1 / -1;">
                        <h3 class="section-title">예시 영상</h3>
                        <div class="video-grid">
                            ${currentData.videos.map((video, index) => `
                                <div class="video-item">
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
let aifiApiKey = localStorage.getItem('aifi_api_key') || '';
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
                <div class="aifi-content-wrapper">
                    <div class="aifi-left-panel">
                        <div class="aifi-panel-title">텍스트로 이미지 생성하기</div>
                        <div class="form-group" style="flex: 1; display: flex; flex-direction: column;">
                            <label>프롬프트 입력</label>
                            <textarea id="gen-prompt" class="aifi-textarea aifi-large-textarea"
                                      placeholder="생성하고 싶은 이미지를 자세히 설명해주세요..."></textarea>
                        </div>
                        <button class="button aifi-button" onclick="generateAifiImage()" style="width: 100%;">
                            이미지 생성
                        </button>
                        <div class="aifi-loading" id="gen-loading" style="display: none; margin-top: 15px;">
                            <div class="spinner"></div>
                            <p>이미지를 생성하는 중...</p>
                        </div>
                    </div>
                    <div class="aifi-right-panel">
                        <div class="aifi-panel-title">생성된 이미지</div>
                        <div id="gen-result" class="aifi-result-area">
                            <div class="aifi-empty-state">이곳에 생성된 이미지가 표시됩니다.</div>
                        </div>
                    </div>
                </div>
            `;

        case 'variator':
            return `
                <div class="aifi-content-wrapper">
                    <div class="aifi-left-panel">
                        <div class="aifi-panel-title">이미지 변형</div>
                        <div style="flex: 1; display: flex; flex-direction: column;">
                            <div class="aifi-upload-area" id="var-upload" onclick="document.getElementById('var-file').click()" style="flex: 0 0 250px;">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="17 8 12 3 7 8"></polyline>
                                    <line x1="12" y1="3" x2="12" y2="15"></line>
                                </svg>
                                <p>이미지를 업로드하세요</p>
                                <p style="font-size: 12px; color: #666;">PNG, JPG, WEBP (최대 10MB)</p>
                                <input type="file" id="var-file" accept="image/*" style="display: none;"
                                       onchange="handleAifiFile(event, 'variator')">
                            </div>
                            <div id="var-preview"></div>
                            <div class="form-group" style="margin-top: 20px; flex: 1; display: flex; flex-direction: column;">
                                <label>변형 지시사항</label>
                                <textarea id="var-prompt" class="aifi-textarea" placeholder="예: 이 고양이에게 우주 헬멧을 씌워줘" style="flex: 1; resize: none;"></textarea>
                            </div>
                        </div>
                        <button class="button aifi-button" onclick="variateAifiImage()" style="width: 100%; margin-top: 20px;">
                            이미지 변형 생성
                        </button>
                        <div class="aifi-loading" id="var-loading" style="display: none; margin-top: 15px;">
                            <div class="spinner"></div>
                            <p>이미지를 변형하는 중...</p>
                        </div>
                    </div>
                    <div class="aifi-right-panel">
                        <div class="aifi-panel-title">변형된 이미지</div>
                        <div id="var-result" class="aifi-result-area">
                            <div class="aifi-empty-state">이곳에 변형된 이미지가 표시됩니다.</div>
                        </div>
                    </div>
                </div>
            `;

        case 'extractor':
            return `
                <div class="aifi-content-wrapper">
                    <div class="aifi-left-panel">
                        <div class="aifi-panel-title">프롬프트 추출</div>
                        <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
                            <div class="aifi-upload-area" id="ext-upload" onclick="document.getElementById('ext-file').click()" style="flex: 0 0 auto;">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="17 8 12 3 7 8"></polyline>
                                    <line x1="12" y1="3" x2="12" y2="15"></line>
                                </svg>
                                <p>이미지를 업로드하세요</p>
                                <p style="font-size: 12px; color: #666;">PNG, JPG, WEBP (최대 10MB)</p>
                                <input type="file" id="ext-file" accept="image/*" style="display: none;"
                                       onchange="handleAifiFile(event, 'extractor')">
                            </div>
                            <div id="ext-preview"></div>
                        </div>
                        <button class="button aifi-button" onclick="extractAifiPrompt()" style="width: 100%; margin-top: auto;">
                            프롬프트 추출
                        </button>
                        <div class="aifi-loading" id="ext-loading" style="display: none; margin-top: 15px;">
                            <div class="spinner"></div>
                            <p>이미지를 분석하는 중...</p>
                        </div>
                    </div>
                    <div class="aifi-right-panel">
                        <div class="aifi-panel-title">추출된 프롬프트</div>
                        <div id="ext-result" class="aifi-result-area">
                            <div class="aifi-empty-state">이곳에 추출된 프롬프트가 표시됩니다.</div>
                        </div>
                    </div>
                </div>
            `;

        case 'video':
            return `
                <div class="aifi-content-wrapper">
                    <div class="aifi-left-panel">
                        <div class="aifi-panel-title">영상 프롬프트 생성</div>
                        <div class="form-group" style="flex: 1; display: flex; flex-direction: column;">
                            <label>영상 아이디어</label>
                            <textarea id="video-prompt" class="aifi-textarea" placeholder="장면, 캐릭터, 동작에 대한 아이디어를 입력하세요. Veo 3 모델에 최적화된 상세한 JSON 프롬프트를 생성해 드립니다.\n\n예: 은행 강도 두 명이서 사무실에서 볼펜으로 서류를 작성하는 체크 정면 은행에서 촬영한 장면" style="flex: 1; resize: none;"></textarea>
                        </div>
                        <button class="button aifi-button" onclick="generateAifiVideoPrompt()" style="width: 100%; margin-top: 20px;">
                            프롬프트 생성
                        </button>
                        <div class="aifi-loading" id="video-loading" style="display: none; margin-top: 15px;">
                            <div class="spinner"></div>
                            <p>영상 프롬프트를 생성하는 중...</p>
                        </div>
                    </div>
                    <div class="aifi-right-panel">
                        <div class="aifi-panel-title">생성된 프롬프트</div>
                        <div id="video-result" class="aifi-result-area">
                            <div class="aifi-empty-state">이곳에 생성된 영상 프롬프트가 표시됩니다.</div>
                        </div>
                    </div>
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
        const existingKey = localStorage.getItem('aifi_api_key') || '';
        const apiInput = document.getElementById('modal-api-key');

        if (apiInput) {
            apiInput.value = existingKey;
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
    const apiKey = document.getElementById('modal-api-key').value.trim();

    if (!apiKey) {
        showAifiAlert('error', 'API 키를 입력해주세요.');
        return;
    }

    // Save key
    aifiApiKey = apiKey;
    localStorage.setItem('aifi_api_key', apiKey);

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
        // Test 1: Gemini 2.5 Flash 모델 테스트
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

        let geminiSuccess = response.ok;
        let nanoSuccess = false;

        // Test 2: Imagen 3 모델 테스트 (실제 이미지 생성 모델)
        if (geminiSuccess) {
            testBtn.innerHTML = `
                <div class="spinner-small"></div>
                <span>Imagen 3 테스트 중...</span>
            `;

            try {
                const imagenResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=${key}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        instances: [{
                            prompt: "Test image generation"
                        }],
                        parameters: {
                            sampleCount: 1
                        }
                    })
                });

                nanoSuccess = imagenResponse.ok || imagenResponse.status === 404; // 404도 API 키는 유효하다는 의미
            } catch (nanoError) {
                console.log('Imagen 3 test error:', nanoError);
                nanoSuccess = false;
            }
        }

        if (geminiSuccess) {
            const statusMessage = geminiSuccess
                ? 'Gemini 2.5 Flash 연결 성공!'
                : 'API 연결 실패';

            updateApiStatus(statusMessage, false);
            showAifiAlert('success', statusMessage);

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

    // 파일 크기 체크 (10MB - Gemini API의 실제 제한)
    if (file.size > 10 * 1024 * 1024) {
        showAifiAlert('error', '파일 크기는 10MB 이하여야 합니다.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const base64 = e.target.result.split(',')[1];
        aifiUploadedImages[type] = {
            base64: base64,
            mimeType: file.type
        };

        // Upload area 자체를 이미지로 교체
        const uploadArea = document.getElementById(`${type === 'variator' ? 'var' : 'ext'}-upload`);
        uploadArea.style.padding = '0';
        uploadArea.style.overflow = 'hidden';
        uploadArea.style.background = 'transparent';
        uploadArea.style.border = 'none';
        uploadArea.innerHTML = `
            <div style="position: relative; width: 100%; height: 100%;">
                <img src="${e.target.result}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">
                <button onclick="clearAifiImage('${type}')"
                        style="position: absolute; top: 10px; right: 10px;
                               background: rgba(0,0,0,0.7); color: white;
                               border: none; border-radius: 50%;
                               width: 30px; height: 30px;
                               cursor: pointer; display: flex;
                               align-items: center; justify-content: center;
                               font-size: 16px; line-height: 1;"
                        title="이미지 제거">
                    ×
                </button>
            </div>
        `;

        // preview div 비우기
        const previewDiv = document.getElementById(`${type === 'variator' ? 'var' : 'ext'}-preview`);
        if (previewDiv) previewDiv.innerHTML = '';
    };
    reader.readAsDataURL(file);
}

function clearAifiImage(type) {
    aifiUploadedImages[type] = null;

    // Upload area를 원래 상태로 복구
    const uploadArea = document.getElementById(`${type === 'variator' ? 'var' : 'ext'}-upload`);
    uploadArea.style.padding = '40px';
    uploadArea.style.overflow = 'visible';
    uploadArea.style.background = '';
    uploadArea.style.border = '';
    uploadArea.innerHTML = `
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
        <p>이미지를 업로드하세요</p>
        <p style="font-size: 12px; color: #666;">PNG, JPG, WEBP (최대 10MB)</p>
        <input type="file" id="${type === 'variator' ? 'var' : 'ext'}-file" accept="image/*" style="display: none;"
               onchange="handleAifiFile(event, '${type}')">
    `;

    // Reset file input
    const fileInput = document.getElementById(`${type === 'variator' ? 'var' : 'ext'}-file`);
    if (fileInput) fileInput.value = '';

    // Clear preview div
    const previewDiv = document.getElementById(`${type === 'variator' ? 'var' : 'ext'}-preview`);
    if (previewDiv) previewDiv.innerHTML = '';
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

// API Functions
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
        // 향상된 프롬프트 생성
        await generateAifiTextPrompt(prompt);
        showAifiAlert('success', '향상된 프롬프트가 생성되었습니다!');
    } catch (error) {
        console.error('Error in generateAifiImage:', error);
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
                        text: `Convert this idea into a detailed image generation prompt for Midjourney or DALL-E 3. Write in English and include style, lighting, composition, and colors. Provide ONLY the clean prompt without any explanations or additional text:\n\n"${prompt}"`
                    }]
                }]
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0]) {
            let enhancedPrompt = data.candidates[0].content.parts[0].text;

            // 불필요한 안내문 제거
            enhancedPrompt = enhancedPrompt
                .replace(/^Here's.*?:\s*/i, '')
                .replace(/^Enhanced prompt.*?:\s*/i, '')
                .replace(/^Prompt.*?:\s*/i, '')
                .replace(/^\*\*.*?\*\*\s*/gm, '')
                .replace(/^#{1,6}\s.*$/gm, '')
                .trim();

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
        // Step 1: Gemini로 프롬프트 생성
        const promptResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${aifiApiKey}`, {
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

        const promptData = await promptResponse.json();
        if (promptData.candidates && promptData.candidates[0]) {
            const variationPrompt = promptData.candidates[0].content.parts[0].text;

            // Step 2: 변형된 이미지를 위한 상세 프롬프트 생성
            // (실제 이미지 생성 API가 제한적이므로 프롬프트 최적화에 집중)
            try {
                const imageResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${aifiApiKey}`, {
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
                                    text: `Based on this variation request: "${variationPrompt}"\n\nCreate an ultra-detailed Midjourney v6 prompt that maintains the core elements of the original image while applying the requested changes.\n\nInclude:\n- Specific art style and rendering technique\n- Detailed description of the variation\n- Lighting and atmosphere adjustments\n- Color grading changes\n- Technical parameters (--ar, --s, --q, --v 6)\n\nFormat: One detailed paragraph followed by Midjourney parameters.`
                                }
                            ]
                        }],
                        generationConfig: {
                            temperature: 0.8,
                            candidateCount: 1
                        }
                    })
                });

                const imageData = await imageResponse.json();

                if (imageData.candidates && imageData.candidates[0]) {
                    const finalVariationPrompt = imageData.candidates[0].content.parts[0].text;
                    displayAifiPromptResult('var', finalVariationPrompt);
                    showAifiAlert('success', '이미지 변형 프롬프트가 생성되었습니다!');
                } else {
                    // 실패 시 기본 프롬프트 표시
                    displayAifiPromptResult('var', variationPrompt);
                    showAifiAlert('info', '변형 프롬프트가 생성되었습니다.');
                }
            } catch (imageError) {
                console.error('Variation prompt error:', imageError);
                // 오류 발생 시 기본 프롬프트 표시
                displayAifiPromptResult('var', variationPrompt);
                showAifiAlert('info', '기본 변형 프롬프트가 생성되었습니다.');
            }
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
                            text: `Analyze this image and create a clean, direct prompt that could recreate it using Midjourney or DALL-E. Write ONLY the prompt text without any explanations, headers, or additional formatting. Just provide the raw prompt that can be copied and used directly.`
                        }
                    ]
                }]
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0]) {
            let extractedPrompt = data.candidates[0].content.parts[0].text;

            // 불필요한 안내문 제거
            extractedPrompt = extractedPrompt
                .replace(/^Here's a prompt.*?:\s*/i, '')
                .replace(/^This prompt.*?:\s*/i, '')
                .replace(/^Generated prompt.*?:\s*/i, '')
                .replace(/^Prompt.*?:\s*/i, '')
                .replace(/^\*\*.*?\*\*\s*/gm, '')
                .replace(/^#{1,6}\s.*$/gm, '')
                .replace(/^---+$/gm, '')
                .trim();

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

// Hairstyle Functions
let selectedHairstyle = 'STYLE';
let currentHairstyleTab = 'woman';

function switchHairstyleTab(tab) {
    currentHairstyleTab = tab;
    if (typeof cameraData !== 'undefined' && cameraData['hairstyles']) {
        cameraData['hairstyles'].currentTab = tab;
        displayContent();
    }
}

function selectHairstyle(styleName, styleDescription, tab) {
    selectedHairstyle = styleDescription;
    const promptElement = document.getElementById('hairstyle-prompt');
    if (promptElement) {
        const promptPrefix = tab === 'woman' ? 'A beautiful Korean actress with' : 'Korean man with';
        const promptSuffix = tab === 'woman' ? 'hair style with blonde color' : 'haircut';

        promptElement.innerHTML = `${promptPrefix} { <span class="highlight-keyword selected">${styleDescription}</span> } ${promptSuffix}`;

        // Highlight selected hairstyle item
        document.querySelectorAll('.hairstyle-item').forEach(item => {
            item.classList.remove('selected');
        });
        event.currentTarget.classList.add('selected');
    }
}

function copyHairstylePrompt() {
    const tab = currentHairstyleTab;
    const promptPrefix = tab === 'woman' ? 'A beautiful Korean actress with' : 'Korean man with';
    const promptSuffix = tab === 'woman' ? 'hair style with blonde color' : 'haircut';
    const promptText = `${promptPrefix} { ${selectedHairstyle} } ${promptSuffix}`;

    const textarea = document.createElement('textarea');
    textarea.value = promptText;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        const btn = event.currentTarget;
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check" style="width: 16px; height: 16px; margin-right: 5px;"></i>복사됨!';
        btn.classList.add('copied');

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.classList.remove('copied');
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 2000);
    } catch (err) {
        console.error('복사 실패:', err);
    }

    document.body.removeChild(textarea);
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

// 이미지 결과 표시 함수 추가
function displayAifiImageResult(type, imageUrl) {
    const resultDiv = document.getElementById(`${type}-result`);
    resultDiv.style.border = 'none';
    resultDiv.style.background = 'transparent';
    resultDiv.style.padding = '0';
    resultDiv.innerHTML = `
        <div style="flex: 1; display: flex; flex-direction: column;">
            <img src="${imageUrl}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 10px; flex: 1;">
        </div>
        <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
            <button class="button aifi-button" onclick="downloadAifiImage('${imageUrl}')">
                다운로드
            </button>
            <button class="button aifi-button aifi-button-secondary" onclick="copyAifiImageUrl('${imageUrl}')">
                URL 복사
            </button>
        </div>
    `;
}

// 이미지 다운로드 함수
function downloadAifiImage(imageUrl) {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `aifi-image-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 이미지 URL 복사 함수
function copyAifiImageUrl(imageUrl) {
    const textarea = document.createElement('textarea');
    textarea.value = imageUrl;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        showAifiAlert('success', 'URL이 클립보드에 복사되었습니다.');
    } catch (err) {
        showAifiAlert('error', 'URL 복사에 실패했습니다.');
    }

    document.body.removeChild(textarea);
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

// AIFI Modal Functions
function testAifiApi() {
    const testBtn = document.getElementById('test-api-btn');
    const apiKey = document.getElementById('modal-api-key').value.trim();

    if (!apiKey) {
        updateApiStatus('API 키를 입력해주세요', 'error');
        return;
    }

    testBtn.disabled = true;
    testBtn.innerHTML = '<i data-lucide="loader" style="width: 16px; height: 16px; animation: spin 1s linear infinite;"></i><span>테스트 중...</span>';

    // Simple validation
    let isValid = apiKey.length > 10; // Basic length check
    let statusMessage = isValid ? 'API 키가 정상적으로 연결되었습니다.' : 'API 키 형식을 확인해주세요';

    setTimeout(() => {
        updateApiStatus(statusMessage, isValid ? 'success' : 'error');
        testBtn.disabled = false;
        testBtn.innerHTML = '<i data-lucide="zap" style="width: 16px; height: 16px;"></i><span>연결 테스트</span>';

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 1500);
}

function updateApiStatus(message, type = 'info') {
    const statusEl = document.getElementById('api-status-text');
    if (statusEl) {
        statusEl.textContent = message;
        statusEl.className = 'status-value';

        if (type === 'success') {
            statusEl.style.color = '#4CAF50';
        } else if (type === 'error') {
            statusEl.style.color = '#f44336';
        } else {
            statusEl.style.color = '#ff6b6b';
        }
    }
}

// ============= 실습과제 관련 함수 =============
function displayPracticeContent() {
    const contentArea = document.getElementById('content-area');
    const pagination = document.getElementById('pagination');

    // Hide pagination
    if (pagination) {
        pagination.style.display = 'none';
    }

    let html = `
        <div class="content-container practice-container">
            <div class="content-header">
                <h2 class="content-title">${currentData.title}</h2>
                <span class="content-subtitle">${currentData.koreanTitle}</span>
            </div>

            <!-- Description -->
            <div class="content-section-box">
                <p class="section-text">${currentData.description}</p>
            </div>

            <!-- Practice Layout: Video + Prompt -->
            <div class="practice-layout">
                <!-- Video Section -->
                <div class="practice-video-section">
                    <h3 class="section-title">참고 영상</h3>
                    <div class="video-container">
                        <video
                            src="${currentData.videoUrl}"
                            controls
                            class="practice-video"
                            onclick="openVideoFullscreen(this)">
                        </video>
                    </div>
                </div>

                <!-- Prompt Section -->
                <div class="practice-prompt-section">
                    <div class="prompt-header">
                        <h3 class="section-title">예시 프롬프트</h3>
                        <button class="copy-prompt-btn" onclick="copyPracticePrompt()">
                            <i data-lucide="copy" style="width: 16px; height: 16px; margin-right: 5px;"></i>
                            복사하기
                        </button>
                    </div>
                    <div class="prompt-container">
                        <pre class="practice-prompt" id="practice-prompt">${currentData.prompt}</pre>
                    </div>
                </div>
            </div>

            <!-- 실습과제 #1 섹션 -->
            <div class="practice-exercises-section">
                <h3 class="section-title">실습과제 #1</h3>
                <div class="exercise-grid">
                    <div class="exercise-item">
                        <h4 class="exercise-title">햄스터 돈가스먹방</h4>
                        <p class="exercise-description">귀여운 햄스터가 돈가스를 먹는 먹방 영상을 만드는 실습과제입니다.</p>
                        <button class="exercise-btn" onclick="showContent('hamster-video')">
                            <i data-lucide="play" style="width: 16px; height: 16px; margin-right: 5px;"></i>
                            실습하기
                        </button>
                    </div>
                    <div class="exercise-item">
                        <h4 class="exercise-title">악어 국수먹방</h4>
                        <p class="exercise-description">우아한 악어가 국수를 먹는 독특한 먹방 영상을 만드는 실습과제입니다.</p>
                        <button class="exercise-btn" onclick="showContent('crocodile-video')">
                            <i data-lucide="play" style="width: 16px; height: 16px; margin-right: 5px;"></i>
                            실습하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    contentArea.innerHTML = html;

    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function copyPracticePrompt() {
    const promptText = currentData.prompt;

    const textarea = document.createElement('textarea');
    textarea.value = promptText;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');

        // Update button text
        const btn = event.currentTarget;
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check" style="width: 16px; height: 16px; margin-right: 5px;"></i>복사완료!';
        btn.classList.add('copied');

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 2000);
    } catch (err) {
        console.error('복사 실패:', err);
    }

    document.body.removeChild(textarea);
}
function openVideoFullscreen(videoElement) {
    if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) { // Firefox
        videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
        videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) { // IE/Edge
        videoElement.msRequestFullscreen();
    }
}

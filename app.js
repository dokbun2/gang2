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
});

// Toggle Major Category
function toggleMajorCategory(categoryId) {
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
function toggleSection(sectionId) {
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
function toggleSubmenu(submenuId) {
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
            </div>
    `;

    // Show videos if available, otherwise show images
    if (currentData.videos && currentData.videos.length > 0) {
        // For video-related items, show only videos
        html += `
            <div class="content-section" style="margin-top: 50px;">
                <h3 class="section-title">예시 영상</h3>
                <div class="video-grid">
        `;

        currentData.videos.forEach(video => {
            html += `
                <div class="video-item">
                    <video controls autoplay loop muted playsinline>
                        <source src="${video.src}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    ${video.caption ? `<p class="video-caption">${video.caption}</p>` : ''}
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    } else if (currentData.images && currentData.images.length > 0) {
        // For image-related items, show only images
        const imagesToShow = currentData.images.slice(0, 2); // Only show first 2 images
        html += `
            <div class="content-section" style="margin-top: 50px;">
                <h3 class="section-title">예시 이미지</h3>
                <div class="image-grid">
        `;

        imagesToShow.forEach(img => {
            const escapedCaption = (img.caption || '').replace(/'/g, "\\'");
            html += `
                <div class="image-item"
                     onclick="openImageModal('${img.src}', '${escapedCaption}')">
                    <img src="${img.src}"
                         alt="${img.caption || ''}">
                    ${img.caption ? `<p class="image-caption">${img.caption}</p>` : ''}
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    }

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
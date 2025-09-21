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

    let html = `
        <div class="content-container">
            <div class="content-header">
                <h2 class="content-title">${currentData.title || ''}</h2>
                ${currentData.koreanTitle ? `<span class="content-subtitle">${currentData.koreanTitle}</span>` : ''}
            </div>
    `;

    // Add description
    if (currentData.description) {
        html += `
            <div class="content-section">
                <h3 class="section-title">설명</h3>
                <p class="section-text">${currentData.description}</p>
            </div>
        `;
    }

    // Add prompt
    if (currentData.prompt) {
        html += `
            <div class="content-section">
                <h3 class="section-title">프롬프트</h3>
                <div class="prompt-box">
                    <code>${currentData.prompt}</code>
                    <button class="copy-btn" onclick="copyToClipboard('${currentData.prompt.replace(/'/g, "\\'")}')"
                            style="background: linear-gradient(135deg, #ff6b6b, #ff8e53);
                                   color: white;
                                   border: none;
                                   padding: 8px 16px;
                                   border-radius: 8px;
                                   cursor: pointer;
                                   margin-top: 10px;">
                        복사
                    </button>
                </div>
            </div>
        `;
    }

    // Add usage
    if (currentData.usage && currentData.usage.length > 0) {
        html += `
            <div class="content-section">
                <h3 class="section-title">사용 케이스</h3>
                <ul class="usage-list">
        `;

        currentData.usage.forEach(use => {
            html += `<li>${use}</li>`;
        });

        html += `
                </ul>
            </div>
        `;
    }

    // Add all images (no pagination)
    if (currentData.images && currentData.images.length > 0) {
        html += `
            <div class="content-section">
                <h3 class="section-title">예시 이미지</h3>
                <div class="image-grid" style="display: grid;
                                              grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                                              gap: 20px;
                                              margin-top: 20px;">
        `;

        currentData.images.forEach(img => {
            const escapedCaption = (img.caption || '').replace(/'/g, "\\'");
            html += `
                <div class="image-item"
                     onclick="openImageModal('${img.src}', '${escapedCaption}')"
                     style="cursor: pointer;
                            border-radius: 8px;
                            overflow: hidden;
                            background: white;
                            box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <img src="${img.src}"
                         alt="${img.caption || ''}"
                         style="width: 100%;
                                height: 200px;
                                object-fit: cover;">
                    ${img.caption ? `<p class="image-caption" style="padding: 10px; font-size: 14px; color: #666;">${img.caption}</p>` : ''}
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
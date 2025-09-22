# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AIFI Framework Guide - A comprehensive visual reference guide for camera techniques, lighting, styles, and visual effects used in image and video generation, particularly with AI tools like Midjourney.

## Development Commands

### Running the Main Application
```bash
# Start local server (required for proper loading of JavaScript modules)
python3 -m http.server 8000
# or
npx http-server -p 8000 -c-1
```
Then navigate to http://localhost:8000

### Tool Application (React-based prompt generator)
```bash
cd tool
npm install  # First time only
npm run dev  # Development server on port 5173
npm run build  # Production build
```

## Project Architecture

### Core Files Structure
- **index.html**: Main application entry point with sidebar navigation for camera, lighting, style, and medium categories
- **data.js**: Central data repository containing all prompts, descriptions, and media URLs for each technique
- **app.js**: Navigation logic, content rendering, pagination, and UI state management
- **styles.css**: Complete styling including animations for tilt effects on videos

### Data Organization in data.js
The `cameraData` object uses string keys for each technique with structure:
```javascript
'technique-id': {
    title: 'Display title',
    koreanTitle: 'Korean title',
    prompt: 'AI generation prompt',
    description: 'Detailed explanation',
    usage: ['Use case 1', 'Use case 2'],
    images: [{ src: 'url', caption: 'text' }],
    videos: [{ src: 'url', caption: 'text' }]  // Optional
}
```

### Content Categories
1. **Image-related** (이미지 관련): Style → Medium → Camera → Lighting (current order)
2. **Video-related** (영상 관련): Camera Movement, Transitions, Motion Effects, Time & Speed

### Key Implementation Details

#### Sidebar Section Order Modification
When reordering sidebar sections, manipulate the HTML structure directly in index.html. The sections are contained within `<div class="category-content">` blocks. Each section follows this pattern:
```html
<!-- SECTION_NAME 중분류 -->
<div class="menu-section">
    <button class="menu-header" onclick="toggleSection('section-id')">
        <!-- content -->
    </button>
    <div class="menu-items" id="section-id-items">
        <!-- submenu content -->
    </div>
</div>
```

#### Adding New Content
1. Add data entry to `data.js` with unique key
2. Reference the key in menu items using `onclick="showContent('key-name')"`
3. The app.js automatically handles rendering based on data structure

#### Video Tilt Animations
Videos automatically receive tilt animations via the `tilt-active` class. Five animation types are defined in styles.css:
- cameraTiltUp, cameraTiltDown, cameraTiltLeft, cameraTiltRight, cameraTiltDiagonal

## Common Tasks

### Updating Media URLs
Edit the relevant section in data.js:
- For images: Update the `images` array
- For videos: Update the `videos` array (if present)

### Testing Changes
Always test in a local server environment as the application uses JavaScript modules that require proper HTTP headers.

## Important Notes
- The application uses Lucide icons loaded from CDN
- Backup files (*.backup, *-backup.*) exist for recovery purposes
- The tool/ directory contains a separate React application for AI prompt generation
- Always maintain the structure of data.js when adding new content to ensure proper rendering
# CTT Design System - Testing Guide

This guide explains how to test the CTT Design System package across different environments and frameworks.

## 📋 Test Overview

We've created comprehensive tests for:
- **HTML/Vanilla JS** - Web components via CDN
- **React App** - React components integration
- **Next.js App** - SSR/SSG compatibility

## 🚀 Quick Start

### Run All Tests (Automated)
```bash
node test-all-environments.js
```

### Individual Environment Testing

#### 1. 🌐 HTML/Vanilla JS Test
```bash
# Open in browser
open test-environments.html

# Or start local server
python -m http.server 8080
# Visit: http://localhost:8080/test-environments.html
```

#### 2. ⚛️ React App Test
```bash
cd test-react-app
npm install
npm run dev
# Visit: http://localhost:3001
```

#### 3. ⚡ Next.js App Test
```bash
cd test-nextjs-app
npm install
npm run dev
# Visit: http://localhost:3002
```

## 📁 Test Files Structure

```
├── test-environments.html          # Comprehensive HTML test page
├── test-all-environments.js        # Master test runner
├── test-react-app/                 # React test application
│   ├── package.json
│   ├── src/App.jsx                 # React component tests
│   ├── test-runner.js              # React-specific tests
│   └── ...
├── test-nextjs-app/                # Next.js test application
│   ├── package.json
│   ├── pages/index.js              # Next.js page with tests
│   ├── pages/_app.js               # CSS imports
│   ├── test-runner.js              # Next.js-specific tests
│   └── ...
└── TESTING-GUIDE.md               # This file
```

## 🧪 What Gets Tested

### HTML/Vanilla JS Tests
- ✅ Web components load from CDN
- ✅ CSS styles apply correctly
- ✅ Components render and are interactive
- ✅ Event handlers work
- ✅ Package exports are accessible

### React App Tests
- ✅ React components import correctly
- ✅ Props are passed and handled
- ✅ State management works
- ✅ Event handlers function
- ✅ Form interactions work
- ✅ Component re-rendering
- ✅ CSS integration

### Next.js App Tests
- ✅ Server-side rendering (SSR)
- ✅ Static site generation (SSG)
- ✅ Client-side hydration
- ✅ React component integration
- ✅ CSS imports in _app.js
- ✅ Form submissions
- ✅ Next.js specific features

## 📊 Test Results

Each test generates results showing:
- Component loading status
- Interactive functionality
- Error handling
- Performance metrics
- Compatibility checks

## 🔧 Manual Testing Checklist

After running automated tests, verify:

### Visual Testing
- [ ] Components render with correct styling
- [ ] Responsive design works on different screen sizes
- [ ] Colors and typography match design system
- [ ] Focus states are visible
- [ ] Hover effects work properly

### Functional Testing
- [ ] Form inputs accept and validate data
- [ ] Buttons trigger correct actions
- [ ] Radio buttons and checkboxes work
- [ ] Error states display appropriately
- [ ] Success states show correctly

### Accessibility Testing
- [ ] Screen reader compatibility
- [ ] Keyboard navigation works
- [ ] Focus management is correct
- [ ] ARIA attributes are present
- [ ] Color contrast meets standards

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

## 📈 Performance Testing

Test performance in each environment:
- Bundle size impact
- Loading speed
- Runtime performance
- Memory usage

## 🐛 Troubleshooting

### Common Issues

#### CSS Not Loading
```bash
# Check if CSS is imported correctly
import 'ctt-design-system/css'
```

#### Components Not Rendering
```bash
# Verify correct import path
import { Button } from 'ctt-design-system/react'
```

#### Next.js Build Errors
```bash
# Check Next.js configuration
# Ensure CSS is imported in _app.js
```

#### Web Components Not Working
```html
<!-- Ensure proper script loading -->
<script type="module" src="https://unpkg.com/ctt-design-system@1.1.0/dist/index.esm.js"></script>
```

### Getting Help

1. Check the test results in browser console
2. Review the test-report.json file
3. Run individual test files for detailed output
4. Check network tab for loading issues

## 🔄 Continuous Testing

For ongoing development:

```bash
# Watch mode for React
cd test-react-app && npm run dev

# Watch mode for Next.js  
cd test-nextjs-app && npm run dev

# Re-run all tests
node test-all-environments.js
```

## 📝 Test Report

Each test run generates `test-report.json` with:
- Timestamp
- Pass/fail counts
- Environment-specific results
- Manual testing checklist
- Recommendations

## 🎯 Success Criteria

Tests pass when:
- All automated tests return ✅
- Manual checklist items verified
- No console errors
- Components function as expected
- Performance meets requirements
- Cross-browser compatibility confirmed

---

*For additional help or to report issues, please check the main README.md or create an issue in the repository.*
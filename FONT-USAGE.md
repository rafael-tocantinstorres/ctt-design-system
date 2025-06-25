# Font Usage Guide

This guide explains how to properly import and use the ActoCTT fonts from the CTT Design System package.

## Quick Start

### Option 1: Import in CSS/SCSS (Recommended)

```css
/* In your main CSS/SCSS file */
@import 'ctt-design-system/fonts.css';

/* Now you can use the font */
body {
  font-family: 'ActoCTT', system-ui, sans-serif;
}
```

### Option 2: Import in JavaScript/TypeScript

```javascript
// In your main JS/TS entry file (e.g., main.js, index.js, _app.js)
import 'ctt-design-system/fonts.css';
```

### Option 3: HTML Link Tag

```html
<!-- In your HTML head -->
<link rel="stylesheet" href="node_modules/ctt-design-system/fonts.css">
```

## Next.js Usage

### App Router (app/ directory)

```javascript
// app/layout.js or app/layout.tsx
import 'ctt-design-system/fonts.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### Pages Router (pages/ directory)

```javascript
// pages/_app.js or pages/_app.tsx
import 'ctt-design-system/fonts.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

### Global CSS File

```css
/* styles/globals.css */
@import 'ctt-design-system/fonts.css';

body {
  font-family: 'ActoCTT', system-ui, sans-serif;
}
```

## Vite/React Usage

```javascript
// main.jsx or main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'ctt-design-system/fonts.css'; // Import fonts
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Available Font Weights

The ActoCTT font family includes the following weights:

- **250**: Thin
- **300**: Light
- **400**: Book (Regular/Normal)
- **500**: Medium
- **700**: Bold
- **900**: Black

Each weight includes both normal and italic styles.

## CSS Usage Examples

```css
/* Using different font weights */
.thin-text {
  font-family: 'ActoCTT', sans-serif;
  font-weight: 250;
}

.light-text {
  font-family: 'ActoCTT', sans-serif;
  font-weight: 300;
}

.regular-text {
  font-family: 'ActoCTT', sans-serif;
  font-weight: 400; /* or normal */
}

.medium-text {
  font-family: 'ActoCTT', sans-serif;
  font-weight: 500;
}

.bold-text {
  font-family: 'ActoCTT', sans-serif;
  font-weight: 700; /* or bold */
}

.black-text {
  font-family: 'ActoCTT', sans-serif;
  font-weight: 900;
}

/* Using italic styles */
.italic-text {
  font-family: 'ActoCTT', sans-serif;
  font-style: italic;
}
```

## Design System Integration

When using the full design system, fonts will be automatically applied using the typography tokens:

```javascript
import 'ctt-design-system/fonts.css'; // Import fonts
import 'ctt-design-system/css';       // Import design system styles
```

## Performance Optimization

### Font Preloading

For better performance, you can preload critical font files:

```html
<head>
  <!-- Preload critical fonts -->
  <link rel="preload" href="node_modules/ctt-design-system/dist/fonts/ActoCTT-Book.woff" as="font" type="font/woff" crossorigin>
  <link rel="preload" href="node_modules/ctt-design-system/dist/fonts/ActoCTT-Bold.woff" as="font" type="font/woff" crossorigin>
  
  <!-- Then load the CSS -->
  <link rel="stylesheet" href="node_modules/ctt-design-system/fonts.css">
</head>
```

### Font Display Strategy

All fonts are configured with `font-display: swap` for optimal loading performance. This means:
- Text is immediately visible with a fallback font
- The custom font replaces the fallback when loaded
- No invisible text during font load

## Troubleshooting

### Common Issues

1. **Fonts not loading**: Make sure you're importing `ctt-design-system/fonts.css`, not individual font files
2. **Wrong paths**: Don't use relative paths to node_modules - use the package exports
3. **Build issues**: Ensure your bundler can handle CSS imports from node_modules

### Supported Formats

The package includes:
- `.eot` files for legacy IE support
- `.woff` files for broad compatibility
- Fallback declarations for maximum browser support

### Build Tool Configuration

Most modern build tools (Webpack, Vite, Parcel, etc.) should handle the font imports automatically. If you encounter issues:

1. Ensure CSS imports from node_modules are enabled
2. Check that font files are being copied to your build output
3. Verify the build tool can resolve the package exports

## Migration from Previous Versions

If you were previously using hardcoded paths or different import methods:

### ❌ Old way (don't use):
```css
/* Don't do this */
@import '../../node_modules/ctt-design-system/dist/assets/fonts.css';
src: url('../../node_modules/ctt-design-system/dist/fonts/ActoCTT-Black.eot');
```

### ✅ New way (correct):
```css
/* Use this instead */
@import 'ctt-design-system/fonts.css';
```

The new approach:
- Uses proper package exports
- Works across different build tools
- Has correct relative paths
- Is future-proof

---

Need help? Check the [main README](./README.md) or open an issue on the repository.
# Font Integration Guide

This guide explains how to properly integrate ActoCTT fonts with your application to avoid path resolution issues.

## The Problem

When importing fonts from node_modules, you might encounter errors like:
```
Module not found: Can't resolve '../../node_modules/ctt-design-system/dist/fonts/ActoCTT-MediumItalic.woff2'
```

This happens because:
1. Complex relative paths in CSS break across different build environments
2. Missing .woff2 files that are referenced but don't exist
3. Build tools can't resolve assets from node_modules properly

## Solutions

### Option 1: Copy Fonts to Public Directory (Recommended)

1. **Copy font files to your public directory:**
   ```bash
   # Create fonts directory
   mkdir -p public/fonts
   
   # Copy font files
   cp node_modules/ctt-design-system/dist/assets/fonts/* public/fonts/
   ```

2. **Add font declarations to your CSS:**
   ```css
   /* In your globals.css or main CSS file */
   @import 'ctt-design-system/dist/assets/fonts-standalone.css';
   ```

   Or copy the font-face declarations directly:
   ```css
   @font-face {
     font-family: 'ActoCTT';
     src: url('/fonts/ActoCTT-Book.eot');
     src: url('/fonts/ActoCTT-Book.eot?#iefix') format('embedded-opentype'),
          url('/fonts/ActoCTT-Book.woff') format('woff');
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }
   /* Add other font weights as needed */
   ```

### Option 2: Use CSS Imports (Alternative)

If you prefer to import from node_modules:

```css
/* In your main CSS file */
@import 'ctt-design-system/dist/assets/fonts.css';
```

**Note:** This requires your build tool to handle CSS assets from node_modules correctly.

### Option 3: Next.js Font Optimization

For Next.js applications using App Router:

```jsx
// app/layout.js
import localFont from 'next/font/local'

const actoCTT = localFont({
  src: [
    {
      path: '../public/fonts/ActoCTT-Book.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ActoCTT-BookItalic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/ActoCTT-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/ActoCTT-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-acto-ctt'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={actoCTT.variable}>
      <body>{children}</body>
    </html>
  )
}
```

Then use in your CSS:
```css
body {
  font-family: var(--font-acto-ctt), sans-serif;
}
```

## Available Font Files

The package includes these font files (only .eot and .woff formats):

- ActoCTT-Thin (.eot, .woff) - weight: 250
- ActoCTT-ThinItalic (.eot, .woff) - weight: 250, italic
- ActoCTT-Light (.eot, .woff) - weight: 300
- ActoCTT-LightItalic (.eot, .woff) - weight: 300, italic
- ActoCTT-Book (.eot, .woff) - weight: 400 (regular)
- ActoCTT-BookItalic (.eot, .woff) - weight: 400, italic
- ActoCTT-Medium (.eot, .woff) - weight: 500
- ActoCTT-MediumItalic (.eot, .woff) - weight: 500, italic
- ActoCTT-Bold (.eot, .woff) - weight: 700
- ActoCTT-BoldItalic (.eot, .woff) - weight: 700, italic
- ActoCTT-Black (.eot, .woff) - weight: 900
- ActoCTT-BlackItalic (.eot, .woff) - weight: 900, italic

## Browser Support

- **.woff** - Supported by all modern browsers (IE9+)
- **.eot** - Legacy support for older Internet Explorer versions

## Performance Tips

1. **Preload critical fonts** in your HTML head:
   ```html
   <link rel="preload" href="/fonts/ActoCTT-Book.woff" as="font" type="font/woff" crossorigin>
   <link rel="preload" href="/fonts/ActoCTT-Bold.woff" as="font" type="font/woff" crossorigin>
   ```

2. **Use font-display: swap** for better perceived performance (already included in our CSS)

3. **Only include the font weights you actually use** to reduce bundle size

## Troubleshooting

### Error: Can't resolve font files
- Make sure font files are in your public directory
- Check that paths in CSS match your actual file structure
- Verify your build tool can handle the file types

### Fonts not loading
- Check browser network tab for 404 errors
- Verify font file paths are correct
- Ensure proper CORS headers if serving from different domain

### Build errors with Next.js
- Use the Next.js font optimization approach (Option 3)
- Make sure font files are in the correct relative path
- Consider using next/font/local for better optimization

## Migration from Previous Versions

If you were using hardcoded node_modules paths in your CSS:

1. Remove lines like:
   ```css
   src: url('../../node_modules/ctt-design-system/dist/fonts/ActoCTT-Book.woff2')
   ```

2. Replace with proper font setup using one of the options above

3. Remove any references to .woff2 files (they don't exist in the package)
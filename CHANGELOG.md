# Changelog

All notable changes to this project will be documented in this file.

## [1.1.7] - 2024-12-19

### Fixed
- **Font Paths**: Fixed double `dist/` path issue in fonts.css (was `./dist/fonts/`, now `./fonts/`)
- **CSS Resolution**: Corrected font URLs to prevent `dist/dist/fonts/` path errors

## [1.1.6] - 2024-12-19

### Fixed
- **Font Distribution**: Fixed font loading issues when importing CSS in consumer applications
- **Font Paths**: Corrected relative paths in fonts.css to work properly from node_modules
- **Package Exports**: Added proper `fonts.css` export at package root level
- **Next.js Compatibility**: Fixed "Module not found" errors when importing fonts in Next.js applications

### Added
- **Comprehensive Font Documentation**: Added FONT-USAGE.md with detailed usage instructions for all frameworks
- **Package Root Font Export**: Added `ctt-design-system/fonts.css` import option
- **Backward Compatibility**: Fonts are now available in both `dist/fonts/` and `dist/assets/fonts/`
- **Test Suite**: Added font loading verification test

### Changed
- **Font CSS Structure**: Optimized font CSS files for better package consumption
- **Build Process**: Enhanced rollup configuration to handle font distribution properly
- **Import Methods**: Simplified font imports - now just use `@import 'ctt-design-system/fonts.css'`

## [1.1.0] - 2025-06-25

### 🎉 Major Feature: React Integration

#### Added
- **React Wrapper Components**: Native React components that wrap web components
  - `import { Button, InputField, TextareaField, RadioButton } from 'ctt-design-system/react'`
  - React-style event handling (onClick instead of addEventListener)
  - Proper prop passing and type safety
  - React DevTools integration
  - SSR compatibility

- **React Hooks**: Advanced integration patterns
  - `useCttComponent()` - Direct component interaction helper
  - `useCttForm()` - Form state management with CTT components

- **TypeScript Support**: Full type definitions
  - React wrapper types (`src/react/index.d.ts`)
  - JSX intrinsic elements for direct web component usage (`src/jsx.d.ts`)
  - Auto-completion and compile-time error checking

- **Package Exports**: Clean import paths
  - `ctt-design-system/react` - React wrapper components
  - `ctt-design-system/jsx` - TypeScript definitions for direct web component usage

- **Framework Integration Guides**:
  - Complete React integration guide (`REACT-INTEGRATION.md`)
  - Next.js specific setup guide (`NEXTJS-INTEGRATION.md`)
  - Step-by-step instructions for popular frameworks

- **Working Examples**:
  - Basic React example (`examples/react-example.jsx`)
  - Complete Vite + React application (`examples/vite-react/`)
  - Copy-paste ready code for developers

#### Updated
- Build system to generate React bundles (ES modules and CommonJS)
- Package.json with React peer dependencies and updated keywords
- Main README with React usage examples
- TypeScript configurations for better JSX support

#### Benefits
- **Zero Breaking Changes**: All existing web component functionality preserved
- **Better Developer Experience**: Native React patterns with modern hooks
- **Framework Agnostic**: Still works in Vue, Angular, vanilla JS
- **Performance**: Optimized event handling and prop passing
- **SSR Ready**: Compatible with Next.js and other SSR frameworks

## [1.0.0] - 2024-01-XX

### Added
- Initial release of CTT Design System
- Button component with primary/secondary variants
- Design tokens system
- Framework-agnostic Web Components
- TypeScript definitions
- CSS custom properties export
- Multi-format distribution (ES modules, CommonJS, CSS)

### Components
- Button: Interactive button component with customizable styles and sizes

### Tokens
- Color palette with primary, secondary, and neutral colors
- Typography scale with font families, sizes, weights, and line heights
- Spacing scale
- Border radius tokens
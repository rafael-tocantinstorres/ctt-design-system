# Changelog

All notable changes to this project will be documented in this file.

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
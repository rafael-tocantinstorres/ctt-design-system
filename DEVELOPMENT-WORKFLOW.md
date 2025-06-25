# Development Workflow Guide

## Overview
This guide covers the complete development and publishing workflow for the CTT Design System.

## 🚀 Quick Start for New Developers

### 1. Initial Setup
```bash
# Clone the repository
git clone <your-repo-url>
cd ctt-design-system

# Install dependencies
npm install

# Set up environment for publishing (Windows PowerShell)
./scripts/setup-local-env.ps1

# Or set manually for this session:
# $env:NPM_TOKEN = "your_npm_token_here"

# Start development environment
npm run watch
```

### 2. Development Commands
```bash
# Start development server with hot reload
npm run dev

# Start Storybook for component development
npm run storybook

# Run both development server and Storybook
npm run watch

# Build for production
npm run build

# Run tests
npm test

# Generate a new component
npm run generate:component
```

## 📦 Publishing Workflow

### Manual Publishing (Recommended for Development)

#### Option 1: Using Convenience Scripts
```bash
# Patch version (1.0.1 -> 1.0.2)
npm run version:patch

# Minor version (1.0.1 -> 1.1.0)
npm run version:minor

# Major version (1.0.1 -> 2.0.0)
npm run version:major
```

#### Option 2: Manual Process
```bash
# Check current status
npm run publish:check

# Update version manually
npm version patch

# Build and publish
npm run release
```

### Automated Publishing (CI/CD)

#### Setup Requirements:
1. ✅ **GitHub Actions Workflow**: `.github/workflows/publish.yml`
2. ⏳ **GitHub Secret**: Add `NPM_TOKEN` to repository secrets
3. ✅ **Package Configuration**: Properly configured `package.json`

#### Automated Triggers:
- Push to `main` branch with `package.json` version change
- Manual trigger via GitHub Actions interface

## 🔧 Build Process

### Understanding the Build Steps

1. **Tokens Build** (`npm run build:tokens`)
   - Generates design tokens from `src/tokens/`
   - Creates `dist/tokens.json` and `dist/tokens.css`

2. **Components Build** (`npm run build:components`)
   - Builds ES modules and CommonJS versions
   - Creates `dist/index.esm.js` and `dist/index.js`
   - Generates TypeScript definitions

3. **CSS Build** (`npm run build:css`)
   - Processes and bundles all CSS files
   - Creates `dist/styles.css` main bundle
   - Copies individual component CSS files

### Build Outputs
```
dist/
├── index.js              # CommonJS entry point
├── index.esm.js          # ES Module entry point
├── index.d.ts            # TypeScript definitions
├── styles.css            # Main CSS bundle
├── tokens.css            # Design tokens CSS
├── tokens.json           # Design tokens JSON
├── assets/
│   ├── fonts.css         # Font definitions
│   └── fonts/            # Font files
├── tokens/
│   ├── index.js          # Tokens CommonJS
│   └── index.esm.js      # Tokens ES Module
└── styles/               # Individual component CSS
```

## 🧪 Testing Strategy

### Pre-Publish Testing
```bash
# Run all tests
npm test

# Build and verify
npm run build

# Test package locally
npm pack
```

### Component Testing
- Unit tests with Vitest
- Visual regression testing with Storybook
- Accessibility testing included

## 📋 Release Checklist

### Before Publishing:
- [ ] Update version in `package.json`
- [ ] Update `CHANGELOG.md` with changes
- [ ] Run `npm run build` successfully
- [ ] Run `npm test` - all tests pass
- [ ] Test components in Storybook
- [ ] Verify package contents with `npm pack`

### Publishing:
- [ ] Use `npm run version:patch/minor/major` for convenience
- [ ] Or use manual process with `npm run release`
- [ ] Verify on npmjs.com after publishing
- [ ] Test installation: `npm install ctt-design-system`

### After Publishing:
- [ ] Create GitHub release with changelog
- [ ] Update documentation if needed
- [ ] Notify team members of new version

## 🔍 Package Status Commands

```bash
# Check current version and npm status
npm run publish:check

# View package info on npm
npm view ctt-design-system

# Check who you're logged in as
npm whoami

# View current package contents
npm pack --dry-run
```

## 🏗️ Component Development

### Creating New Components
```bash
# Generate component boilerplate
npm run generate:component

# Follow the prompts to create:
# - Component class
# - Stories file
# - CSS styles
# - Tests
```

### Component Structure
```
src/components/YourComponent/
├── YourComponent.js      # Main component
├── YourComponent.css     # Component styles
└── YourComponent.test.js # Tests
```

## 🎨 Design Tokens

### Token Structure
```
src/tokens/
├── colors.js            # Color palette
├── typography.js        # Font definitions
├── tokens.css          # CSS custom properties
└── index.js            # Token exports
```

### Using Tokens
```javascript
// Import tokens in JavaScript
import { colors, typography } from 'ctt-design-system/tokens';

// Use in CSS
@import 'ctt-design-system/tokens.css';
```

## 🔧 Troubleshooting

### Common Issues:

#### Build Failures
- Check Node.js version compatibility
- Clear `node_modules` and reinstall
- Verify all dependencies are installed

#### Publishing Errors
- Verify npm authentication: `npm whoami`
- Check if version already exists: `npm run publish:check`
- Ensure no syntax errors in `package.json`

#### CSS Import Warnings
- These are normal during build process
- Check `scripts/build-css.js` for import resolution

## 📊 Current Package Status

- **Name**: `ctt-design-system`
- **Version**: `1.0.1` (Ready to publish)
- **Registry**: https://registry.npmjs.org/
- **Live Version**: `1.0.0` ✅
- **Next Version**: `1.0.1` ⏳

## 🔗 Useful Links

- [npm Package](https://www.npmjs.com/package/ctt-design-system)
- [GitHub Repository](https://github.com/YOUR_USERNAME/ctt-design-system)
- [Storybook Documentation](http://localhost:6006) (when running locally)
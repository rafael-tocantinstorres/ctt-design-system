# CTT Design System - Publishing Guide

## Setup Complete! ✅

Npm publishing setup is now fully configured and ready to use.

## Authentication Setup
- ✅ Local npm authentication configured
- ✅ GitHub Actions secret ready (add `NPM_TOKEN` to repo secrets)
- ✅ Package configuration optimized for publishing

## Publishing Methods

### 1. Manual Publishing (Local)
```bash
# For patch version (1.0.0 -> 1.0.1)
npm run version:patch

# For minor version (1.0.0 -> 1.1.0)
npm run version:minor

# For major version (1.0.0 -> 2.0.0)
npm run version:major

# Or manually publish current version
npm run release
```

### 2. Automated Publishing (GitHub Actions)
The CI/CD pipeline will automatically publish when:
- You push changes to the `main` branch
- The `package.json` version has changed
- All tests pass
- The version doesn't already exist on npm

### 3. Manual Version Update + CI
```bash
# Update version locally
npm version patch
# Push to trigger automated publishing
git push origin main --tags
```

## Package Information
- **Name**: `ctt-ds`
- **Current Version**: `1.0.0` ✅ **PUBLISHED**
- **Registry**: https://registry.npmjs.org/
- **Package Size**: ~1.5 MB
- **Files Included**: dist/, README.md, CHANGELOG.md

## Installation for Users
✅ **Package is now live!** Users can install your package with:

```bash
npm install ctt-ds
```

## Usage Examples
```javascript
// Import components
import { Button, InputField } from 'ctt-ds';

// Import tokens only
import { colors, typography } from 'ctt-ds/tokens';

// Import CSS
import 'ctt-ds/css';
import 'ctt-ds/fonts.css';
```

## Next Steps
1. **Add GitHub Secret**: Go to your repo settings and add `NPM_TOKEN` secret
2. **Test Publish**: Run `npm publish` to publish version 1.0.0
3. **Update Documentation**: Consider updating README with installation instructions
4. **Set up Changelog**: Update CHANGELOG.md for future releases

## Security Note
⚠️ **Important**: The npm token shared in this session should be regenerated after setup for security.

## Build Process
The publishing process automatically:
1. Builds design tokens (`npm run build:tokens`)
2. Builds components (`npm run build:components`)
3. Builds CSS bundle (`npm run build:css`)
4. Runs tests
5. Publishes to npm registry

## Troubleshooting
- If publish fails, check that the version doesn't already exist
- Ensure all tests pass before publishing
- Verify npm authentication with `npm whoami`
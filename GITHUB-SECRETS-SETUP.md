# GitHub Secrets Setup Guide

## Setting up NPM_TOKEN for Automated Publishing

Your GitHub Actions workflow needs access to your npm token to publish automatically. Here's how to set it up:

### Step 1: Navigate to Repository Settings
1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/ctt-design-system`
2. Click the **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**

### Step 2: Add the NPM Token
1. Click **New repository secret**
2. **Name**: `NPM_TOKEN`
3. **Secret**: `[YOUR_NPM_TOKEN_HERE]` (Use your actual npm token)
4. Click **Add secret**

### Step 3: Verify Setup
Once the secret is added, your GitHub Actions will automatically publish when:
- You push changes to the `main` branch
- The `package.json` version has been updated
- All tests pass
- The version doesn't already exist on npm

## Security Best Practices

⚠️ **Important Security Notes:**

1. **Regenerate Token**: After setup, consider regenerating your npm token for security
2. **Token Permissions**: Ensure the token only has publish permissions
3. **Repository Access**: Only add this secret to repositories that need it

## Testing the Automation

To test the automated publishing:

1. Update the version in `package.json`:
   ```bash
   npm version patch
   ```

2. Push to trigger the workflow:
   ```bash
   git push origin main --tags
   ```

3. Check the **Actions** tab in GitHub to see the workflow running

## Troubleshooting

### Common Issues:
- **Secret not found**: Ensure the secret name is exactly `NPM_TOKEN`
- **Permission denied**: Verify the token has publish permissions
- **Version already exists**: The workflow skips publishing if the version already exists on npm

### Workflow Status:
- ✅ **Workflow file exists**: `.github/workflows/publish.yml`
- ✅ **Package published manually**: `ctt-design-system@1.0.0`
- ⏳ **Needs setup**: Add `NPM_TOKEN` secret to repository
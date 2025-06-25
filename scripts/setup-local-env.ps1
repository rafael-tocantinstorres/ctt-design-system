# PowerShell script to set up local environment for npm publishing
# Run this script to set the NPM_TOKEN environment variable

Write-Host "🔧 Setting up local environment for CTT Design System..." -ForegroundColor Green

# Set the NPM_TOKEN environment variable
# Replace YOUR_NPM_TOKEN_HERE with your actual npm token
$env:NPM_TOKEN = "YOUR_NPM_TOKEN_HERE"

Write-Host "✅ NPM_TOKEN environment variable set for this session" -ForegroundColor Green

# Test authentication
Write-Host "🧪 Testing npm authentication..." -ForegroundColor Yellow
try {
    $user = npm whoami 2>$null
    if ($user) {
        Write-Host "✅ Authenticated as: $user" -ForegroundColor Green
    } else {
        Write-Host "❌ Authentication failed" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ Error testing authentication: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "🚀 You can now use npm publishing commands:" -ForegroundColor Cyan
Write-Host "   npm run publish:check" -ForegroundColor White
Write-Host "   npm run version:patch" -ForegroundColor White
Write-Host "   npm run release" -ForegroundColor White
Write-Host ""
Write-Host "⚠️  Note: This environment variable is only set for this PowerShell session" -ForegroundColor Yellow
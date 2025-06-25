#!/usr/bin/env node

/**
 * Publishing Utilities for CTT Design System
 * Provides helper functions for version management and publishing
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageJsonPath = join(__dirname, '..', 'package.json');

/**
 * Get current package version
 */
function getCurrentVersion() {
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
  return packageJson.version;
}

/**
 * Check if version exists on npm
 */
function versionExistsOnNpm(version) {
  try {
    execSync(`npm view ctt-design-system@${version} version`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

/**
 * Update CHANGELOG.md with new version
 */
function updateChangelog(version, type) {
  const changelogPath = join(__dirname, '..', 'CHANGELOG.md');
  const changelog = readFileSync(changelogPath, 'utf8');
  
  const date = new Date().toISOString().split('T')[0];
  const versionHeader = `## [${version}] - ${date}`;
  
  let changes = '';
  switch (type) {
    case 'major':
      changes = `### Breaking Changes
- Major version update with breaking changes

### Added
- New features and improvements

### Changed
- Updated dependencies and build process`;
      break;
    case 'minor':
      changes = `### Added
- New features and components

### Changed
- Updated existing functionality

### Fixed
- Bug fixes and improvements`;
      break;
    case 'patch':
    default:
      changes = `### Fixed
- Bug fixes and improvements

### Changed
- Minor updates and optimizations`;
      break;
  }
  
  const newEntry = `${versionHeader}

${changes}

`;
  
  // Insert new entry after the first line (title)
  const lines = changelog.split('\n');
  lines.splice(2, 0, newEntry);
  
  writeFileSync(changelogPath, lines.join('\n'));
  console.log(`✅ Updated CHANGELOG.md with version ${version}`);
}

/**
 * Run pre-publish checks
 */
function runPrePublishChecks() {
  console.log('🔍 Running pre-publish checks...');
  
  // Check if build works
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build successful');
  } catch (error) {
    console.error('❌ Build failed');
    process.exit(1);
  }
  
  // Check if tests pass
  try {
    execSync('npm test', { stdio: 'inherit' });
    console.log('✅ Tests passed');
  } catch (error) {
    console.error('❌ Tests failed');
    process.exit(1);
  }
}

/**
 * Publish with checks
 */
function publishWithChecks(versionType) {
  const currentVersion = getCurrentVersion();
  console.log(`📦 Current version: ${currentVersion}`);
  
  if (versionExistsOnNpm(currentVersion)) {
    console.log(`⚠️  Version ${currentVersion} already exists on npm`);
    console.log('🔄 Bumping version...');
    
    // Bump version
    execSync(`npm version ${versionType}`, { stdio: 'inherit' });
    const newVersion = getCurrentVersion();
    
    // Update changelog
    updateChangelog(newVersion, versionType);
    
    // Commit changelog
    execSync('git add CHANGELOG.md', { stdio: 'inherit' });
    execSync(`git commit -m "Update CHANGELOG.md for v${newVersion}"`, { stdio: 'inherit' });
  }
  
  // Run checks
  runPrePublishChecks();
  
  // Publish
  console.log('🚀 Publishing to npm...');
  execSync('npm publish', { stdio: 'inherit' });
  
  console.log('✅ Package published successfully!');
  console.log(`📦 Package: ctt-design-system@${getCurrentVersion()}`);
  console.log('🔗 View on npm: https://www.npmjs.com/package/ctt-design-system');
}

// CLI interface
const command = process.argv[2];
const versionType = process.argv[3] || 'patch';

switch (command) {
  case 'check':
    const version = getCurrentVersion();
    const exists = versionExistsOnNpm(version);
    console.log(`Current version: ${version}`);
    console.log(`Exists on npm: ${exists ? 'Yes' : 'No'}`);
    break;
    
  case 'publish':
    publishWithChecks(versionType);
    break;
    
  case 'version':
    console.log(getCurrentVersion());
    break;
    
  default:
    console.log(`
CTT Design System Publishing Utils

Usage:
  node scripts/publish-utils.js <command> [options]

Commands:
  check                 Check current version status
  publish [type]        Publish with version bump (patch|minor|major)
  version              Show current version

Examples:
  node scripts/publish-utils.js check
  node scripts/publish-utils.js publish patch
  node scripts/publish-utils.js publish minor
`);
    break;
}
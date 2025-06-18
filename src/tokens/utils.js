/**
 * Design Tokens Utilities
 * Helper functions for working with design tokens
 */

import { tokens } from './index.js';

/**
 * Converts nested token objects to CSS custom properties
 * @param {Object} obj - Token object
 * @param {string} prefix - CSS variable prefix (default: 'ctt')
 * @param {string} parent - Parent key for nested objects
 * @returns {Object} CSS custom properties object
 */
export function tokensToCSSProperties(obj, prefix = 'ctt', parent = '') {
  const cssProperties = {};
  
  for (const [key, value] of Object.entries(obj)) {
    const propertyName = parent 
      ? `--${prefix}-${parent}-${key}` 
      : `--${prefix}-${key}`;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Recursively handle nested objects
      Object.assign(cssProperties, tokensToCSSProperties(value, prefix, parent ? `${parent}-${key}` : key));
    } else {
      cssProperties[propertyName] = value;
    }
  }
  
  return cssProperties;
}

/**
 * Generates CSS custom properties string from tokens
 * @param {Object} tokensObj - Tokens object (default: all tokens)
 * @param {string} prefix - CSS variable prefix (default: 'ctt')
 * @returns {string} CSS string with custom properties
 */
export function generateCSSVariables(tokensObj = tokens, prefix = 'ctt') {
  const cssProperties = tokensToCSSProperties(tokensObj, prefix);
  
  let cssString = ':root {\n';
  for (const [property, value] of Object.entries(cssProperties)) {
    cssString += `  ${property}: ${value};\n`;
  }
  cssString += '}';
  
  return cssString;
}

/**
 * Gets a token value by path (e.g., 'colors.core.primary.500')
 * @param {string} path - Dot-separated path to token
 * @param {Object} tokensObj - Tokens object (default: all tokens)
 * @returns {*} Token value or undefined
 */
export function getToken(path, tokensObj = tokens) {
  return path.split('.').reduce((obj, key) => obj?.[key], tokensObj);
}

/**
 * Gets a CSS custom property name for a token path
 * @param {string} path - Dot-separated path to token
 * @param {string} prefix - CSS variable prefix (default: 'ctt')
 * @returns {string} CSS custom property name
 */
export function getTokenCSSVar(path, prefix = 'ctt') {
  return `--${prefix}-${path.replace(/\./g, '-')}`;
}

/**
 * Creates a style object for Lit's styleMap with token values
 * @param {Object} styles - Object with CSS properties and token paths
 * @returns {Object} Style object with resolved token values
 */
export function tokenStyles(styles) {
  const resolvedStyles = {};
  
  for (const [property, tokenPath] of Object.entries(styles)) {
    if (typeof tokenPath === 'string' && tokenPath.includes('.')) {
      resolvedStyles[property] = getToken(tokenPath);
    } else {
      resolvedStyles[property] = tokenPath;
    }
  }
  
  return resolvedStyles;
}

// Export commonly used token combinations
export const buttonTokens = {
  primary: {
    backgroundColor: getToken('colors.core.primary.500'),
    color: getToken('colors.base.neutral.white'),
  },
  secondary: {
    backgroundColor: 'transparent',
    color: getToken('colors.base.text.primary'),
    boxShadow: `${getToken('colors.base.shadow.md')} 0px 0px 0px 1px inset`,
  },
  typography: {
    small: tokens.typography.scale.button.small,
    medium: tokens.typography.scale.button.medium,
    large: tokens.typography.scale.button.large,
  },
};

/**
 * Helper function to get CSS custom property value
 * @param {string} property - CSS custom property name (without --)
 * @param {string} prefix - CSS variable prefix (default: 'ctt')
 * @returns {string} CSS var() function
 */
export function getCSSVar(property, prefix = 'ctt') {
  return `var(--${prefix}-${property})`;
}

/**
 * Typography helper functions for consistent usage
 */
export const typographyHelpers = {
  // Font family helpers
  getFontFamily: (type = 'primary') => tokens.typography.fontFamilies[type] || tokens.typography.fontFamilies.primary,
  
  // Font size helpers
  getFontSize: (size = 'base') => tokens.typography.fontSizes[size] || tokens.typography.fontSizes.base,
  
  // Font weight helpers
  getFontWeight: (weight = 'normal') => tokens.typography.fontWeights[weight] || tokens.typography.fontWeights.normal,
  
  // Line height helpers
  getLineHeight: (height = 'normal') => tokens.typography.lineHeights[height] || tokens.typography.lineHeights.normal,
  
  // Typography scale helpers
  getTypographyScale: (scale = 'bodyMedium') => tokens.typography.scale[scale] || tokens.typography.scale.bodyMedium,
  
  // Button typography helpers
  getButtonTypography: (size = 'medium') => tokens.typography.scale.button[size] || tokens.typography.scale.button.medium,
};
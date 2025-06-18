'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Design Tokens - Colors
 * Core and Base color definitions for the CTT Design System
 */

// Core Colors - Primary palette
const coreColors = {
  primary: {
    50: '#f0f1ff',
    100: '#e4e6ff',
    200: '#cccefd',
    300: '#a5a9fa',
    400: '#7b7bf5',
    500: '#555ab9', // Current primary
    600: '#4449a0',
    700: '#3a3e88',
    800: '#2f3370',
    900: '#252858',
  },
  
  secondary: {
    50: '#f9f9f9',
    100: '#f0f0f0',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },

  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },

  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },

  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
};

// Base Colors - Neutral and semantic colors
const baseColors = {
  // Neutral grays
  neutral: {
    white: '#ffffff',
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    black: '#000000',
  },

  // Semantic colors
  text: {
    primary: '#333333', // Current secondary text
    secondary: '#737373',
    tertiary: '#a3a3a3',
    inverse: '#ffffff',
    disabled: '#d4d4d4',
  },

  background: {
    primary: '#ffffff',
    secondary: '#fafafa',
    tertiary: '#f5f5f5',
    inverse: '#171717',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },

  border: {
    primary: '#e5e5e5',
    secondary: '#d4d4d4',
    focus: '#555ab9',
    error: '#ef4444',
    disabled: '#f5f5f5',
  },

  shadow: {
    sm: 'rgba(0, 0, 0, 0.05)',
    md: 'rgba(0, 0, 0, 0.15)', // Current button shadow
    lg: 'rgba(0, 0, 0, 0.25)',
  },
};

// Combined export for easy access
const colors = {
  core: coreColors,
  base: baseColors,
};

/**
 * Design Tokens - Typography
 * Font families, sizes, weights, and line-heights for the CTT Design System
 */

// Font Families
const fontFamilies = {
  primary: "'ActoCTT', 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif", // CTT Brand font with fallbacks
  secondary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace",
};

// Font Sizes (in rem for scalability, with px equivalents in comments)
const fontSizes = {
  xs: '0.75rem',    // 12px - Current small button
  sm: '0.875rem',   // 14px - Current medium button  
  base: '1rem',     // 16px - Current large button
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',    // 48px
  '6xl': '3.75rem', // 60px
};

// Font Weights
const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,        // Current button weight
  extrabold: 800,
  black: 900,
};

// Line Heights
const lineHeights = {
  none: 1,          // Current button line-height
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
};

// Letter Spacing
const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

// Typography Scale - Predefined combinations for common use cases
const typographyScale = {
  // Headings
  h1: {
    fontSize: fontSizes['5xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tight,
  },
  h2: {
    fontSize: fontSizes['4xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tight,
  },
  h3: {
    fontSize: fontSizes['3xl'],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacing.normal,
  },
  h4: {
    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacing.normal,
  },
  h5: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  h6: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },

  // Body text
  bodyLarge: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.relaxed,
    letterSpacing: letterSpacing.normal,
  },
  body: {
    fontSize: fontSizes.base,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  bodySmall: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },

  // Component-specific
  button: {
    large: {
      fontSize: fontSizes.base,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.none,
    },
    medium: {
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.none,
    },
    small: {
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.none,
    },
  },

  // Utility
  caption: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.wide,
  },
  overline: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.widest,
    textTransform: 'uppercase',
  },
  code: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
    fontFamily: fontFamilies.mono,
  },
};

// Combined export
const typography = {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
  scale: typographyScale,
};

/**
 * Design Tokens - Main Export
 * Central export point for all design tokens in the CTT Design System
 */


const tokens = {
  colors,
  typography,
};

exports.baseColors = baseColors;
exports.colors = colors;
exports.coreColors = coreColors;
exports.default = tokens;
exports.fontFamilies = fontFamilies;
exports.fontSizes = fontSizes;
exports.fontWeights = fontWeights;
exports.letterSpacing = letterSpacing;
exports.lineHeights = lineHeights;
exports.tokens = tokens;
exports.typography = typography;
exports.typographyScale = typographyScale;
//# sourceMappingURL=index.js.map

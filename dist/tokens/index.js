'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Design Tokens - Colors
 * Core and Base color definitions for the CTT Design System
 * These match the CSS custom properties in tokens.css
 */

// Brand Colors - Raw color values (Primitive tokens)
const brandColors = {
  primary: {
    100: '#F9CCD3',
    200: '#F299A7',
    300: '#EC667C',
    400: '#E53350',
    500: '#DF0024',
    600: '#C7001E',
    700: '#B10018',
  },
  
  secondary: {
    100: '#CCCCCC',
    200: '#99999D',
    300: '#666666',
    400: '#333333',
    500: '#000000',
  },

  teal: {
    100: '#CCF2F0',
    200: '#99E5E1',
    300: '#66D8D2',
    400: '#33CBC3',
    500: '#00BEB4',
    600: '#009C97',
  },

  green: {
    100: '#F0F6DA',
    200: '#E1EDB5',
    300: '#D2E490',
    400: '#C3DB6B',
    500: '#B4D246',
    600: '#A5C81F',
  },

  yellow: {
    100: '#FFFBCC',
    200: '#FFF799',
    300: '#FFF366',
    400: '#FFEF33',
    500: '#FFEB00',
    600: '#E6D400',
  },

  purple: {
    100: '#E6D2E6',
    200: '#CDA5CD',
    300: '#B478B4',
    400: '#9B4B9B',
    500: '#821E82',
    600: '#690B69',
  },
};

// Core Colors - Semantic color assignments (System tokens)
const coreColors = {
  primary: {
    light: '#E53350', // --ctt-brand-primary-400
    main: '#DF0024',  // --ctt-brand-primary-500
    dark: '#C7001E',  // --ctt-brand-primary-600
  },
  
  secondary: {
    light: '#666666', // --ctt-brand-secondary-300
    main: '#333333',  // --ctt-brand-secondary-400
    dark: '#000000',  // --ctt-brand-secondary-500
  },

  new: {
    light: '#CDA5CD', // --ctt-brand-purple-200
    main: '#9B4B9B',  // --ctt-brand-purple-400
  },

  informative: {
    light: '#99E5E1', // --ctt-brand-teal-200
    main: '#33CBC3',  // --ctt-brand-teal-400
  },

  success: {
    light: '#E1EDB5', // --ctt-brand-green-200
    main: '#C3DB6B',  // --ctt-brand-green-400
  },

  warning: {
    light: '#FFF799', // --ctt-brand-yellow-200
    main: '#FFEF33',  // --ctt-brand-yellow-400
  },

  error: {
    light: '#F299A7', // --ctt-brand-primary-200
    main: '#B10018',  // --ctt-brand-primary-700
  },

  neutral: {
    100: '#FFFFFF',
    200: '#F7F7F7',
    300: '#F2F2F2',
    400: '#E9E5E5',
    500: '#CCCCCC', // --ctt-brand-secondary-100
    600: '#99999D', // --ctt-brand-secondary-200
    700: '#666666', // --ctt-brand-secondary-300
    800: '#333333', // --ctt-brand-secondary-400
    900: '#000000', // --ctt-brand-secondary-500
  },
};

// Base Colors - Component-level semantic colors
const baseColors = {
  // Page colors
  page: {
    bgDefault: '#FFFFFF',  // --ctt-core-color-neutral-100
    bgCloudy: '#F7F7F7',   // --ctt-core-color-neutral-200
  },

  // Container colors
  container: {
    bgDefault: '#FFFFFF',   // --ctt-core-color-neutral-100
    bgDisabled: '#F2F2F2',  // --ctt-core-color-neutral-300
    borderDefault: '#99999D', // --ctt-core-color-neutral-600
    borderDisabled: '#CCCCCC', // --ctt-core-color-neutral-500
    borderSelected: '#C7001E', // --ctt-core-color-primary-dark
  },

  // Text colors
  text: {
    primary: '#333333',   // --ctt-core-color-secondary-main
    secondary: '#666666', // --ctt-core-color-secondary-light
    tertiary: '#99999D',  // --ctt-core-color-neutral-600
    inverse: '#FFFFFF',   // --ctt-core-color-neutral-100
    disabled: '#CCCCCC',  // --ctt-core-color-neutral-500
  },

  // Background colors
  background: {
    primary: '#FFFFFF',   // --ctt-core-color-neutral-100
    secondary: '#F7F7F7', // --ctt-core-color-neutral-200
    tertiary: '#F2F2F2',  // --ctt-core-color-neutral-300
    inverse: '#000000',   // --ctt-core-color-secondary-dark
  },

  // Border colors
  border: {
    primary: '#E9E5E5',   // --ctt-core-color-neutral-400
    secondary: '#CCCCCC', // --ctt-core-color-neutral-500
    focus: '#DF0024',     // --ctt-core-color-primary-main
    error: '#B10018',     // --ctt-core-color-negative-main
    disabled: '#F2F2F2',  // --ctt-core-color-neutral-300
  },
};

// Combined export for easy access
const colors = {
  brand: brandColors,
  core: coreColors,
  base: baseColors,
};

/**
 * Design Tokens - Typography
 * Font families, sizes, weights, and line-heights for the CTT Design System
 * Aligned with CSS custom properties in tokens.css
 */

// Font Families - Aligned with CSS tokens
const fontFamilies = {
  primary: "'ActoCTT', sans-serif", // Matches --ctt-core-font-family-brand
  body: "'ActoCTT', sans-serif",    // Matches --ctt-base-font-family-body
  title: "'ActoCTT', sans-serif",   // Matches --ctt-base-font-family-title
  display: "'ActoCTT', sans-serif", // Matches --ctt-base-font-family-display
  label: "'ActoCTT', sans-serif",   // Matches --ctt-base-font-family-label
  mono: "'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace",
};

// Font Sizes - Aligned with CSS scaled tokens (in rem for scalability)
const fontSizes = {
  // Core scaled sizes - matching CSS tokens
  xs: '0.75rem',     // 12px - matches --ctt-core-font-size-scaled-75
  sm: '0.875rem',    // 14px - matches --ctt-core-font-size-scaled-87
  base: '1rem',      // 16px - matches --ctt-core-font-size-scaled-100
  lg: '1.125rem',    // 18px - matches --ctt-core-font-size-scaled-112
  xl: '1.25rem',     // 20px - matches --ctt-core-font-size-scaled-125
  '2xl': '1.625rem', // 26px - matches --ctt-core-font-size-scaled-162
  '3xl': '2.0625rem', // 33px - matches --ctt-core-font-size-scaled-206
  '4xl': '2.25rem',  // 36px - matches --ctt-core-font-size-scaled-225
  '5xl': '2.625rem', // 42px - matches --ctt-core-font-size-scaled-262
  '6xl': '3rem',     // 48px - matches --ctt-core-font-size-scaled-300
  '7xl': '4rem',     // 64px - matches --ctt-core-font-size-scaled-400
  '8xl': '4.25rem',  // 68px - matches --ctt-core-font-size-scaled-425
};

// Font Weights - Aligned with CSS core tokens
const fontWeights = {
  thin: 250,        // matches --ctt-core-font-weight-250
  light: 300,       // matches --ctt-core-font-weight-300
  normal: 400,      // matches --ctt-core-font-weight-400 (book)
  medium: 500,      // matches --ctt-core-font-weight-500
  bold: 700,        // matches --ctt-core-font-weight-700
  black: 900,       // matches --ctt-core-font-weight-900
};

// Line Heights - Aligned with CSS core tokens
const lineHeights = {
  xs: '100%',       // matches --ctt-core-line-height-xs (tight)
  s: '110%',        // matches --ctt-core-line-height-s (normal)
  m: '130%',        // matches --ctt-core-line-height-m (relaxed)
  l: '150%',        // matches --ctt-core-line-height-l (loose)
  // Legacy aliases for backward compatibility
  none: '100%',     // Current button line-height
  tight: '110%',
  normal: '130%',
  relaxed: '150%',
  loose: '200%',
};

// Letter Spacing - Keeping existing values for flexibility
const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

// Typography Scale - Aligned with CSS base tokens
const typographyScale = {
  // Display styles - matching CSS base tokens
  displayLarge: {
    fontSize: fontSizes['8xl'],  // 68px - matches --ctt-base-font-size-display-l
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.tight,
    fontFamily: fontFamilies.display,
  },
  displayMedium: {
    fontSize: fontSizes['6xl'],  // 48px - matches --ctt-base-font-size-display-m
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.tight,
    fontFamily: fontFamilies.display,
  },
  displaySmall: {
    fontSize: fontSizes['4xl'],  // 36px - matches --ctt-base-font-size-display-s
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.tight,
    fontFamily: fontFamilies.display,
  },

  // Title styles - matching CSS base tokens
  titleXL: {
    fontSize: fontSizes['5xl'],  // 42px - matches --ctt-base-font-size-title-xl
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.tight,
    fontFamily: fontFamilies.title,
  },
  titleLarge: {
    fontSize: fontSizes['3xl'],  // 33px - matches --ctt-base-font-size-title-l
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.tight,
    fontFamily: fontFamilies.title,
  },
  titleMedium: {
    fontSize: fontSizes['2xl'],  // 26px - matches --ctt-base-font-size-title-m
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.s,
    fontFamily: fontFamilies.title,
  },
  titleSmall: {
    fontSize: fontSizes.xl,      // 20px - matches --ctt-base-font-size-title-s
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.s,
    fontFamily: fontFamilies.title,
  },

  // Body text - matching CSS base tokens
  bodyLarge: {
    fontSize: fontSizes.lg,      // 18px - matches --ctt-base-font-size-body-l
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.m,
    fontFamily: fontFamilies.body,
  },
  bodyMedium: {
    fontSize: fontSizes.base,    // 16px - matches --ctt-base-font-size-body-m
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.m,
    fontFamily: fontFamilies.body,
  },
  bodySmall: {
    fontSize: fontSizes.sm,      // 14px - matches --ctt-base-font-size-body-s
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.m,
    fontFamily: fontFamilies.body,
  },

  // Label styles - matching CSS base tokens
  labelLarge: {
    fontSize: fontSizes.lg,      // 18px - matches --ctt-base-font-size-label-l
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.xs,
    fontFamily: fontFamilies.label,
  },
  labelMedium: {
    fontSize: fontSizes.base,    // 16px - matches --ctt-base-font-size-label-m
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.xs,
    fontFamily: fontFamilies.label,
  },
  labelSmall: {
    fontSize: fontSizes.sm,      // 14px - matches --ctt-base-font-size-label-s
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.xs,
    fontFamily: fontFamilies.label,
  },

  // Component-specific - Button styles
  button: {
    large: {
      fontSize: fontSizes.lg,    // 18px - matches --ctt-base-font-size-label-l
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights.xs,
      fontFamily: fontFamilies.label,
    },
    medium: {
      fontSize: fontSizes.base,  // 16px - matches --ctt-base-font-size-label-m
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights.xs,
      fontFamily: fontFamilies.label,
    },
    small: {
      fontSize: fontSizes.sm,    // 14px - matches --ctt-base-font-size-label-s
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights.xs,
      fontFamily: fontFamilies.label,
    },
  },

  // Legacy aliases for backward compatibility
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
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  h4: {
    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  h5: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  h6: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },

  // Utility
  body: {
    fontSize: fontSizes.base,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  caption: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.wide,
  },
  overline: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.medium,
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

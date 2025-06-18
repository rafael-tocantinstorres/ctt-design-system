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
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.xs,
    fontFamily: fontFamilies.label,
  },
  labelMedium: {
    fontSize: fontSizes.base,    // 16px - matches --ctt-base-font-size-label-m
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.xs,
    fontFamily: fontFamilies.label,
  },
  labelSmall: {
    fontSize: fontSizes.sm,      // 14px - matches --ctt-base-font-size-label-s
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.xs,
    fontFamily: fontFamilies.label,
  },

  // Component-specific - Button styles
  button: {
    large: {
      fontSize: fontSizes.lg,    // 18px - matches --ctt-base-font-size-label-l
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.xs,
      fontFamily: fontFamilies.label,
    },
    medium: {
      fontSize: fontSizes.base,  // 16px - matches --ctt-base-font-size-label-m
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.xs,
      fontFamily: fontFamilies.label,
    },
    small: {
      fontSize: fontSizes.sm,    // 14px - matches --ctt-base-font-size-label-s
      fontWeight: fontWeights.bold,
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

export { baseColors, colors, coreColors, tokens as default, fontFamilies, fontSizes, fontWeights, letterSpacing, lineHeights, tokens, typography, typographyScale };
//# sourceMappingURL=index.esm.js.map

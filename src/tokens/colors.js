/**
 * Design Tokens - Colors
 * Core and Base color definitions for the CTT Design System
 */

// Core Colors - Primary palette
export const coreColors = {
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
export const baseColors = {
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
export const colors = {
  core: coreColors,
  base: baseColors,
};

export default colors;
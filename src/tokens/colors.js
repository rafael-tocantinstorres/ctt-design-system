/**
 * Design Tokens - Colors
 * Core and Base color definitions for the CTT Design System
 * These match the CSS custom properties in tokens.css
 */

// Brand Colors - Raw color values (Primitive tokens)
export const brandColors = {
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
export const coreColors = {
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
export const baseColors = {
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
export const colors = {
  brand: brandColors,
  core: coreColors,
  base: baseColors,
};

export default colors;
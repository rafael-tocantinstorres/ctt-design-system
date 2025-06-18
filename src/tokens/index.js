/**
 * Design Tokens - Main Export
 * Central export point for all design tokens in the CTT Design System
 */

export { colors, coreColors, baseColors } from './colors.js';
export { typography, fontFamilies, fontSizes, fontWeights, lineHeights, letterSpacing, typographyScale } from './typography.js';

// Re-export everything as a single tokens object for convenience
import { colors } from './colors.js';
import { typography } from './typography.js';

export const tokens = {
  colors,
  typography,
};

export default tokens;
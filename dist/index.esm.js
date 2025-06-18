import { html, LitElement, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

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

/**
 * Design Tokens Utilities
 * Helper functions for working with design tokens
 */


/**
 * Gets a token value by path (e.g., 'colors.core.primary.500')
 * @param {string} path - Dot-separated path to token
 * @param {Object} tokensObj - Tokens object (default: all tokens)
 * @returns {*} Token value or undefined
 */
function getToken(path, tokensObj = tokens) {
  return path.split('.').reduce((obj, key) => obj?.[key], tokensObj);
}

/**
 * Creates a style object for Lit's styleMap with token values
 * @param {Object} styles - Object with CSS properties and token paths
 * @returns {Object} Style object with resolved token values
 */
function tokenStyles(styles) {
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
const buttonTokens = {
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
function getCSSVar(property, prefix = 'ctt') {
  return `var(--${prefix}-${property})`;
}

/**
 * Typography helper functions for consistent usage
 */
const typographyHelpers = {
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

/** IconButton component */
const IconButton = ({ variant = 'default', size = 'medium', ...props }) => {
  const styles = {
    fontFamily: tokens.typography.fontFamilies.label,
    // Add your component styles here
  };

  return html`
    <div
      class=${['ctt--icon-button', `ctt--icon-button--${variant}`, `ctt--icon-button--${size}`].join(' ')}
      style=${styleMap(styles)}
    >
      <!-- Your component content here -->
      <slot></slot>
    </div>
  `;
};

/** Primary UI component for user interaction */
const Button = ({ primary, backgroundColor = null, size, label, onClick }) => {
  const mode = primary ? 'ctt-button--primary' : 'ctt-button--secondary';
  
  // Get typography tokens for the size
  const sizeKey = size || 'medium';
  const typography = typographyHelpers.getButtonTypography(sizeKey);
  
  // Create style object with tokens and user overrides
  const buttonStyles = {
    fontFamily: typography.fontFamily || tokens.typography.fontFamilies.label,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
    ...(backgroundColor && { backgroundColor }),
  };

  return html`
    <button
      type="button"
      class=${['ctt-button', `ctt-button--${sizeKey}`, mode].join(' ')}
      style=${styleMap(buttonStyles)}
      @click=${onClick}
    >
      ${label}
    </button>
  `;
};

const Header = ({ user, onLogin, onLogout, onCreateAccount }) => html`
  <header>
    <div class="storybook-header">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        ${user
          ? Button({ size: 'small', onClick: onLogout, label: 'Log out' })
          : html`${Button({
              size: 'small',
              onClick: onLogin,
              label: 'Log in',
            })}
            ${Button({
              primary: true,
              size: 'small',
              onClick: onCreateAccount,
              label: 'Sign up',
            })}`}
      </div>
    </div>
  </header>
`;

const Page = ({ user, onLogin, onLogout, onCreateAccount }) => html`
  <article>
    ${Header({
      user,
      onLogin,
      onLogout,
      onCreateAccount,
    })}

    <section class="storybook-page">
      <h2>Pages in Storybook</h2>
      <p>
        We recommend building UIs with a
        <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
          <strong>component-driven</strong> </a
        >process starting with atomic components and ending with pages.
      </p>
      <p>
        Render pages with mock data. This makes it easy to build and review page states without
        needing to navigate to them in your app. Here are some handy patterns for managing page data
        in Storybook:
      </p>
      <ul>
        <li>
          Use a higher-level connected component. Storybook helps you compose such data from the
          "args" of child component stories
        </li>
        <li>
          Assemble data in the page component from your services. You can mock these services out
          using Storybook.
        </li>
      </ul>
      <p>
        Get a guided tutorial on component-driven development at
        <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
          Storybook tutorials
        </a>
        . Read more in the
        <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer"> docs </a>
        .
      </p>
      <div class="tip-wrapper">
        <span class="tip">Tip</span> Adjust the width of the canvas with the
        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
              id="a"
              fill="#999"
            />
          </g>
        </svg>
        Viewports addon in the toolbar
      </div>
    </section>
  </article>
`;

// Export all components

class CttButton extends LitElement {
  static properties = {
    primary: { type: Boolean },
    backgroundColor: { type: String },
    size: { type: String },
    label: { type: String }
  };

  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  constructor() {
    super();
    this.primary = false;
    this.size = 'medium';
    this.label = 'Button';
  }

  render() {
    return Button({
      primary: this.primary,
      backgroundColor: this.backgroundColor,
      size: this.size,
      label: this.label,
      onClick: () => this.dispatchEvent(new CustomEvent('ctt-click', {
        bubbles: true,
        composed: true
      }))
    });
  }
}

class CttIconButton extends LitElement {
  static properties = {
    variant: { type: String },
    size: { type: String }
  };

  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  constructor() {
    super();
    this.variant = 'default';
    this.size = 'medium';
  }

  render() {
    return IconButton({
      variant: this.variant,
      size: this.size,
      onClick: () => this.dispatchEvent(new CustomEvent('ctt-icon-click', {
        bubbles: true,
        composed: true
      }))
    });
  }
}

// Register custom elements
if (!customElements.get('ctt-button')) {
  customElements.define('ctt-button', CttButton);
}

if (!customElements.get('ctt-icon-button')) {
  customElements.define('ctt-icon-button', CttIconButton);
}

export { Button, CttButton, CttIconButton, Header, IconButton, Page, buttonTokens, getCSSVar, tokenStyles, tokens, typographyHelpers };
//# sourceMappingURL=index.esm.js.map

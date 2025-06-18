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

/** IconButton component */
const IconButton = ({ variant = 'default', size = 'medium', ...props }) => {
  const styles = {
    fontFamily: tokens.typography.fontFamilies.primary,
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

/** Primary UI component for user interaction */
const Button = ({ primary, backgroundColor = null, size, label, onClick }) => {
  const mode = primary ? 'ctt-button--primary' : 'ctt-button--secondary';
  
  // Get typography tokens for the size
  const sizeKey = size || 'medium';
  const typography = buttonTokens.typography[sizeKey] || buttonTokens.typography.medium;
  
  // Create style object with tokens and user overrides
  const buttonStyles = {
    fontFamily: tokens.typography.fontFamilies.primary,
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

export { Button, CttButton, CttIconButton, Header, IconButton, Page, buttonTokens, tokenStyles, tokens };
//# sourceMappingURL=index.esm.js.map

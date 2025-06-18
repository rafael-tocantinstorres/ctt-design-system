import { html, LitElement, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

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
      ...=${props}
    >
      <!-- Your component content here -->
      <slot></slot>
    </div>
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

/**
 * Button Web Component
 * 
 * A web component wrapper for the Button component.
 * This allows the component to be used in any framework or vanilla HTML.
 * 
 * Usage:
 * <ctt-button primary size="medium" label="Click me"></ctt-button>
 */
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
      onClick: () => this._handleClick()
    });
  }

  /**
   * Handle click events and dispatch custom events
   */
  _handleClick() {
    this.dispatchEvent(new CustomEvent('ctt-click', {
      bubbles: true,
      composed: true,
      detail: { 
        primary: this.primary,
        size: this.size,
        label: this.label
      }
    }));
  }
}

// Register custom element
if (!customElements.get('ctt-button')) {
  customElements.define('ctt-button', CttButton);
}

/**
 * IconButton Web Component
 * 
 * A web component wrapper for the IconButton component.
 * This allows the component to be used in any framework or vanilla HTML.
 * 
 * Usage:
 * <ctt-icon-button variant="primary" size="medium"></ctt-icon-button>
 */
class CttIconButton extends LitElement {
  static properties = {
    variant: { type: String },
    size: { type: String },
  };

  static styles = css`
    :host {
      display: block;
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
    });
  }

  /**
   * Handle click events and dispatch custom events
   */
  _handleClick(event) {
    this.dispatchEvent(new CustomEvent('ctt-icon-button-click', {
      bubbles: true,
      composed: true,
      detail: { 
        originalEvent: event,
        variant: this.variant,
        size: this.size
      }
    }));
  }
}

// Register custom element
if (!customElements.get('ctt-icon-button')) {
  customElements.define('ctt-icon-button', CttIconButton);
}

/**
 * Header Web Component
 * 
 * A web component wrapper for the Header component.
 * This allows the component to be used in any framework or vanilla HTML.
 * 
 * Usage:
 * <ctt-header user="John Doe"></ctt-header>
 */
class CttHeader extends LitElement {
  static properties = {
    user: { type: String },
  };

  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor() {
    super();
    this.user = null;
  }

  render() {
    return Header({
      user: this.user,
      onLogin: () => this._handleLogin(),
      onLogout: () => this._handleLogout(),
      onCreateAccount: () => this._handleCreateAccount(),
    });
  }

  /**
   * Handle login events
   */
  _handleLogin() {
    this.dispatchEvent(new CustomEvent('ctt-header-login', {
      bubbles: true,
      composed: true,
      detail: { user: this.user }
    }));
  }

  /**
   * Handle logout events
   */
  _handleLogout() {
    this.dispatchEvent(new CustomEvent('ctt-header-logout', {
      bubbles: true,
      composed: true,
      detail: { user: this.user }
    }));
  }

  /**
   * Handle create account events
   */
  _handleCreateAccount() {
    this.dispatchEvent(new CustomEvent('ctt-header-create-account', {
      bubbles: true,
      composed: true,
      detail: { user: this.user }
    }));
  }
}

// Register custom element
if (!customElements.get('ctt-header')) {
  customElements.define('ctt-header', CttHeader);
}

/**
 * Page Web Component
 * 
 * A web component wrapper for the Page component.
 * This allows the component to be used in any framework or vanilla HTML.
 * 
 * Usage:
 * <ctt-page user="John Doe"></ctt-page>
 */
class CttPage extends LitElement {
  static properties = {
    user: { type: String },
  };

  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor() {
    super();
    this.user = null;
  }

  render() {
    return Page({
      user: this.user,
      onLogin: () => this._handleLogin(),
      onLogout: () => this._handleLogout(),
      onCreateAccount: () => this._handleCreateAccount(),
    });
  }

  /**
   * Handle login events
   */
  _handleLogin() {
    this.dispatchEvent(new CustomEvent('ctt-page-login', {
      bubbles: true,
      composed: true,
      detail: { user: this.user }
    }));
  }

  /**
   * Handle logout events
   */
  _handleLogout() {
    this.dispatchEvent(new CustomEvent('ctt-page-logout', {
      bubbles: true,
      composed: true,
      detail: { user: this.user }
    }));
  }

  /**
   * Handle create account events
   */
  _handleCreateAccount() {
    this.dispatchEvent(new CustomEvent('ctt-page-create-account', {
      bubbles: true,
      composed: true,
      detail: { user: this.user }
    }));
  }
}

// Register custom element
if (!customElements.get('ctt-page')) {
  customElements.define('ctt-page', CttPage);
}

export { Button, CttButton, CttHeader, CttIconButton, CttPage, Header, IconButton, Page, buttonTokens, getCSSVar, tokenStyles, tokens, typographyHelpers };
//# sourceMappingURL=index.esm.js.map

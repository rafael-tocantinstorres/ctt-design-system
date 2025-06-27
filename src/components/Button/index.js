import { html, nothing } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { tokens } from '../../tokens/index.js';
import { buttonTokens, typographyHelpers, getCSSVar } from '../../tokens/utils.js';

/** Primary UI component for user interaction */
export const Button = ({ 
  variant = 'primary',
  size = 'medium', 
  label, 
  onclick,
  iconLeft = false,
  iconLeftElement = '',
  iconRight = false,
  iconRightElement = '',
  borderRadius = 'pill',
  backgroundColor = null,
  disabled = false,
  ariaLabel = null
}) => {
  
  // Get typography tokens for the size
  const typography = typographyHelpers.getButtonTypography(size);
  
  // Create style object with tokens and user overrides
  const buttonStyles = {
    fontFamily: typography.fontFamily || tokens.typography.fontFamilies.label,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
    ...(backgroundColor && { backgroundColor }),
  };

  // Map borderRadius values to CSS class names
  const borderRadiusClass = {
    'pill': 'pill',
    'small': 'small-radius',
    'extraSmall': 'extra-small-radius'
  }[borderRadius] || 'pill';

  // Build CSS classes
  const classes = [
    'ctt-button',
    `ctt-button--${size}`,
    `ctt-button--${variant}`,
    `ctt-button--${borderRadiusClass}`
  ].join(' ');

  // Render button content with icons
  const renderContent = () => {
    const parts = [];
    
    if (iconLeft && iconLeftElement) {
      parts.push(html`<span class="ctt-button__icon ctt-button__icon--left">${unsafeHTML(iconLeftElement)}</span>`);
    }
    
    if (label) {
      parts.push(html`<span class="ctt-button__label">${label}</span>`);
    }
    
    if (iconRight && iconRightElement) {
      parts.push(html`<span class="ctt-button__icon ctt-button__icon--right">${unsafeHTML(iconRightElement)}</span>`);
    }
    
    return parts;
  };

  // Determine accessible name - use ariaLabel if provided, otherwise use label
  // For icon-only buttons, ariaLabel should be provided
  const accessibleName = ariaLabel || label;
  const hasVisibleLabel = label && label.trim().length > 0;

  return html`
    <button
      type="button"
      class=${classes}
      style=${styleMap(buttonStyles)}
      ?disabled=${disabled}
      aria-label=${!hasVisibleLabel && accessibleName ? accessibleName : nothing}
      @click=${onclick}
    >
      ${renderContent()}
    </button>
  `;
};

// Export the web component class
export { CttButton } from './ButtonElement.js';
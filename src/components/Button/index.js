import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { tokens } from '../../tokens/index.js';
import { buttonTokens, typographyHelpers, getCSSVar } from '../../tokens/utils.js';

/** Primary UI component for user interaction */
export const Button = ({ primary, backgroundColor = null, size, label, onClick }) => {
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
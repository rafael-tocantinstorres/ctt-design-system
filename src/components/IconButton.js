import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { tokens } from '../tokens/index.js';
import { typographyHelpers, getCSSVar } from '../tokens/utils.js';

import '../tokens/-icon-button-tokens.css';

/** IconButton component */
export const IconButton = ({ variant = 'default', size = 'medium', ...props }) => {
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
import { nothing, html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { e as e$1, i, E, t, T } from './directive-Ddu6mUFO.js';
import { m as typographyHelpers, t as tokens } from './utils-BwoQZBGJ.js';

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i{constructor(i){if(super(i),this.it=E,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===E||null==r)return this._t=void 0,this.it=r;if(r===T)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$1(e);

/** Primary UI component for user interaction */
const Button = ({ 
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
      parts.push(html`<span class="ctt-button__icon ctt-button__icon--left">${o(iconLeftElement)}</span>`);
    }
    
    if (label) {
      parts.push(html`<span class="ctt-button__label">${label}</span>`);
    }
    
    if (iconRight && iconRightElement) {
      parts.push(html`<span class="ctt-button__icon ctt-button__icon--right">${o(iconRightElement)}</span>`);
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

export { Button };
//# sourceMappingURL=index-B6RoOV3J.js.map

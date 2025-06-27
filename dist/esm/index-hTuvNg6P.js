import { html } from 'lit';
import { e } from './styles-CojkkYsV.js';
import { E } from './directive-Ddu6mUFO.js';

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=o=>o??E;

/**
 * RadioButton Lit Function Component
 * 
 * A radio button component using Lit templates for Storybook and framework integration.
 * 
 * @param {Object} props - Component properties
 * @param {string} props.label - Label text for the radio button
 * @param {string} props.name - Name attribute for form grouping
 * @param {string} props.value - Value of the radio button
 * @param {boolean} props.checked - Whether the radio button is checked
 * @param {boolean} props.disabled - Whether the radio button is disabled
 * @param {string} props.errorText - Error message to display
 * @param {function} props.onChange - Change event handler
 * @param {string} props.id - HTML id attribute
 * @param {string} props.className - Additional CSS classes
 * @returns {TemplateResult} Lit HTML template
 */
const RadioButton = ({
  label = '',
  name = '',
  value = '',
  checked = false,
  disabled = false,
  errorText = '',
  onChange,
  id,
  className = '',
  ...props
}) => {
  const classes = e({
    'ctt-radio-button': true,
    'ctt-radio-button--error': !!errorText,
    'ctt-radio-button--disabled': disabled,
    [className]: !!className,
  });

  const handleChange = (event) => {
    if (onChange && !disabled) {
      onChange({
        detail: {
          name,
          value,
          checked: event.target.checked,
          originalEvent: event
        }
      });
    }
  };

  const errorId = errorText ? `${id || name || 'radio'}-error` : undefined;

  // Error icon SVG
  const errorIcon = html`
    <svg class="ctt-radio-button__error-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM8.75 11.25H7.25V9.75H8.75V11.25ZM8.75 8.25H7.25V4.75H8.75V8.25Z" fill="currentColor"/>
    </svg>
  `;

  return html`
    <div class=${classes} id=${o(id)} ...=${props}>
      <label class="ctt-radio-button__root">
        <input
          class="ctt-radio-button__control"
          type="radio"
          name=${name}
          value=${value}
          .checked=${checked}
          ?disabled=${disabled}
          @change=${handleChange}
          aria-invalid=${errorText ? 'true' : 'false'}
          aria-describedby=${o(errorId)}
        />
        <span class="ctt-radio-button__label">${label}</span>
      </label>
      ${errorText ? html`
        <div 
          class="ctt-radio-button__error" 
          id=${errorId}
          role="alert"
          aria-live="polite"
        >
          ${errorIcon}
          <span class="ctt-radio-button__error-text">${errorText}</span>
        </div>
      ` : ''}
    </div>
  `;
};

export { RadioButton };
//# sourceMappingURL=index-hTuvNg6P.js.map

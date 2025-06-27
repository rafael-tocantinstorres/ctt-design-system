import { html, nothing } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { e } from './styles-CojkkYsV.js';
import { l } from './live-Yc7a1Goo.js';
import { m as typographyHelpers, t as tokens } from './utils-BwoQZBGJ.js';
import './directive-Ddu6mUFO.js';

/** TextareaField component with label, error states, and accessibility features */
const TextareaField = ({ 
  label = '',
  value = '',
  name = '',
  placeholder = '',
  errorText = null,
  disabled = false,
  required = false,
  rows = 4,
  cols = null,
  resize = 'vertical',
  id = null,
  onInput = null,
  onChange = null,
  onFocus = null,
  onBlur = null,
  ariaDescribedBy = null,
  ...props 
}) => {
  // Generate unique IDs for accessibility
  const textareaId = id || `ctt-textarea-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = errorText ? `${textareaId}-error` : null;
  const labelId = `${textareaId}-label`;
  
  // Determine the current state for styling
  const hasError = Boolean(errorText);
  const isDisabled = Boolean(disabled);
  
  // Get typography tokens
  const typography = typographyHelpers.getTypographyScale('bodyMedium');
  const labelTypography = typographyHelpers.getTypographyScale('labelMedium');
  
  // Create style objects with tokens
  const containerStyles = {
    fontFamily: typography.fontFamily || tokens.typography.fontFamilies.body,
  };
  
  const labelStyles = {
    fontFamily: labelTypography.fontFamily || tokens.typography.fontFamilies.label,
    fontSize: labelTypography.fontSize,
    fontWeight: labelTypography.fontWeight,
    lineHeight: labelTypography.lineHeight,
  };
  
  const textareaStyles = {
    fontFamily: typography.fontFamily || tokens.typography.fontFamilies.body,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
    resize: resize,
  };
  
  const errorStyles = {
    fontFamily: tokens.typography.fontFamilies.body,
    fontSize: tokens.typography.fontSizes.s, // 12px
    fontWeight: tokens.typography.fontWeights.normal,
    lineHeight: tokens.typography.lineHeights.s,
  };

  // Build CSS classes for container
  const containerClasses = {
    'ctt-textarea-field': true,
    'ctt-textarea-field--error': hasError,
    'ctt-textarea-field--disabled': isDisabled,
  };

  // Build CSS classes for textarea
  const textareaClasses = {
    'ctt-textarea-field__textarea': true,
    'ctt-textarea-field__textarea--error': hasError,
    'ctt-textarea-field__textarea--disabled': isDisabled,
  };

  // Build aria-describedby attribute
  const ariaDescribedByValue = [
    ariaDescribedBy,
    errorId
  ].filter(Boolean).join(' ') || nothing;

  // Error icon SVG
  const errorIcon = html`
    <svg class="ctt-textarea-field__error-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM8.75 11.25H7.25V9.75H8.75V11.25ZM8.75 8.25H7.25V4.75H8.75V8.25Z" fill="currentColor"/>
    </svg>
  `;

  return html`
    <div 
      class=${e(containerClasses)}
      style=${styleMap(containerStyles)}
    >
      ${label ? html`
        <label 
          id=${labelId}
          for=${textareaId}
          class="ctt-textarea-field__label"
          style=${styleMap(labelStyles)}
        >
          ${label}${required ? html`<span class="ctt-textarea-field__required" aria-label="required">*</span>` : nothing}
        </label>
      ` : nothing}
      
      <textarea
        id=${textareaId}
        name=${name}
        class=${e(textareaClasses)}
        style=${styleMap(textareaStyles)}
        .value=${l(value)}
        placeholder=${placeholder || nothing}
        ?disabled=${isDisabled}
        ?required=${required}
        rows=${rows}
        cols=${cols || nothing}
        aria-invalid=${hasError ? 'true' : 'false'}
        aria-describedby=${ariaDescribedByValue}
        aria-labelledby=${label ? labelId : nothing}
        @input=${onInput}
        @change=${onChange}
        @focus=${onFocus}
        @blur=${onBlur}
        ...=${props}
      ></textarea>
      
      ${hasError ? html`
        <div 
          id=${errorId}
          class="ctt-textarea-field__error"
          style=${styleMap(errorStyles)}
          role="alert"
          aria-live="polite"
        >
          ${errorIcon}
          <span class="ctt-textarea-field__error-text">${errorText}</span>
        </div>
      ` : nothing}
    </div>
  `;
};

export { TextareaField };
//# sourceMappingURL=index-By9qtQkd.js.map

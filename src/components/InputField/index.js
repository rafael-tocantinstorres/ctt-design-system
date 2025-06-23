import { html, nothing } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { live } from 'lit/directives/live.js';
import { tokens } from '../../tokens/index.js';
import { typographyHelpers, getCSSVar } from '../../tokens/utils.js';

/** InputField component with label, error states, and accessibility features */
export const InputField = ({ 
  label = '',
  value = '',
  name = '',
  type = 'text',
  placeholder = '',
  error = null,
  disabled = false,
  required = false,
  size = 'medium',
  id = null,
  onInput = null,
  onChange = null,
  onFocus = null,
  onBlur = null,
  ariaDescribedBy = null,
  ...props 
}) => {
  // Generate unique IDs for accessibility
  const inputId = id || `ctt-input-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = error ? `${inputId}-error` : null;
  const labelId = `${inputId}-label`;
  
  // Determine the current state for styling
  const hasError = Boolean(error);
  const isDisabled = Boolean(disabled);
  
  // Get typography tokens for the size
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
  
  const inputStyles = {
    fontFamily: typography.fontFamily || tokens.typography.fontFamilies.body,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
  };
  
  const errorStyles = {
    fontFamily: tokens.typography.fontFamilies.body,
    fontSize: tokens.typography.fontSizes.s, // 12px
    fontWeight: tokens.typography.fontWeights.normal,
    lineHeight: tokens.typography.lineHeights.s,
  };

  // Build CSS classes for container
  const containerClasses = {
    'ctt-input-field': true,
    [`ctt-input-field--${size}`]: true,
    'ctt-input-field--error': hasError,
    'ctt-input-field--disabled': isDisabled,
  };

  // Build CSS classes for input
  const inputClasses = {
    'ctt-input-field__input': true,
    'ctt-input-field__input--error': hasError,
    'ctt-input-field__input--disabled': isDisabled,
  };

  // Build aria-describedby attribute
  const ariaDescribedByValue = [
    ariaDescribedBy,
    errorId
  ].filter(Boolean).join(' ') || nothing;

  // Error icon SVG
  const errorIcon = html`
    <svg class="ctt-input-field__error-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM8.75 11.25H7.25V9.75H8.75V11.25ZM8.75 8.25H7.25V4.75H8.75V8.25Z" fill="currentColor"/>
    </svg>
  `;

  return html`
    <div 
      class=${classMap(containerClasses)}
      style=${styleMap(containerStyles)}
    >
      ${label ? html`
        <label 
          id=${labelId}
          for=${inputId}
          class="ctt-input-field__label"
          style=${styleMap(labelStyles)}
        >
          ${label}${required ? html`<span class="ctt-input-field__required" aria-label="required">*</span>` : nothing}
        </label>
      ` : nothing}
      
      <input
        id=${inputId}
        name=${name}
        type=${type}
        class=${classMap(inputClasses)}
        style=${styleMap(inputStyles)}
        .value=${live(value)}
        placeholder=${placeholder || nothing}
        ?disabled=${isDisabled}
        ?required=${required}
        aria-invalid=${hasError ? 'true' : 'false'}
        aria-describedby=${ariaDescribedByValue}
        aria-labelledby=${label ? labelId : nothing}
        @input=${onInput}
        @change=${onChange}
        @focus=${onFocus}
        @blur=${onBlur}
        ...=${props}
      />
      
      ${hasError ? html`
        <div 
          id=${errorId}
          class="ctt-input-field__error"
          style=${styleMap(errorStyles)}
          role="alert"
          aria-live="polite"
        >
          ${errorIcon}
          <span class="ctt-input-field__error-text">${error}</span>
        </div>
      ` : nothing}
    </div>
  `;
};
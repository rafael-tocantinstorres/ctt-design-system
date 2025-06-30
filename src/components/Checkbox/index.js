import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * Checkbox Lit Function Component
 * 
 * A checkbox component using Lit templates for Storybook and framework integration.
 * 
 * @param {Object} props - Component properties
 * @param {string} props.label - Label text for the checkbox
 * @param {string} props.name - Name attribute for form grouping
 * @param {string} props.value - Value of the checkbox
 * @param {boolean} props.checked - Whether the checkbox is checked
 * @param {boolean} props.disabled - Whether the checkbox is disabled
 * @param {string} props.errorText - Error message to display
 * @param {function} props.onChange - Change event handler
 * @param {string} props.id - HTML id attribute
 * @param {string} props.className - Additional CSS classes
 * @returns {TemplateResult} Lit HTML template
 */
export const Checkbox = ({
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
  const classes = classMap({
    'ctt-checkbox': true,
    'ctt-checkbox--error': !!errorText,
    'ctt-checkbox--disabled': disabled,
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

  const errorId = errorText ? `${id || name || 'checkbox'}-error` : undefined;

  // Error icon SVG
  const errorIcon = html`
    <svg class="ctt-checkbox__error-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM8.75 11.25H7.25V9.75H8.75V11.25ZM8.75 8.25H7.25V4.75H8.75V8.25Z" fill="currentColor"/>
    </svg>
  `;

  // Checkmark icon SVG
  const checkmarkIcon = html`
    <svg class="ctt-checkbox__checkmark" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  return html`
    <div class=${classes} id=${ifDefined(id)} ...=${props}>
      <label class="ctt-checkbox__root">
        <div class="ctt-checkbox__container">
          <input
            class="ctt-checkbox__control"
            type="checkbox"
            name=${name}
            value=${value}
            .checked=${checked}
            ?disabled=${disabled}
            @change=${handleChange}
            aria-invalid=${errorText ? 'true' : 'false'}
            aria-describedby=${ifDefined(errorId)}
          />
          ${checkmarkIcon}
        </div>
        <span class="ctt-checkbox__label">${label}</span>
      </label>
      ${errorText ? html`
        <div 
          class="ctt-checkbox__error" 
          id=${errorId}
          role="alert"
          aria-live="polite"
        >
          ${errorIcon}
          <span class="ctt-checkbox__error-text">${errorText}</span>
        </div>
      ` : ''}
    </div>
  `;
};
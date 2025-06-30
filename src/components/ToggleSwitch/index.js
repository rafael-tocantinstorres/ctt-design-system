import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * ToggleSwitch Lit Function Component
 * 
 * A toggle switch component using Lit templates for Storybook and framework integration.
 * 
 * @param {Object} props - Component properties
 * @param {boolean} props.checked - Whether the toggle is checked
 * @param {boolean} props.disabled - Whether the toggle is disabled
 * @param {string} props.label - The label text to display
 * @param {boolean} props.showLabel - Whether to show the label
 * @param {function} props.onChange - Change event handler
 * @param {string} props.id - HTML id attribute
 * @param {string} props.className - Additional CSS classes
 * @returns {TemplateResult} Lit HTML template
 */
export const ToggleSwitch = ({
  checked = false,
  disabled = false,
  label = '',
  showLabel = true,
  onChange,
  id,
  className = '',
  ...props
}) => {
  const classes = classMap({
    'ctt-toggle-switch': true,
    'ctt-toggle-switch--disabled': disabled,
    [className]: !!className,
  });

  const handleChange = (event) => {
    if (onChange && !disabled) {
      onChange({
        detail: {
          checked: event.target.checked,
          originalEvent: event
        }
      });
    }
  };

  return html`
    <div class=${classes} id=${ifDefined(id)} ...=${props}>
      <label 
        part="root" 
        class="ctt-toggle-switch__root"
        ?data-disabled=${disabled}
      >
        <input
          part="control"
          class="ctt-toggle-switch__control"
          type="checkbox"
          ?checked=${checked}
          ?disabled=${disabled}
          @change=${handleChange}
        />
        <span part="thumb" class="ctt-toggle-switch__thumb"></span>
        ${showLabel && label ? html`
          <span 
            part="label" 
            class="ctt-toggle-switch__label"
          >
            ${label}
          </span>
        ` : ''}
      </label>
    </div>
  `;
};
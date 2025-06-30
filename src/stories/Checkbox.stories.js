import { html } from 'lit';
import { Checkbox } from '../components/Checkbox/index.js';

export default {
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  render: (args) => Checkbox(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Checkbox component with label, error states, and accessibility features. Supports Default, Checked, Error, and Disabled states.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text displayed next to the checkbox',
    },
    name: {
      control: { type: 'text' },
      description: 'Name attribute for form grouping',
    },
    value: {
      control: { type: 'text' },
      description: 'Value of the checkbox',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled',
    },
    errorText: {
      control: { type: 'text' },
      description: 'Error message to display below the checkbox',
    },
    id: {
      control: { type: 'text' },
      description: 'HTML id attribute',
    },
  },
};

// Default state - unchecked checkbox
export const Default = {
  args: {
    label: 'Accept terms and conditions',
    name: 'terms',
    value: 'accepted',
  },
};

// Checked state - selected checkbox
export const Checked = {
  args: {
    label: 'Subscribe to newsletter',
    name: 'newsletter',
    value: 'subscribed',
    checked: true,
  },
};

// Error state - shows error message and styling
export const Error = {
  args: {
    label: 'Required checkbox',
    name: 'required',
    value: 'required',
    errorText: 'This field is required',
  },
};

// Disabled state - checkbox is not interactive
export const Disabled = {
  args: {
    label: 'Disabled option',
    name: 'disabled',
    value: 'disabled',
    disabled: true,
  },
};

// Disabled and checked
export const DisabledChecked = {
  args: {
    label: 'Disabled and selected',
    name: 'disabled-checked',
    value: 'disabled-checked',
    checked: true,
    disabled: true,
  },
};

// All states comparison
export const AllStates = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; max-width: 1000px;">
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">✅ Default</h3>
        ${Checkbox({ 
          label: 'Default Option', 
          name: 'states',
          value: 'default'
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">☑️ Checked</h3>
        ${Checkbox({ 
          label: 'Selected Option', 
          name: 'states',
          value: 'checked',
          checked: true
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">❌ Error</h3>
        ${Checkbox({ 
          label: 'Error Option', 
          name: 'states',
          value: 'error',
          errorText: 'This option has an error'
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">🚫 Disabled</h3>
        ${Checkbox({ 
          label: 'Disabled Option', 
          name: 'states',
          value: 'disabled',
          disabled: true
        })}
      </div>
    </div>
  `,
};

// Checkbox group - vertical
export const CheckboxGroup = {
  render: () => html`
    <div style="max-width: 400px;">
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; color: #333;">Select your preferences</h3>
      <div class="ctt-checkbox-group">
        ${Checkbox({ 
          label: 'Email notifications', 
          name: 'notifications',
          value: 'email',
          id: 'notify-email'
        })}
        ${Checkbox({ 
          label: 'SMS notifications', 
          name: 'notifications',
          value: 'sms',
          checked: true,
          id: 'notify-sms'
        })}
        ${Checkbox({ 
          label: 'Push notifications', 
          name: 'notifications',
          value: 'push',
          id: 'notify-push'
        })}
        ${Checkbox({ 
          label: 'Weekly newsletter', 
          name: 'notifications',
          value: 'newsletter',
          id: 'notify-newsletter'
        })}
      </div>
    </div>
  `,
};

// Checkbox group - horizontal
export const HorizontalGroup = {
  render: () => html`
    <div style="max-width: 600px;">
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; color: #333;">Select features</h3>
      <div class="ctt-checkbox-group ctt-checkbox-group--horizontal">
        ${Checkbox({ 
          label: 'Analytics', 
          name: 'features',
          value: 'analytics',
          id: 'feature-analytics'
        })}
        ${Checkbox({ 
          label: 'Reports', 
          name: 'features',
          value: 'reports',
          checked: true,
          id: 'feature-reports'
        })}
        ${Checkbox({ 
          label: 'API Access', 
          name: 'features',
          value: 'api',
          id: 'feature-api'
        })}
        ${Checkbox({ 
          label: 'Priority Support', 
          name: 'features',
          value: 'support',
          id: 'feature-support'
        })}
      </div>
    </div>
  `,
};

// Form example with validation
export const FormExample = {
  render: () => html`
    <form style="max-width: 500px; display: flex; flex-direction: column; gap: 2rem;">
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; color: #333;">Account Settings</h3>
      
      <fieldset style="border: none; padding: 0; margin: 0;">
        <legend style="font-weight: bold; margin-bottom: 1rem; color: #333;">Privacy Settings</legend>
        <div class="ctt-checkbox-group">
          ${Checkbox({ 
            label: 'Make my profile public', 
            name: 'privacy',
            value: 'public-profile',
            id: 'privacy-public'
          })}
          ${Checkbox({ 
            label: 'Allow search engines to index my profile', 
            name: 'privacy',
            value: 'search-indexing',
            id: 'privacy-search'
          })}
          ${Checkbox({ 
            label: 'Show my email address to other users', 
            name: 'privacy',
            value: 'show-email',
            id: 'privacy-email'
          })}
        </div>
      </fieldset>

      <fieldset style="border: none; padding: 0; margin: 0;">
        <legend style="font-weight: bold; margin-bottom: 1rem; color: #333;">Communication</legend>
        <div class="ctt-checkbox-group">
          ${Checkbox({ 
            label: 'I agree to receive marketing emails', 
            name: 'communication',
            value: 'marketing',
            checked: true,
            id: 'comm-marketing'
          })}
          ${Checkbox({ 
            label: 'I agree to the terms and conditions', 
            name: 'communication',
            value: 'terms',
            errorText: 'You must accept the terms and conditions',
            id: 'comm-terms'
          })}
        </div>
      </fieldset>

      <div style="margin-top: 1rem;">
        <button type="submit" style="background: var(--ctt-core-color-primary-main, #DF0024); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: var(--ctt-base-border-radius-xs, 4px); cursor: pointer; font-size: 1rem;">
          Save Settings
        </button>
      </div>
    </form>
  `,
};

// Interactive example with event handling
export const Interactive = {
  render: () => html`
    <div style="max-width: 500px;">
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; color: #333;">Interactive Example</h3>
      <p>Check/uncheck the options below to see change events in the console.</p>
      
      <div class="ctt-checkbox-group">
        ${Checkbox({ 
          label: 'Option A', 
          name: 'interactive',
          value: 'option-a',
          id: 'interactive-a',
          onChange: (event) => {
            console.log('Checkbox changed:', event.detail);
            const display = document.getElementById('checkbox-event-display');
            if (display) {
              const action = event.detail.checked ? 'checked' : 'unchecked';
              display.textContent = `"${event.detail.value}" was ${action} at ${new Date().toLocaleTimeString()}`;
            }
          }
        })}
        ${Checkbox({ 
          label: 'Option B', 
          name: 'interactive',
          value: 'option-b',
          id: 'interactive-b',
          onChange: (event) => {
            console.log('Checkbox changed:', event.detail);
            const display = document.getElementById('checkbox-event-display');
            if (display) {
              const action = event.detail.checked ? 'checked' : 'unchecked';
              display.textContent = `"${event.detail.value}" was ${action} at ${new Date().toLocaleTimeString()}`;
            }
          }
        })}
        ${Checkbox({ 
          label: 'Option C', 
          name: 'interactive',
          value: 'option-c',
          id: 'interactive-c',
          onChange: (event) => {
            console.log('Checkbox changed:', event.detail);
            const display = document.getElementById('checkbox-event-display');
            if (display) {
              const action = event.detail.checked ? 'checked' : 'unchecked';
              display.textContent = `"${event.detail.value}" was ${action} at ${new Date().toLocaleTimeString()}`;
            }
          }
        })}
      </div>
      
      <div style="margin-top: 1.5rem; padding: 1rem; background: #f5f5f5; border-radius: 4px; font-family: monospace; font-size: 0.875rem;">
        <strong>Event Log:</strong><br>
        <span id="checkbox-event-display">No changes yet - check/uncheck an option above</span>
      </div>
    </div>
  `,
};
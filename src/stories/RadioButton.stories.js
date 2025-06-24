import { html } from 'lit';
import { RadioButton } from '../components/RadioButton/index.js';

export default {
  title: 'Components/RadioButton',
  tags: ['autodocs'],
  render: (args) => RadioButton(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'RadioButton component with label, error states, and accessibility features. Supports Default, Checked, Error, and Disabled states.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text displayed next to the radio button',
    },
    name: {
      control: { type: 'text' },
      description: 'Name attribute for form grouping',
    },
    value: {
      control: { type: 'text' },
      description: 'Value of the radio button',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is checked',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is disabled',
    },
    errorText: {
      control: { type: 'text' },
      description: 'Error message to display below the radio button',
    },
    id: {
      control: { type: 'text' },
      description: 'HTML id attribute',
    },
  },
};

// Default state - unchecked radio button
export const Default = {
  args: {
    label: 'Option 1',
    name: 'example',
    value: 'option1',
  },
};

// Checked state - selected radio button
export const Checked = {
  args: {
    label: 'Selected Option',
    name: 'example',
    value: 'selected',
    checked: true,
  },
};

// Error state - shows error message and styling
export const Error = {
  args: {
    label: 'Required Option',
    name: 'required',
    value: 'required',
    errorText: 'Please select an option',
  },
};

// Disabled state - radio button is not interactive
export const Disabled = {
  args: {
    label: 'Disabled Option',
    name: 'disabled',
    value: 'disabled',
    disabled: true,
  },
};

// Disabled and checked
export const DisabledChecked = {
  args: {
    label: 'Disabled Selected',
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
        ${RadioButton({ 
          label: 'Default Option', 
          name: 'states',
          value: 'default'
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">🔘 Checked</h3>
        ${RadioButton({ 
          label: 'Selected Option', 
          name: 'states',
          value: 'checked',
          checked: true
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">❌ Error</h3>
        ${RadioButton({ 
          label: 'Error Option', 
          name: 'states',
          value: 'error',
          errorText: 'This option has an error'
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">🚫 Disabled</h3>
        ${RadioButton({ 
          label: 'Disabled Option', 
          name: 'states',
          value: 'disabled',
          disabled: true
        })}
      </div>
    </div>
  `,
};

// Radio button group - vertical
export const RadioGroup = {
  render: () => html`
    <div style="max-width: 400px;">
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; color: #333;">Choose your plan</h3>
      <div class="ctt-radio-group">
        ${RadioButton({ 
          label: 'Basic Plan - $9/month', 
          name: 'plan',
          value: 'basic',
          id: 'plan-basic'
        })}
        ${RadioButton({ 
          label: 'Pro Plan - $19/month', 
          name: 'plan',
          value: 'pro',
          checked: true,
          id: 'plan-pro'
        })}
        ${RadioButton({ 
          label: 'Enterprise Plan - $49/month', 
          name: 'plan',
          value: 'enterprise',
          id: 'plan-enterprise'
        })}
      </div>
    </div>
  `,
};

// Radio button group - horizontal
export const HorizontalGroup = {
  render: () => html`
    <div style="max-width: 600px;">
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; color: #333;">Select size</h3>
      <div class="ctt-radio-group ctt-radio-group--horizontal">
        ${RadioButton({ 
          label: 'Small', 
          name: 'size',
          value: 'small',
          id: 'size-small'
        })}
        ${RadioButton({ 
          label: 'Medium', 
          name: 'size',
          value: 'medium',
          checked: true,
          id: 'size-medium'
        })}
        ${RadioButton({ 
          label: 'Large', 
          name: 'size',
          value: 'large',
          id: 'size-large'
        })}
        ${RadioButton({ 
          label: 'Extra Large', 
          name: 'size',
          value: 'xl',
          id: 'size-xl'
        })}
      </div>
    </div>
  `,
};

// Form example with validation
export const FormExample = {
  render: () => html`
    <form style="max-width: 500px; display: flex; flex-direction: column; gap: 2rem;">
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; color: #333;">Survey Form</h3>
      
      <fieldset style="border: none; padding: 0; margin: 0;">
        <legend style="font-weight: bold; margin-bottom: 1rem; color: #333;">How satisfied are you with our service?</legend>
        <div class="ctt-radio-group">
          ${RadioButton({ 
            label: 'Very Satisfied', 
            name: 'satisfaction',
            value: 'very-satisfied',
            id: 'satisfaction-very'
          })}
          ${RadioButton({ 
            label: 'Satisfied', 
            name: 'satisfaction',
            value: 'satisfied',
            id: 'satisfaction-satisfied'
          })}
          ${RadioButton({ 
            label: 'Neutral', 
            name: 'satisfaction',
            value: 'neutral',
            id: 'satisfaction-neutral'
          })}
          ${RadioButton({ 
            label: 'Dissatisfied', 
            name: 'satisfaction',
            value: 'dissatisfied',
            id: 'satisfaction-dissatisfied'
          })}
          ${RadioButton({ 
            label: 'Very Dissatisfied', 
            name: 'satisfaction',
            value: 'very-dissatisfied',
            errorText: 'Please select your satisfaction level',
            id: 'satisfaction-very-dissatisfied'
          })}
        </div>
      </fieldset>

      <fieldset style="border: none; padding: 0; margin: 0;">
        <legend style="font-weight: bold; margin-bottom: 1rem; color: #333;">Would you recommend us?</legend>
        <div class="ctt-radio-group ctt-radio-group--horizontal">
          ${RadioButton({ 
            label: 'Yes', 
            name: 'recommend',
            value: 'yes',
            checked: true,
            id: 'recommend-yes'
          })}
          ${RadioButton({ 
            label: 'No', 
            name: 'recommend',
            value: 'no',
            id: 'recommend-no'
          })}
          ${RadioButton({ 
            label: 'Maybe', 
            name: 'recommend',
            value: 'maybe',
            id: 'recommend-maybe'
          })}
        </div>
      </fieldset>

      <div style="margin-top: 1rem;">
        <button type="submit" style="background: var(--ctt-core-color-primary-main, #DF0024); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: var(--ctt-base-border-radius-xs, 4px); cursor: pointer; font-size: 1rem;">
          Submit Survey
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
      <p>Select an option below to see change events in the console.</p>
      
      <div class="ctt-radio-group">
        ${RadioButton({ 
          label: 'Option A', 
          name: 'interactive',
          value: 'option-a',
          id: 'interactive-a',
          onChange: (event) => {
            console.log('Radio button changed:', event.detail);
            const display = document.getElementById('event-display');
            if (display) {
              display.textContent = `Selected: "${event.detail.value}" at ${new Date().toLocaleTimeString()}`;
            }
          }
        })}
        ${RadioButton({ 
          label: 'Option B', 
          name: 'interactive',
          value: 'option-b',
          id: 'interactive-b',
          onChange: (event) => {
            console.log('Radio button changed:', event.detail);
            const display = document.getElementById('event-display');
            if (display) {
              display.textContent = `Selected: "${event.detail.value}" at ${new Date().toLocaleTimeString()}`;
            }
          }
        })}
        ${RadioButton({ 
          label: 'Option C', 
          name: 'interactive',
          value: 'option-c',
          id: 'interactive-c',
          onChange: (event) => {
            console.log('Radio button changed:', event.detail);
            const display = document.getElementById('event-display');
            if (display) {
              display.textContent = `Selected: "${event.detail.value}" at ${new Date().toLocaleTimeString()}`;
            }
          }
        })}
      </div>
      
      <div style="margin-top: 1.5rem; padding: 1rem; background: #f5f5f5; border-radius: 4px; font-family: monospace; font-size: 0.875rem;">
        <strong>Event Log:</strong><br>
        <span id="event-display">No selection yet - choose an option above</span>
      </div>
    </div>
  `,
};
import { html } from 'lit';
import { TextareaField } from '../components/TextareaField/index.js';

export default {
  title: 'Components/TextareaField',
  tags: ['autodocs'],
  render: (args) => TextareaField(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'TextareaField component with label, error states, and accessibility features. Supports Default, Focused, Error, and Disabled states.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text displayed above the textarea',
    },
    value: {
      control: { type: 'text' },
      description: 'Current value of the textarea',
    },
    name: {
      control: { type: 'text' },
      description: 'Name attribute for the textarea',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    errorText: {
      control: { type: 'text' },
      description: 'Error message to display below the textarea',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is disabled',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is required',
    },
    rows: {
      control: { type: 'number' },
      description: 'Number of visible text lines for the textarea',
    },
    cols: {
      control: { type: 'number' },
      description: 'Visible width of the textarea in average character widths',
    },
    resize: {
      control: { type: 'select' },
      options: ['none', 'both', 'horizontal', 'vertical'],
      description: 'How the textarea can be resized',
    },
  },
};

// Default state - empty textarea
export const Default = {
  args: {
    label: 'Description',
    name: 'description',
    placeholder: 'Tell us about yourself...',
    rows: 4,
  },
};

// Focused state - will show focus styles when clicked
export const Focused = {
  args: {
    label: 'Comments',
    name: 'comments',
    placeholder: 'Enter your comments here...',
    value: 'This is some example text that shows how the textarea looks with content.',
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Click on the textarea to see the focused state with purple border and box-shadow.',
      },
    },
  },
};

// Error state - shows error message and styling
export const Error = {
  args: {
    label: 'Required Message',
    name: 'message',
    placeholder: 'Please enter your message...',
    value: 'Too short',
    errorText: 'Message must be at least 10 characters long',
    rows: 4,
  },
};

// Disabled state - textarea is not interactive
export const Disabled = {
  args: {
    label: 'Feedback',
    name: 'feedback',
    placeholder: 'Enter your feedback...',
    value: 'This textarea is disabled and cannot be edited.',
    disabled: true,
    rows: 4,
  },
};

// Required field with asterisk
export const Required = {
  args: {
    label: 'Message',
    name: 'message',
    placeholder: 'Enter your message...',
    required: true,
    rows: 4,
  },
};

// Different row sizes comparison
export const DifferentSizes = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 500px;">
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">Small (2 rows)</h3>
        ${TextareaField({ 
          label: 'Short Comment', 
          name: 'small',
          placeholder: 'Brief comment...',
          rows: 2
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">Medium (4 rows - Default)</h3>
        ${TextareaField({ 
          label: 'Regular Message', 
          name: 'medium',
          placeholder: 'Your message here...',
          rows: 4
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">Large (8 rows)</h3>
        ${TextareaField({ 
          label: 'Detailed Description', 
          name: 'large',
          placeholder: 'Please provide a detailed description...',
          rows: 8
        })}
      </div>
    </div>
  `,
};

// All states comparison
export const AllStates = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px;">
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">✅ Default</h3>
        ${TextareaField({ 
          label: 'Description', 
          name: 'default',
          placeholder: 'Enter description...',
          rows: 4
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">🔍 Focused (click to see)</h3>
        ${TextareaField({ 
          label: 'Comments', 
          name: 'focused',
          placeholder: 'Click to focus',
          value: 'This textarea has some content and will show focus styles when clicked.',
          rows: 4
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">❌ Error</h3>
        ${TextareaField({ 
          label: 'Message', 
          name: 'error',
          placeholder: 'Enter message...',
          value: 'Short',
          errorText: 'Message must be at least 10 characters long',
          rows: 4
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">🚫 Disabled</h3>
        ${TextareaField({ 
          label: 'Feedback', 
          name: 'disabled',
          placeholder: 'Enter feedback...',
          value: 'This field is disabled and cannot be edited.',
          disabled: true,
          rows: 4
        })}
      </div>
    </div>
  `,
};

// Different resize options
export const ResizeOptions = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 500px;">
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">Vertical Resize (Default)</h3>
        ${TextareaField({ 
          label: 'Vertical Resize', 
          name: 'vertical',
          placeholder: 'Can be resized vertically only...',
          resize: 'vertical',
          rows: 3
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">Both Directions</h3>
        ${TextareaField({ 
          label: 'Both Resize', 
          name: 'both',
          placeholder: 'Can be resized in both directions...',
          resize: 'both',
          rows: 3
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">No Resize</h3>
        ${TextareaField({ 
          label: 'Fixed Size', 
          name: 'none',
          placeholder: 'Cannot be resized...',
          resize: 'none',
          rows: 3
        })}
      </div>
    </div>
  `,
};

// Form example with different textarea fields
export const FormExample = {
  render: () => html`
    <form style="max-width: 500px; display: flex; flex-direction: column; gap: 1.5rem;">
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; color: #333;">Contact Form</h3>
      
      ${TextareaField({ 
        label: 'Message', 
        name: 'message',
        placeholder: 'What would you like to tell us?',
        required: true,
        rows: 4
      })}
      
      ${TextareaField({ 
        label: 'Additional Comments', 
        name: 'comments',
        placeholder: 'Any other feedback or suggestions...',
        rows: 3
      })}
      
      ${TextareaField({ 
        label: 'Technical Details', 
        name: 'technical',
        placeholder: 'Please describe the technical issue...',
        errorText: 'Please provide more details about the issue',
        value: 'It broke',
        rows: 5
      })}
      
      <div style="margin-top: 1rem;">
        <button type="submit" style="background: var(--ctt-core-color-primary-main, #DF0024); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: var(--ctt-base-border-radius-xs, 4px); cursor: pointer; font-size: 1rem;">
          Submit Form
        </button>
      </div>
    </form>
  `,
};
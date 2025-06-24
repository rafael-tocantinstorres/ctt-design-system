import { html } from 'lit';
import { InputField } from '../components/InputField/index.js';
import { Button } from '../components/Button/index.js';

export default {
  title: 'Components/InputField',
  tags: ['autodocs'],
  render: (args) => InputField(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'InputField component with label, error states, and accessibility features. Supports Default, Focused, Error, and Disabled states.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text displayed above the input',
    },
    value: {
      control: { type: 'text' },
      description: 'Current value of the input',
    },
    name: {
      control: { type: 'text' },
      description: 'Name attribute for the input',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'tel', 'url', 'search'],
      description: 'Input type',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display below the input',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the input is required',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the input field',
    },
  },
};

// Default state - empty or valid input
export const Default = {
  args: {
    label: 'Email Address',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    size: 'medium',
  },
};

// Focused state - will show focus styles when clicked
export const Focused = {
  args: {
    label: 'Email Address',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    value: 'user@example.com',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'Click on the input to see the focused state with purple border and box-shadow.',
      },
    },
  },
};

// Error state - shows error message and styling
export const Error = {
  args: {
    label: 'Email Address',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
    size: 'medium',
  },
};

// Disabled state - input is not interactive
export const Disabled = {
  args: {
    label: 'Email Address',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    value: 'user@example.com',
    disabled: true,
    size: 'medium',
  },
};

// Required field with asterisk
export const Required = {
  args: {
    label: 'Email Address',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    required: true,
    size: 'medium',
  },
};

// All sizes comparison
export const AllSizes = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">Small</h3>
        ${InputField({ 
          label: 'Small Input', 
          name: 'small',
          placeholder: 'Small size input',
          size: 'small' 
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">Medium (Default)</h3>
        ${InputField({ 
          label: 'Medium Input', 
          name: 'medium',
          placeholder: 'Medium size input',
          size: 'medium' 
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">Large</h3>
        ${InputField({ 
          label: 'Large Input', 
          name: 'large',
          placeholder: 'Large size input',
          size: 'large' 
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
        ${InputField({ 
          label: 'Email Address', 
          name: 'default',
          type: 'email',
          placeholder: 'Enter your email',
          size: 'medium' 
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">🔍 Focused (click to see)</h3>
        ${InputField({ 
          label: 'Email Address', 
          name: 'focused',
          type: 'email',
          placeholder: 'Click to focus',
          value: 'user@example.com',
          size: 'medium' 
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">❌ Error</h3>
        ${InputField({ 
          label: 'Email Address', 
          name: 'error',
          type: 'email',
          placeholder: 'Enter your email',
          value: 'invalid-email',
          error: 'Please enter a valid email address',
          size: 'medium' 
        })}
      </div>
      <div>
        <h3 style="margin: 0 0 1rem 0; font-size: 1rem; color: #333;">🚫 Disabled</h3>
        ${InputField({ 
          label: 'Email Address', 
          name: 'disabled',
          type: 'email',
          placeholder: 'Enter your email',
          value: 'user@example.com',
          disabled: true,
          size: 'medium' 
        })}
      </div>
    </div>
  `,
};

// Different input types
export const InputTypes = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      ${InputField({ 
        label: 'Text Input', 
        name: 'text',
        type: 'text',
        placeholder: 'Enter text',
        size: 'medium' 
      })}
      ${InputField({ 
        label: 'Email Input', 
        name: 'email',
        type: 'email',
        placeholder: 'Enter email',
        size: 'medium' 
      })}
      ${InputField({ 
        label: 'Password Input', 
        name: 'password',
        type: 'password',
        placeholder: 'Enter password',
        size: 'medium' 
      })}
      ${InputField({ 
        label: 'Phone Number', 
        name: 'tel',
        type: 'tel',
        placeholder: 'Enter phone number',
        size: 'medium' 
      })}
      ${InputField({ 
        label: 'Website URL', 
        name: 'url',
        type: 'url',
        placeholder: 'https://example.com',
        size: 'medium' 
      })}
    </div>
  `,
};

// Form example with validation
export const FormExample = {
  render: () => html`
    <form style="max-width: 400px; display: flex; flex-direction: column; gap: 1.5rem;">
      <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem; color: #333;">Contact Form</h3>
      
      ${InputField({ 
        label: 'Full Name', 
        name: 'fullName',
        type: 'text',
        placeholder: 'Enter your full name',
        required: true,
        size: 'medium' 
      })}
      
      ${InputField({ 
        label: 'Email Address', 
        name: 'email',
        type: 'email',
        placeholder: 'Enter your email',
        required: true,
        size: 'medium' 
      })}
      
      ${InputField({ 
        label: 'Phone Number', 
        name: 'phone',
        type: 'tel',
        placeholder: 'Enter your phone number',
        size: 'medium' 
      })}
      
      ${InputField({ 
        label: 'Company Website', 
        name: 'website',
        type: 'url',
        placeholder: 'https://yourcompany.com',
        error: 'Please enter a valid URL starting with https://',
        value: 'invalid-url',
        size: 'medium' 
      })}
      
      <div style="margin-top: 1rem;">
        ${Button({ 
          label: 'Submit Form',
          borderRadius: 'extraSmall',
          variant: 'primary',
          size: 'medium',
          onclick: (e) => {
            e.preventDefault();
            console.log('Form submitted');
          }
        })}
      </div>
    </form>
  `,
};
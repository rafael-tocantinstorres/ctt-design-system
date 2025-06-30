import { html } from 'lit';
import { ToggleSwitch } from '../components/ToggleSwitch/index.js';

export default {
  title: 'Components/ToggleSwitch',
  tags: ['autodocs'],
  render: (args) => ToggleSwitch(args),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable toggle switch component with support for labels, disabled states, and custom styling via design tokens.',
      },
    },
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the toggle is checked',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the toggle is disabled',
    },
    label: {
      control: { type: 'text' },
      description: 'The label text to display',
    },
    showLabel: {
      control: { type: 'boolean' },
      description: 'Whether to show the label',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when the toggle state changes',
    },
  },
};

export const Default = {
  args: {
    checked: false,
    disabled: false,
    label: 'Toggle Switch',
    showLabel: true,
  },
};

export const Checked = {
  args: {
    checked: true,
    disabled: false,
    label: 'Enabled Setting',
    showLabel: true,
  },
};

export const Disabled = {
  args: {
    checked: false,
    disabled: true,
    label: 'Disabled Setting',
    showLabel: true,
  },
};

export const DisabledChecked = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled Checked',
    showLabel: true,
  },
};

export const WithoutLabel = {
  args: {
    checked: false,
    disabled: false,
    label: 'Hidden Label',
    showLabel: false,
  },
};

export const AllStates = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <span style="font-size: 0.875rem; color: #666; font-weight: 600;">Default States</span>
        <div style="display: flex; gap: 1rem; align-items: center;">
          ${ToggleSwitch({ checked: false, label: 'Unchecked', showLabel: true })}
          ${ToggleSwitch({ checked: true, label: 'Checked', showLabel: true })}
        </div>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <span style="font-size: 0.875rem; color: #666; font-weight: 600;">Disabled States</span>
        <div style="display: flex; gap: 1rem; align-items: center;">
          ${ToggleSwitch({ checked: false, disabled: true, label: 'Disabled Unchecked', showLabel: true })}
          ${ToggleSwitch({ checked: true, disabled: true, label: 'Disabled Checked', showLabel: true })}
        </div>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <span style="font-size: 0.875rem; color: #666; font-weight: 600;">Without Labels</span>
        <div style="display: flex; gap: 1rem; align-items: center;">
          ${ToggleSwitch({ checked: false, label: '', showLabel: false })}
          ${ToggleSwitch({ checked: true, label: '', showLabel: false })}
        </div>
      </div>
    </div>
  `,
};

export const Interactive = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <p style="margin: 0; color: #666;">Try interacting with these toggles:</p>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        ${ToggleSwitch({ 
          checked: false, 
          label: 'Enable notifications', 
          showLabel: true,
          onChange: (event) => console.log('Notifications:', event.detail.checked)
        })}
        ${ToggleSwitch({ 
          checked: true, 
          label: 'Dark mode', 
          showLabel: true,
          onChange: (event) => console.log('Dark mode:', event.detail.checked)
        })}
        ${ToggleSwitch({ 
          checked: false, 
          label: 'Auto-save', 
          showLabel: true,
          onChange: (event) => console.log('Auto-save:', event.detail.checked)
        })}
      </div>
    </div>
  `,
};
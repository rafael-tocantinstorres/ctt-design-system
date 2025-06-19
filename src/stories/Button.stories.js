import { fn } from 'storybook/test';
import { render } from 'lit';

import { Button } from '../components/Button/index.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args) => Button(args),
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Button visual style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    borderRadius: {
      control: { type: 'select' },
      options: ['pill', 'small', 'extraSmall'],
      description: 'Border radius style',
    },
    label: {
      control: 'text',
      description: 'Button text content',
    },
    iconLeft: {
      control: 'boolean',
      description: 'Show icon on the left side',
    },
    iconLeftElement: {
      control: 'text',
      description: 'HTML string for left icon (SVG)',
      if: { arg: 'iconLeft', eq: true },
    },
    iconRight: {
      control: 'boolean',
      description: 'Show icon on the right side',
    },
    iconRightElement: {
      control: 'text',
      description: 'HTML string for right icon (SVG)',
      if: { arg: 'iconRight', eq: true },
    },
    backgroundColor: { 
      control: 'color',
      description: 'Custom background color override',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers (required for icon-only buttons)',
    },
  },
  args: { 
    onclick: fn(),
    variant: 'primary',
    size: 'medium',
    label: 'Button',
    borderRadius: 'pill',
    iconLeft: false,
    iconRight: false,
    disabled: false,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

// Basic Variants
export const Primary = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

export const Tertiary = {
  args: {
    variant: 'tertiary',
    label: 'Tertiary Button',
  },
};

// Sizes
export const Small = {
  args: {
    variant: 'primary',
    size: 'small',
    label: 'Small Button',
  },
};

export const Medium = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Medium Button',
  },
};

export const Large = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Large Button',
  },
};

// Border Radius Options
export const PillRadius = {
  name: 'Pill Border Radius',
  args: {
    variant: 'primary',
    borderRadius: 'pill',
    label: 'Pill Button',
  },
};

export const SmallRadius = {
  name: 'Small Border Radius',
  args: {
    variant: 'primary',
    borderRadius: 'small',
    label: 'Small Radius',
  },
};

export const ExtraSmallRadius = {
  name: 'Extra Small Border Radius',
  args: {
    variant: 'primary',
    borderRadius: 'extraSmall',
    label: 'Extra Small',
  },
};

// Icons
export const WithLeftIcon = {
  name: 'With Left Icon',
  args: {
    variant: 'primary',
    label: 'Add Item',
    iconLeft: true,
    iconLeftElement: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>',
  },
};

export const WithRightIcon = {
  name: 'With Right Icon',
  args: {
    variant: 'secondary',
    label: 'Download',
    iconRight: true,
    iconRightElement: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',
  },
};

export const WithBothIcons = {
  name: 'With Both Icons',
  args: {
    variant: 'primary',
    label: 'Transfer',
    iconLeft: true,
    iconLeftElement: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 14l5-5 5 5z"/></svg>',
    iconRight: true,
    iconRightElement: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>',
  },
};

export const IconOnly = {
  name: 'Icon Only',
  args: {
    variant: 'primary',
    iconLeft: true,
    iconLeftElement: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
    label: '', // No label for icon-only button
    ariaLabel: 'Menu', // Accessible label for screen readers
  },
};

// Combinations
export const SecondaryWithIcon = {
  name: 'Secondary with Icon',
  args: {
    variant: 'secondary',
    size: 'large',
    label: 'Settings',
    iconLeft: true,
    iconLeftElement: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>',
    borderRadius: 'small',
  },
};

export const TertiarySmallWithIcon = {
  name: 'Tertiary Small with Icon',
  args: {
    variant: 'tertiary',
    size: 'small',
    label: 'Edit',
    iconRight: true,
    iconRightElement: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>',
    borderRadius: 'extraSmall',
  },
};

// Disabled States
export const DisabledPrimary = {
  name: 'Disabled Primary',
  args: {
    variant: 'primary',
    label: 'Disabled Primary',
    disabled: true,
  },
};

export const DisabledSecondary = {
  name: 'Disabled Secondary',
  args: {
    variant: 'secondary',
    label: 'Disabled Secondary',
    disabled: true,
  },
};

export const DisabledTertiary = {
  name: 'Disabled Tertiary',
  args: {
    variant: 'tertiary',
    label: 'Disabled Tertiary',
    disabled: true,
  },
};

export const DisabledWithIcon = {
  name: 'Disabled with Icon',
  args: {
    variant: 'primary',
    label: 'Disabled with Icon',
    iconLeft: true,
    iconLeftElement: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>',
    disabled: true,
  },
};

// Showcase all combinations
export const AllVariants = {
  name: 'All Variants Showcase',
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'padding: 2rem; font-family: "ActoCTT", sans-serif;';
    
    // Title
    const title = document.createElement('h2');
    title.textContent = 'Button Variants & Sizes';
    title.style.cssText = 'margin-bottom: 2rem; color: #333;';
    container.appendChild(title);
    
    // Variants section
    const variants = ['primary', 'secondary', 'tertiary'];
    const sizes = ['small', 'medium', 'large'];
    
    variants.forEach(variant => {
      const section = document.createElement('div');
      section.style.cssText = 'margin-bottom: 2rem;';
      
      const heading = document.createElement('h3');
      heading.textContent = `${variant.charAt(0).toUpperCase() + variant.slice(1)} Buttons`;
      heading.style.cssText = 'margin-bottom: 1rem; color: #666; text-transform: capitalize;';
      section.appendChild(heading);
      
      const buttonRow = document.createElement('div');
      buttonRow.style.cssText = 'display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;';
      
      sizes.forEach(size => {
        const buttonContainer = document.createElement('span');
        render(Button({
          variant,
          size,
          label: `${variant.charAt(0).toUpperCase() + variant.slice(1)} ${size.charAt(0).toUpperCase() + size.slice(1)}`,
          onclick: fn()
        }), buttonContainer);
        buttonRow.appendChild(buttonContainer);
      });
      
      section.appendChild(buttonRow);
      container.appendChild(section);
    });
    
    // Border Radius section
    const radiusSection = document.createElement('div');
    radiusSection.style.cssText = 'margin-bottom: 2rem;';
    
    const radiusHeading = document.createElement('h3');
    radiusHeading.textContent = 'Border Radius Options';
    radiusHeading.style.cssText = 'margin-bottom: 1rem; color: #666;';
    radiusSection.appendChild(radiusHeading);
    
    const radiusRow = document.createElement('div');
    radiusRow.style.cssText = 'display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;';
    
    const radiusOptions = [
      { borderRadius: 'pill', label: 'Pill' },
      { borderRadius: 'small', label: 'Small Radius' },
      { borderRadius: 'extraSmall', label: 'Extra Small' }
    ];
    
    radiusOptions.forEach(option => {
      const buttonContainer = document.createElement('span');
      render(Button({
        variant: 'primary',
        borderRadius: option.borderRadius,
        label: option.label,
        onclick: fn()
      }), buttonContainer);
      radiusRow.appendChild(buttonContainer);
    });
    
    radiusSection.appendChild(radiusRow);
    container.appendChild(radiusSection);
    
    // Icons section
    const iconsSection = document.createElement('div');
    iconsSection.style.cssText = 'margin-bottom: 2rem;';
    
    const iconsHeading = document.createElement('h3');
    iconsHeading.textContent = 'Buttons with Icons';
    iconsHeading.style.cssText = 'margin-bottom: 1rem; color: #666;';
    iconsSection.appendChild(iconsHeading);
    
    const iconsRow = document.createElement('div');
    iconsRow.style.cssText = 'display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;';
    
    const iconButtons = [
      {
        variant: 'primary',
        label: 'Add',
        iconLeft: true,
        iconLeftElement: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>'
      },
      {
        variant: 'secondary',
        label: 'Download',
        iconRight: true,
        iconRightElement: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>'
      },
      {
        variant: 'tertiary',
        label: '',
        iconLeft: true,
        iconLeftElement: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
        ariaLabel: 'Menu'
      }
    ];
    
    iconButtons.forEach(config => {
      const buttonContainer = document.createElement('span');
      render(Button({
        ...config,
        onclick: fn()
      }), buttonContainer);
      iconsRow.appendChild(buttonContainer);
    });
    
    iconsSection.appendChild(iconsRow);
    container.appendChild(iconsSection);
    
    // Disabled section
    const disabledSection = document.createElement('div');
    disabledSection.style.cssText = 'margin-bottom: 2rem;';
    
    const disabledHeading = document.createElement('h3');
    disabledHeading.textContent = 'Disabled States';
    disabledHeading.style.cssText = 'margin-bottom: 1rem; color: #666;';
    disabledSection.appendChild(disabledHeading);
    
    const disabledRow = document.createElement('div');
    disabledRow.style.cssText = 'display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;';
    
    const disabledButtons = [
      { variant: 'primary', label: 'Disabled Primary' },
      { variant: 'secondary', label: 'Disabled Secondary' },
      { variant: 'tertiary', label: 'Disabled Tertiary' }
    ];
    
    disabledButtons.forEach(config => {
      const buttonContainer = document.createElement('span');
      render(Button({
        ...config,
        disabled: true,
        onclick: fn()
      }), buttonContainer);
      disabledRow.appendChild(buttonContainer);
    });
    
    disabledSection.appendChild(disabledRow);
    container.appendChild(disabledSection);
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive showcase of all button variants, sizes, border radius options, and icon combinations.',
      },
    },
  },
};

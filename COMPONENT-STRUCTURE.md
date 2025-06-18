# CTT Design System - Component Structure

## Overview
This document describes the new organized component structure implemented in the CTT Design System. Each component now follows a consistent folder-based organization pattern that improves maintainability and developer experience.

## 📁 New Component Structure

### Folder Organization
```
src/components/
├── Button/
│   ├── index.js                    # Main component logic
│   └── ButtonElement.js            # Web component wrapper
├── IconButton/
│   ├── index.js                    # Main component logic
│   └── IconButtonElement.js        # Web component wrapper
├── Header/
│   ├── index.js                    # Main component logic
│   └── HeaderElement.js            # Web component wrapper
└── Page/
    ├── index.js                    # Main component logic
    └── PageElement.js              # Web component wrapper
```

### File Naming Convention
- **`index.js`** - Main component logic (functional component using Lit)
- **`{ComponentName}Element.js`** - Web component wrapper (LitElement class)

## 🔧 Component Files

### Main Component (`index.js`)
Contains the functional component logic using Lit's `html` template function:

```javascript
import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { tokens } from '../../tokens/index.js';

export const ComponentName = ({ variant = 'default', size = 'medium', ...props }) => {
  const styles = {
    fontFamily: tokens.typography.fontFamilies.primary,
    // Component-specific styles
  };

  return html`
    <div
      class=${['ctt-component-name', `ctt-component-name--${variant}`, `ctt-component-name--${size}`].join(' ')}
      style=${styleMap(styles)}
      ...=${props}
    >
      <!-- Component content -->
      <slot></slot>
    </div>
  `;
};
```

### Web Component Wrapper (`{ComponentName}Element.js`)
Contains the LitElement class for framework-agnostic usage:

```javascript
import { LitElement, html, css } from 'lit';
import { ComponentName } from './index.js';

class CttComponentName extends LitElement {
  static properties = {
    variant: { type: String },
    size: { type: String },
  };

  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor() {
    super();
    this.variant = 'default';
    this.size = 'medium';
  }

  render() {
    return ComponentName({
      variant: this.variant,
      size: this.size,
    });
  }

  _handleClick(event) {
    this.dispatchEvent(new CustomEvent('ctt-component-name-click', {
      bubbles: true,
      composed: true,
      detail: { originalEvent: event }
    }));
  }
}

if (!customElements.get('ctt-component-name')) {
  customElements.define('ctt-component-name', CttComponentName);
}

export { CttComponentName };
```

## 🎨 Styling Structure

### Component Styles Location
```
src/styles/components/
├── button.css
├── icon-button.css
└── component-name.css
```

### Style Organization
Each component has its own CSS file following this structure:

```css
/* ==========================================================================
   COMPONENT NAME
   ========================================================================== */

.ctt-component-name {
  /* Base styles using design tokens */
  display: block;
  font-family: var(--ctt-base-font-family-body);
  color: var(--ctt-base-color-text-primary);
}

/* Variants */
.ctt-component-name--default { /* Default variant */ }
.ctt-component-name--primary { /* Primary variant */ }
.ctt-component-name--secondary { /* Secondary variant */ }

/* Sizes */
.ctt-component-name--small { /* Small size */ }
.ctt-component-name--medium { /* Medium size */ }
.ctt-component-name--large { /* Large size */ }

/* States */
.ctt-component-name:hover { /* Hover state */ }
.ctt-component-name:focus { /* Focus state */ }
.ctt-component-name:disabled { /* Disabled state */ }

/* Responsive Design */
@media (max-width: 768px) {
  .ctt-component-name { /* Mobile adjustments */ }
}
```

## 📖 Storybook Integration

### Story Files Location
```
src/stories/
├── Button.stories.js
├── IconButton.stories.js
├── Header.stories.js
└── ComponentName.stories.js
```

### Story Structure
```javascript
import { ComponentName } from '../components/ComponentName/index.js';

export default {
  title: 'Components/ComponentName',
  tags: ['autodocs'],
  render: (args) => ComponentName(args),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Component description with design token usage.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Default = { args: { variant: 'default', size: 'medium' } };
export const Primary = { args: { variant: 'primary', size: 'medium' } };
export const AllSizes = { /* Size showcase */ };
export const AllVariants = { /* Variant showcase */ };
```

## 🚀 Component Generation

### Using the Generator Script
```bash
npm run generate:component MyComponent
```

### Generated Structure
```
src/components/MyComponent/
├── index.js                    # Main component
└── MyComponentElement.js       # Web component wrapper

src/styles/components/
└── my-component.css           # Component styles

src/stories/
└── MyComponent.stories.js     # Storybook documentation
```

### Automatic Updates
The generator automatically updates:
- `src/index.js` - Adds component and web component exports
- `src/styles/index.css` - Adds component CSS import

## 📦 Exports Structure

### Main Index File (`src/index.js`)
```javascript
// Export all components
export { Button } from './components/Button/index.js';
export { IconButton } from './components/IconButton/index.js';
export { Header } from './components/Header/index.js';
export { Page } from './components/Page/index.js';

// Export tokens for programmatic access
export { tokens } from './tokens/index.js';
export { buttonTokens, tokenStyles, typographyHelpers, getCSSVar } from './tokens/utils.js';

// Export web component classes
export { CttButton } from './components/Button/ButtonElement.js';
export { CttIconButton } from './components/IconButton/IconButtonElement.js';
export { CttHeader } from './components/Header/HeaderElement.js';
export { CttPage } from './components/Page/PageElement.js';
```

## 💡 Usage Examples

### JavaScript/TypeScript
```javascript
import { Button, CttButton } from '@ctt/design-system';

// Functional component
const myButton = Button({ variant: 'primary', size: 'large', label: 'Click me' });

// Web component class (for manual registration)
customElements.define('my-button', CttButton);
```

### HTML (Web Components)
```html
<!-- Auto-registered web components -->
<ctt-button variant="primary" size="large" label="Click me"></ctt-button>
<ctt-icon-button variant="secondary" size="medium"></ctt-icon-button>
<ctt-header user="John Doe"></ctt-header>
```

### React
```jsx
import { CttButton } from '@ctt/design-system';

function MyApp() {
  return (
    <CttButton 
      variant="primary" 
      size="large" 
      label="Click me"
      onCtt-click={(e) => console.log('Button clicked!', e.detail)}
    />
  );
}
```

### Vue
```vue
<template>
  <ctt-button 
    variant="primary" 
    size="large" 
    label="Click me"
    @ctt-click="handleClick"
  />
</template>
```

## 🎨 Design Token Integration

### CSS Custom Properties
```css
.my-component {
  background-color: var(--ctt-core-color-primary-main);
  color: var(--ctt-base-color-text-inverse);
  border-radius: var(--ctt-base-border-radius-s);
  padding: var(--ctt-core-dimension-100);
}
```

### JavaScript Token Access
```javascript
import { tokens, getCSSVar } from '@ctt/design-system';

const styles = {
  fontFamily: tokens.typography.fontFamilies.primary,
  color: getCSSVar('core-color-primary-main'),
};
```

### Utility Classes
```html
<div class="ctt-text-primary ctt-bg-neutral-100 ctt-p-4">
  Content with utility classes
</div>
```

## 🔄 Migration from Old Structure

### Before (Old Structure)
```
src/components/
├── Button.js
├── ButtonElement.js
├── IconButton.js
└── IconButtonElement.js
```

### After (New Structure)
```
src/components/
├── Button/
│   ├── index.js
│   └── ButtonElement.js
└── IconButton/
    ├── index.js
    └── IconButtonElement.js
```

### Import Changes
```javascript
// Old imports
import { Button } from './components/Button.js';
import { CttButton } from './components/ButtonElement.js';

// New imports
import { Button } from './components/Button/index.js';
import { CttButton } from './components/Button/ButtonElement.js';
```

## ✅ Benefits of New Structure

### Organization
- **Clear separation** - Each component has its own folder
- **Consistent naming** - Predictable file locations
- **Scalability** - Easy to add new components

### Developer Experience
- **Better discoverability** - Components are self-contained
- **Easier maintenance** - Related files are grouped together
- **Improved tooling** - Better IDE support and navigation

### Build System
- **Tree shaking** - Better dead code elimination
- **Selective imports** - Import only what you need
- **Cleaner builds** - Organized output structure

This new structure provides a solid foundation for the design system's continued growth while maintaining backward compatibility and improving the overall developer experience.
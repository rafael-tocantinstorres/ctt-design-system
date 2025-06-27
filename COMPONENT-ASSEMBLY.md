# CTT Design System - Component Assembly Guide

A comprehensive guide on how to create, assemble, and maintain components in the CTT Design System.

## 🚀 Quick Start

### Generate a New Component

```bash
npm run generate:component MyComponent
```

This single command creates everything you need for a new component:
- ✅ Component structure with folder organization
- ✅ TypeScript definitions
- ✅ Storybook documentation
- ✅ CSS with design tokens
- ✅ Web component wrapper
- ✅ All necessary exports and imports

## 📋 Component Assembly Checklist

### 1. Generate Component Scaffold
```bash
# Generate the component (PascalCase naming)
npm run generate:component CardComponent
```

**What gets created:**
- `src/components/CardComponent/index.js` - Main component logic
- `src/components/CardComponent/CardComponentElement.js` - Web component wrapper
- `src/styles/components/card-component.css` - Component styles
- `src/stories/CardComponent.stories.js` - Storybook documentation
- Updated `src/index.js` with exports
- Updated `src/styles/index.css` with style imports
- Updated `src/index.d.ts` with TypeScript definitions

### 2. Implement Component Logic

Edit `src/components/YourComponent/index.js`:

```javascript
import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { tokens } from '../../tokens/index.js';
import { typographyHelpers, getCSSVar } from '../../tokens/utils.js';

/** YourComponent component */
export const YourComponent = ({ 
  variant = 'default', 
  size = 'medium',
  title = '',
  content = '',
  disabled = false,
  onClick = null,
  ...props 
}) => {
  // Build styles using design tokens
  const styles = {
    fontFamily: tokens.typography.fontFamilies.primary,
    fontSize: tokens.typography.fontSize[size] || tokens.typography.fontSize.medium,
    backgroundColor: getCSSVar(`core-color-${variant}-main`),
    borderRadius: getCSSVar('base-border-radius-s'),
    padding: getCSSVar('core-dimension-100'),
  };

  // Handle click events
  const handleClick = (event) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    
    if (onClick) {
      onClick(event);
    }
  };

  return html`
    <div
      class=${[
        'ctt-your-component',
        `ctt-your-component--${variant}`,
        `ctt-your-component--${size}`,
        disabled ? 'ctt-your-component--disabled' : ''
      ].filter(Boolean).join(' ')}
      style=${styleMap(styles)}
      @click=${handleClick}
      ...=${props}
    >
      ${title ? html`<h3 class="ctt-your-component__title">${title}</h3>` : ''}
      <div class="ctt-your-component__content">
        ${content ? html`<p>${content}</p>` : ''}
        <slot></slot>
      </div>
    </div>
  `;
};
```

### 3. Style the Component

Edit `src/styles/components/your-component.css`:

```css
/**
 * YourComponent Component Styles
 * 
 * Uses design tokens for consistency across the design system.
 */

/* ==========================================================================
   YOUR COMPONENT
   ========================================================================== */

.ctt-your-component {
  /* Base styles using design tokens */
  display: block;
  font-family: var(--ctt-base-font-family-body);
  color: var(--ctt-base-color-text-primary);
  border: 1px solid var(--ctt-base-color-border-primary);
  border-radius: var(--ctt-base-border-radius-s);
  cursor: pointer;
  transition: all 0.2s ease;
  
  /* Layout */
  overflow: hidden;
  position: relative;
}

/* Component parts */
.ctt-your-component__title {
  margin: 0 0 var(--ctt-core-dimension-50) 0;
  font-size: var(--ctt-base-font-size-heading-s);
  font-weight: var(--ctt-base-font-weight-semibold);
  color: var(--ctt-base-color-text-primary);
  line-height: var(--ctt-base-line-height-tight);
}

.ctt-your-component__content {
  font-size: var(--ctt-base-font-size-body-m);
  line-height: var(--ctt-base-line-height-base);
}

/* Variants */
.ctt-your-component--default {
  background-color: var(--ctt-base-color-background-primary);
  border-color: var(--ctt-base-color-border-primary);
}

.ctt-your-component--primary {
  background-color: var(--ctt-core-color-primary-main);
  color: var(--ctt-base-color-text-inverse);
  border-color: var(--ctt-core-color-primary-main);
}

.ctt-your-component--secondary {
  background-color: transparent;
  color: var(--ctt-core-color-secondary-main);
  border-color: var(--ctt-core-color-secondary-main);
}

/* Sizes */
.ctt-your-component--small {
  padding: var(--ctt-core-dimension-50) var(--ctt-core-dimension-75);
  font-size: var(--ctt-base-font-size-body-s);
}

.ctt-your-component--medium {
  padding: var(--ctt-core-dimension-75) var(--ctt-core-dimension-100);
  font-size: var(--ctt-base-font-size-body-m);
}

.ctt-your-component--large {
  padding: var(--ctt-core-dimension-100) var(--ctt-core-dimension-150);
  font-size: var(--ctt-base-font-size-body-l);
}

/* States */
.ctt-your-component:hover:not(.ctt-your-component--disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.ctt-your-component:focus {
  outline: 2px solid var(--ctt-base-color-border-focus);
  outline-offset: 2px;
}

.ctt-your-component--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .ctt-your-component {
    padding: var(--ctt-core-dimension-50);
  }
  
  .ctt-your-component__title {
    font-size: var(--ctt-base-font-size-body-l);
  }
}

/* Dark mode support (if applicable) */
@media (prefers-color-scheme: dark) {
  .ctt-your-component--default {
    background-color: var(--ctt-base-color-background-secondary);
    border-color: var(--ctt-base-color-border-secondary);
  }
}
```

### 4. Configure Web Component

Edit `src/components/YourComponent/YourComponentElement.js`:

```javascript
import { LitElement, html, css } from 'lit';
import { YourComponent } from './index.js';

/**
 * YourComponent Web Component
 * 
 * A framework-agnostic web component wrapper for the YourComponent.
 * Provides custom events and proper attribute handling.
 * 
 * Usage:
 * <ctt-your-component variant="primary" size="large" title="Card Title">
 *   Card content goes here
 * </ctt-your-component>
 */
class CttYourComponent extends LitElement {
  static properties = {
    variant: { type: String },
    size: { type: String },
    title: { type: String },
    content: { type: String },
    disabled: { type: Boolean },
  };

  static styles = css`
    :host {
      display: block;
    }
    
    :host([hidden]) {
      display: none !important;
    }
  `;

  constructor() {
    super();
    this.variant = 'default';
    this.size = 'medium';
    this.title = '';
    this.content = '';
    this.disabled = false;
  }

  render() {
    return YourComponent({
      variant: this.variant,
      size: this.size,
      title: this.title,
      content: this.content,
      disabled: this.disabled,
      onClick: this._handleClick.bind(this),
    });
  }

  /**
   * Handle click events and dispatch custom events
   */
  _handleClick(event) {
    if (this.disabled) return;
    
    this.dispatchEvent(new CustomEvent('ctt-your-component-click', {
      bubbles: true,
      composed: true,
      detail: { 
        originalEvent: event,
        variant: this.variant,
        size: this.size,
        title: this.title
      }
    }));
  }

  /**
   * Handle custom events (if needed)
   */
  _handleCustomEvent(eventName, detail) {
    this.dispatchEvent(new CustomEvent(`ctt-your-component-${eventName}`, {
      bubbles: true,
      composed: true,
      detail
    }));
  }
}

// Register custom element
if (!customElements.get('ctt-your-component')) {
  customElements.define('ctt-your-component', CttYourComponent);
}

export { CttYourComponent };
```

### 5. Update TypeScript Definitions

The generator automatically adds basic TypeScript definitions to `src/index.d.ts`. Update them with your specific props:

```typescript
export interface YourComponentProps {
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  title?: string;
  content?: string;
  disabled?: boolean;
  onClick?: (event: Event) => void;
  className?: string;
  id?: string;
}

export declare function YourComponent(props: YourComponentProps): TemplateResult;

export declare class CttYourComponent extends LitElement {
  variant: 'default' | 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  title: string;
  content: string;
  disabled: boolean;
}
```

### 6. Create Storybook Documentation

Edit `src/stories/YourComponent.stories.js`:

```javascript
import { YourComponent } from '../components/YourComponent/index.js';

export default {
  title: 'Components/YourComponent',
  tags: ['autodocs'],
  render: (args) => YourComponent(args),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'YourComponent provides a flexible card-like interface with customizable variants, sizes, and content. Built with design tokens for consistency.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary'],
      description: 'Visual variant of the component',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the component',
    },
    title: {
      control: { type: 'text' },
      description: 'Title text for the component',
    },
    content: {
      control: { type: 'text' },
      description: 'Content text for the component',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the component is disabled',
    },
  },
};

export const Default = {
  args: {
    variant: 'default',
    size: 'medium',
    title: 'Component Title',
    content: 'This is the component content.',
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'medium',
    title: 'Primary Component',
    content: 'This component uses the primary color scheme.',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'medium',
    title: 'Secondary Component',
    content: 'This component uses the secondary color scheme.',
  },
};

export const AllSizes = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: flex-start; flex-wrap: wrap;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Small</span>
        ${YourComponent({ 
          size: 'small', 
          title: 'Small', 
          content: 'Small size content' 
        })}
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Medium</span>
        ${YourComponent({ 
          size: 'medium', 
          title: 'Medium', 
          content: 'Medium size content' 
        })}
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Large</span>
        ${YourComponent({ 
          size: 'large', 
          title: 'Large', 
          content: 'Large size content' 
        })}
      </div>
    </div>
  `,
};

export const AllVariants = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: flex-start; flex-wrap: wrap;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Default</span>
        ${YourComponent({ 
          variant: 'default', 
          title: 'Default', 
          content: 'Default variant' 
        })}
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Primary</span>
        ${YourComponent({ 
          variant: 'primary', 
          title: 'Primary', 
          content: 'Primary variant' 
        })}
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Secondary</span>
        ${YourComponent({ 
          variant: 'secondary', 
          title: 'Secondary', 
          content: 'Secondary variant' 
        })}
      </div>
    </div>
  `,
};

export const Disabled = {
  args: {
    variant: 'primary',
    size: 'medium',
    title: 'Disabled Component',
    content: 'This component is disabled.',
    disabled: true,
  },
};

export const WithSlotContent = {
  render: () => html`
    ${YourComponent({ 
      title: 'Component with Slot Content',
      onClick: () => console.log('Component clicked!')
    })}
  `,
};
```

### 7. Test Your Component

```bash
# Start Storybook to see your component
npm run storybook

# Build to ensure everything compiles
npm run build

# Run tests if you have any
npm test
```

## 🎨 Design Token Integration

### Using Design Tokens in Components

**CSS Custom Properties:**
```css
.my-component {
  /* Colors */
  background-color: var(--ctt-core-color-primary-main);
  color: var(--ctt-base-color-text-inverse);
  border-color: var(--ctt-base-color-border-primary);
  
  /* Typography */
  font-family: var(--ctt-base-font-family-body);
  font-size: var(--ctt-base-font-size-body-m);
  font-weight: var(--ctt-base-font-weight-regular);
  line-height: var(--ctt-base-line-height-base);
  
  /* Spacing */
  padding: var(--ctt-core-dimension-100);
  margin: var(--ctt-core-dimension-50);
  gap: var(--ctt-core-dimension-75);
  
  /* Borders */
  border-radius: var(--ctt-base-border-radius-s);
  border-width: var(--ctt-base-border-width-thin);
}
```

**JavaScript Token Access:**
```javascript
import { tokens, getCSSVar } from '../../tokens/index.js';

const styles = {
  fontFamily: tokens.typography.fontFamilies.primary,
  fontSize: tokens.typography.fontSize.medium,
  color: getCSSVar('core-color-primary-main'),
  backgroundColor: getCSSVar('base-color-background-primary'),
  borderRadius: getCSSVar('base-border-radius-s'),
  padding: getCSSVar('core-dimension-100'),
};
```

## 🚀 Component API Design Patterns

### Props Pattern
```javascript
export const MyComponent = ({ 
  // Visual variants
  variant = 'default',
  size = 'medium',
  
  // Content props
  title = '',
  subtitle = '',
  content = '',
  
  // State props
  disabled = false,
  loading = false,
  selected = false,
  
  // Event handlers
  onClick = null,
  onFocus = null,
  onBlur = null,
  
  // Accessibility
  ariaLabel = null,
  ariaDescribedBy = null,
  
  // HTML attributes
  id = null,
  className = '',
  
  // Spread remaining props
  ...props 
}) => {
  // Component implementation
};
```

### Event Handling Pattern
```javascript
// In functional component
const handleClick = (event) => {
  if (disabled || loading) {
    event.preventDefault();
    return;
  }
  
  // Custom logic here
  
  if (onClick) {
    onClick(event);
  }
};

// In web component
_handleClick(event) {
  if (this.disabled) return;
  
  // Dispatch custom event
  this.dispatchEvent(new CustomEvent('ctt-component-click', {
    bubbles: true,
    composed: true,
    detail: { 
      originalEvent: event,
      // Add relevant component state
      variant: this.variant,
      value: this.value
    }
  }));
}
```

### Conditional Rendering Pattern
```javascript
return html`
  <div class=${this._getClasses()}>
    ${title ? html`<h3 class="component__title">${title}</h3>` : ''}
    
    ${loading ? html`
      <div class="component__loading">
        <span>Loading...</span>
      </div>
    ` : html`
      <div class="component__content">
        ${content}
        <slot></slot>
      </div>
    `}
    
    ${showActions ? html`
      <div class="component__actions">
        <slot name="actions"></slot>
      </div>
    ` : ''}
  </div>
`;
```

## 🧪 Testing Components

### Manual Testing Checklist
- [ ] All variants render correctly
- [ ] All sizes work as expected
- [ ] Disabled state prevents interactions
- [ ] Custom events fire correctly
- [ ] Accessibility attributes are present
- [ ] Responsive design works on mobile
- [ ] Component works in Storybook
- [ ] TypeScript types are correct

### Automated Testing (if implemented)
```javascript
// Example test structure
describe('YourComponent', () => {
  it('renders with default props', () => {
    // Test implementation
  });
  
  it('handles click events', () => {
    // Test implementation
  });
  
  it('applies variant classes correctly', () => {
    // Test implementation
  });
});
```

## 📚 Component Documentation

### README for Each Component
Create a `README.md` in each component folder:

```markdown
# YourComponent

Brief description of what the component does.

## Usage

### Basic Usage
\`\`\`html
<ctt-your-component 
  variant="primary" 
  size="medium"
  title="Component Title">
  Content goes here
</ctt-your-component>
\`\`\`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | 'default' | Visual variant |
| size | string | 'medium' | Component size |

### Events

| Event | Description |
|-------|-------------|
| ctt-your-component-click | Fired when clicked |

## Examples

[Link to Storybook examples]
```

## 🔍 Troubleshooting

### Common Issues

**Component not appearing in Storybook:**
- Check that the story file is in `src/stories/`
- Verify the story export structure
- Restart Storybook development server

**TypeScript errors:**
- Update `src/index.d.ts` with correct prop types
- Ensure all props are properly typed
- Check for missing imports

**Styles not applying:**
- Verify CSS import in `src/styles/index.css`
- Check CSS class naming follows convention
- Ensure design tokens are used correctly

**Web component not registering:**
- Check that component is exported in `src/index.js`
- Verify custom element registration
- Ensure no naming conflicts

### Best Practices

1. **Always use design tokens** for colors, spacing, typography
2. **Follow naming conventions** - PascalCase for components, kebab-case for CSS
3. **Include comprehensive Storybook stories** for all variants and states
4. **Provide TypeScript definitions** for better developer experience
5. **Handle accessibility** - include ARIA attributes where needed
6. **Test responsiveness** - ensure components work on all screen sizes
7. **Document thoroughly** - include props, events, and usage examples

## 🔄 Component Updates

### Updating Existing Components

1. **Modify the component logic** in `index.js`
2. **Update styles** in the component CSS file
3. **Update TypeScript definitions** manually
4. **Update Storybook stories** to reflect changes
5. **Test all variants and states**
6. **Update component documentation**

### Version Control

- Create feature branches for new components
- Include all generated files in commits
- Update CHANGELOG.md with component additions
- Tag releases with version numbers

This guide provides everything needed to create high-quality, consistent components in the CTT Design System. Each component follows the same patterns and conventions, ensuring maintainability and ease of use across the entire system.
# CTT Design System

A framework-agnostic design system built with Web Components and design tokens.

## Installation

```bash
npm install ctt-ds
```

## Usage

### Framework Agnostic (Web Components)

```html
<!-- Include CSS -->
<link rel="stylesheet" href="node_modules/ctt-ds/dist/styles.css">

<!-- Use components directly in HTML -->
<ctt-button variant="primary" size="large" label="Click me"></ctt-button>
<ctt-radio-button name="option" value="1" label="Option 1"></ctt-radio-button>
<ctt-input-field label="Email" type="email" placeholder="Enter your email"></ctt-input-field>
<ctt-textarea-field label="Message" placeholder="Enter your message" rows="4"></ctt-textarea-field>

<script type="module">
  import 'ctt-ds';
  
  document.querySelector('ctt-button').addEventListener('ctt-click', (e) => {
    console.log('Button clicked!');
  });
  
  document.querySelector('ctt-input-field').addEventListener('ctt-input', (e) => {
    console.log('Input changed:', e.detail.value);
  });
</script>
```

### React

```jsx
import 'ctt-ds';
import 'ctt-ds/css';

function App() {
  return (
    <div>
      <ctt-button 
        variant="primary" 
        size="large" 
        label="Click me"
        onCtt-click={() => console.log('Clicked!')}
      />
      <ctt-input-field
        label="Email"
        type="email"
        placeholder="Enter your email"
        onCtt-input={(e) => console.log('Input:', e.detail.value)}
      />
      <ctt-radio-button
        name="option"
        value="1"
        label="Option 1"
        onCtt-change={(e) => console.log('Radio changed:', e.detail)}
      />
    </div>
  );
}
```

### Vue

```vue
<template>
  <div>
    <ctt-button 
      variant="primary" 
      size="large" 
      label="Click me"
      @ctt-click="handleClick"
    />
    <ctt-input-field
      label="Email"
      type="email"
      placeholder="Enter your email"
      @ctt-input="handleInput"
    />
    <ctt-textarea-field
      label="Message"
      placeholder="Enter your message"
      :rows="4"
      @ctt-input="handleTextareaInput"
    />
  </div>
</template>

<script>
import '@ctt/design-system';
import '@ctt/design-system/css';

export default {
  methods: {
    handleClick() {
      console.log('Clicked!');
    },
    handleInput(event) {
      console.log('Input:', event.detail.value);
    },
    handleTextareaInput(event) {
      console.log('Textarea:', event.detail.value);
    }
  }
}
</script>
```

### Angular

```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@ctt/design-system';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

```html
<!-- component.html -->
<ctt-button 
  variant="primary" 
  size="large" 
  label="Click me"
  (ctt-click)="handleClick()">
</ctt-button>

<ctt-input-field
  label="Email"
  type="email"
  placeholder="Enter your email"
  (ctt-input)="handleInput($event)">
</ctt-input-field>

<ctt-radio-button
  name="option"
  value="1"
  label="Option 1"
  (ctt-change)="handleRadioChange($event)">
</ctt-radio-button>
```

### Using Fonts Only

```css
/* Import fonts CSS */
@import 'ctt-ds/fonts.css';

.my-element {
  font-family: 'ActoCTT', Arial, sans-serif;
  font-weight: 400; /* Book/Regular */
}

/* Available font weights: */
.thin { font-weight: 250; }
.light { font-weight: 300; }
.regular { font-weight: 400; } /* Book */
.medium { font-weight: 500; }
.bold { font-weight: 700; }
.black { font-weight: 900; }
```

```html
<!-- Include fonts in HTML -->
<link rel="stylesheet" href="node_modules/@ctt/design-system/dist/assets/fonts.css">

<!-- Optional: Preload critical fonts for better performance -->
<link rel="preload" href="node_modules/@ctt/design-system/dist/assets/fonts/ActoCTT-Book.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="node_modules/@ctt/design-system/dist/assets/fonts/ActoCTT-Bold.woff2" as="font" type="font/woff2" crossorigin>
```

### Component Usage Examples

```html
<!-- Button with icon -->
<ctt-button 
  variant="primary" 
  size="large" 
  label="Save Document"
  icon-left="true"
  icon-left-element="<svg>...</svg>">
</ctt-button>

<!-- Input field with validation -->
<ctt-input-field
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  required="true"
  error="Please enter a valid email address">
</ctt-input-field>

<!-- Radio button group -->
<ctt-radio-button name="plan" value="basic" label="Basic Plan"></ctt-radio-button>
<ctt-radio-button name="plan" value="pro" label="Pro Plan" checked></ctt-radio-button>
<ctt-radio-button name="plan" value="enterprise" label="Enterprise Plan"></ctt-radio-button>

<!-- Textarea with custom dimensions -->
<ctt-textarea-field
  label="Comments"
  placeholder="Enter your feedback"
  rows="6"
  resize="vertical">
</ctt-textarea-field>
```

### Using Design Tokens Only

```javascript
// Import tokens as JavaScript objects
import { tokens } from '@ctt/design-system/tokens';

// Use in your CSS-in-JS
const buttonStyles = {
  fontFamily: tokens.typography.fontFamilies.primary,
  fontSize: tokens.typography.fontSize.medium,
  color: tokens.colors.primary[500]
};
```

```css
/* Import as CSS custom properties */
@import '@ctt/design-system/tokens.css';

.my-button {
  font-family: var(--ctt-typography-font-families-primary);
  font-size: var(--ctt-typography-font-size-medium);
  color: var(--ctt-colors-primary-500);
}
```

```json
// Import as JSON
import tokens from '@ctt/design-system/tokens.json';
```

## Available Components

- `<ctt-button>` - Button component with various variants, sizes and styles
- `<ctt-radio-button>` - Radio button component with error states and accessibility
- `<ctt-input-field>` - Input field component with label, validation and error states
- `<ctt-textarea-field>` - Textarea field component with resizing and validation
- `<ctt-header>` - Header component for application navigation
- `<ctt-page>` - Page layout component

## Available Imports

```javascript
// Full library
import '@ctt/design-system';

// Individual components (for tree-shaking)
import { 
  Button, CttButton,
  RadioButton, CttRadioButton,
  InputField, CttInputField,
  TextareaField, CttTextareaFieldElement,
  Header, CttHeader,
  Page, CttPage
} from '@ctt/design-system';

// Tokens only
import { tokens } from '@ctt/design-system/tokens';

// CSS bundle (includes fonts and tokens)
import '@ctt/design-system/css';

// Fonts only
import '@ctt/design-system/fonts.css';
```

```css
/* CSS imports */
@import '@ctt/design-system/css'; /* Full styles */
@import '@ctt/design-system/fonts.css'; /* Fonts only */
@import '@ctt/design-system/tokens.css'; /* Tokens only */
```

## Component Props

### Button

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | 'primary' \| 'secondary' \| 'tertiary' | 'primary' | Button variant style |
| `size` | 'small' \| 'medium' \| 'large' | 'medium' | Button size |
| `label` | string | 'Button' | Button text |
| `iconLeft` | boolean | false | Show icon on the left |
| `iconLeftElement` | string | '' | SVG or HTML for left icon |
| `iconRight` | boolean | false | Show icon on the right |
| `iconRightElement` | string | '' | SVG or HTML for right icon |
| `borderRadius` | 'pill' \| 'small' \| 'extraSmall' | 'pill' | Border radius style |
| `backgroundColor` | string | null | Custom background color |
| `disabled` | boolean | false | Disable the button |
| `ariaLabel` | string | null | Accessible name for screen readers |

### RadioButton

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | '' | Label text for the radio button |
| `name` | string | '' | Name attribute for form grouping |
| `value` | string | '' | Value of the radio button |
| `checked` | boolean | false | Whether the radio button is checked |
| `disabled` | boolean | false | Whether the radio button is disabled |
| `errorText` | string | '' | Error message to display |

### InputField

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | '' | Label text for the input |
| `value` | string | '' | Current value of the input |
| `name` | string | '' | Name attribute for forms |
| `type` | string | 'text' | Input type (text, email, password, etc.) |
| `placeholder` | string | '' | Placeholder text |
| `error` | string | null | Error message to display |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | Whether the input is required |
| `size` | 'small' \| 'medium' \| 'large' | 'medium' | Input size |

### TextareaField

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | '' | Label text for the textarea |
| `value` | string | '' | Current value of the textarea |
| `name` | string | '' | Name attribute for forms |
| `placeholder` | string | '' | Placeholder text |
| `errorText` | string | null | Error message to display |
| `disabled` | boolean | false | Whether the textarea is disabled |
| `required` | boolean | false | Whether the textarea is required |
| `rows` | number | 4 | Number of visible rows |
| `cols` | number | null | Number of visible columns |
| `resize` | 'none' \| 'vertical' \| 'horizontal' \| 'both' | 'vertical' | Resize behavior |

### Header

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `user` | any | null | User object for authentication state |
| `onLogin` | function | null | Login event handler |
| `onLogout` | function | null | Logout event handler |
| `onCreateAccount` | function | null | Create account event handler |

### Page

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `user` | any | null | User object for authentication state |
| `onLogin` | function | null | Login event handler |
| `onLogout` | function | null | Logout event handler |
| `onCreateAccount` | function | null | Create account event handler |

### Events

| Component | Event | Description |
|-----------|-------|-------------|
| Button | `ctt-click` | Fired when button is clicked |
| RadioButton | `ctt-change` | Fired when radio button state changes |
| InputField | `ctt-input` | Fired when input value changes |
| InputField | `ctt-change` | Fired when input loses focus |
| InputField | `ctt-focus` | Fired when input gains focus |
| InputField | `ctt-blur` | Fired when input loses focus |
| TextareaField | `ctt-input` | Fired when textarea value changes |
| TextareaField | `ctt-change` | Fired when textarea loses focus |
| TextareaField | `ctt-focus` | Fired when textarea gains focus |
| TextareaField | `ctt-blur` | Fired when textarea loses focus |

## Development

### Getting Started

```bash
# Install dependencies
npm install

# Start development with Storybook
npm run storybook

# Build the package
npm run build

# Run tests
npm test
```

### 📚 Documentation

- **[COMPONENT-ASSEMBLY.md](./COMPONENT-ASSEMBLY.md)** - Complete guide to creating and assembling components
- **[COMPONENT-STRUCTURE.md](./COMPONENT-STRUCTURE.md)** - Component architecture and organization
- **[DEVELOPMENT-WORKFLOW.md](./DEVELOPMENT-WORKFLOW.md)** - Development processes and workflows
- **[src/tokens/README.md](./src/tokens/README.md)** - Design tokens documentation
- **[src/styles/README.md](./src/styles/README.md)** - Styling system documentation

### Generating New Components

Use the built-in component generator to quickly scaffold new components with full TypeScript support:

```bash
npm run generate:component MyComponent
```

This command will create:
- `src/components/MyComponent/index.js` - Main component file
- `src/components/MyComponent/MyComponentElement.js` - Web Component wrapper
- `src/styles/components/my-component.css` - Component styles with design tokens
- `src/stories/MyComponent.stories.js` - Comprehensive Storybook documentation
- Updates `src/index.js` with exports
- Updates `src/styles/index.css` with style imports
- **Updates `src/index.d.ts` with TypeScript definitions**

#### Example Usage

```bash
# Generate a Card component
npm run generate:component Card

# Generate a Navigation component  
npm run generate:component Navigation

# Generate an InputField component
npm run generate:component InputField
```

📖 **For detailed component assembly instructions, see [COMPONENT-ASSEMBLY.md](./COMPONENT-ASSEMBLY.md)**

### Development Workflow

1. **Generate Component**: Start with the component generator
   ```bash
   npm run generate:component MyComponent
   ```

2. **Implement Logic**: Edit the generated component file
   ```javascript
   // src/components/MyComponent.js
   export const MyComponent = ({ variant = 'default', ...props }) => {
     // Your component implementation
   };
   ```

3. **Style the Component**: Add styles using design tokens
   ```css
   /* src/tokens/my-component-tokens.css */
   .ctt-my-component {
     font-family: var(--ctt-typography-font-families-primary);
     color: var(--ctt-colors-primary-500);
   }
   ```

4. **Create Stories**: Update the Storybook story for documentation
   ```javascript
   // src/stories/MyComponent.stories.js
   export const Default = {
     args: {
       variant: 'default',
     },
   };
   ```

5. **Test**: View your component in Storybook
   ```bash
   npm run storybook
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run storybook` | Start Storybook development server |
| `npm run build-storybook` | Build Storybook for production |
| `npm run generate:component <Name>` | Generate a new component scaffold |
| `npm run build` | Build the entire package for distribution |
| `npm run build:tokens` | Build design tokens |
| `npm run build:components` | Build component library |
| `npm run build:css` | Build CSS bundle |
| `npm run dev` | Watch mode for components |
| `npm run watch` | Run dev mode and Storybook concurrently |
| `npm run test` | Run unit tests |
| `npm run release` | Build and publish package |

### Project Structure

```
src/
├── components/           # Component implementations
│   ├── Button.js        # Functional component
│   └── ButtonElement.js # Web Component wrapper
├── tokens/              # Design tokens and CSS
│   ├── index.js         # Token exports
│   ├── colors.js        # Color tokens
│   ├── typography.js    # Typography tokens
│   └── button-tokens.css # Component-specific styles
├── stories/             # Storybook stories
│   └── Button.stories.js
└── index.js            # Main entry point
```

### Component Architecture

Components follow a dual-pattern approach:

1. **Functional Components** (`*.js`): Framework-agnostic functions that return Lit HTML templates
2. **Web Components** (`*Element.js`): LitElement wrappers for native web component support

### Design Tokens

Design tokens are the foundation of the design system:

- **JavaScript**: Import as objects (`import { tokens } from '@ctt/design-system/tokens'`)
- **CSS**: Use as custom properties (`var(--ctt-colors-primary-500)`)
- **JSON**: Available as static data (`tokens.json`)

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage
npm run test -- --coverage
```

### Publishing

```bash
# Patch version (1.0.0 → 1.0.1)
npm run version:patch

# Minor version (1.0.0 → 1.1.0)
npm run version:minor

# Major version (1.0.0 → 2.0.0)
npm run version:major
```

## License

CTT
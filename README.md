# CTT Design System

A framework-agnostic design system built with Web Components and design tokens.

## Installation

```bash
npm install @ctt/design-system
```

## Usage

### Framework Agnostic (Web Components)

```html
<!-- Include CSS -->
<link rel="stylesheet" href="node_modules/@ctt/design-system/dist/styles.css">

<!-- Use components directly in HTML -->
<ctt-button primary size="large" label="Click me"></ctt-button>

<script type="module">
  import '@ctt/design-system';
  
  document.querySelector('ctt-button').addEventListener('ctt-click', (e) => {
    console.log('Button clicked!');
  });
</script>
```

### React

```jsx
import '@ctt/design-system';
import '@ctt/design-system/css';

function App() {
  return (
    <ctt-button 
      primary 
      size="large" 
      label="Click me"
      onCtt-click={() => console.log('Clicked!')}
    />
  );
}
```

### Vue

```vue
<template>
  <ctt-button 
    :primary="true" 
    size="large" 
    label="Click me"
    @ctt-click="handleClick"
  />
</template>

<script>
import '@ctt/design-system';
import '@ctt/design-system/css';

export default {
  methods: {
    handleClick() {
      console.log('Clicked!');
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
  [primary]="true" 
  size="large" 
  label="Click me"
  (ctt-click)="handleClick()">
</ctt-button>
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

- `<ctt-button>` - Button component with various sizes and styles

## Available Imports

```javascript
// Full library
import '@ctt/design-system';

// Individual components (for tree-shaking)
import { Button, CttButton } from '@ctt/design-system';

// Tokens only
import { tokens } from '@ctt/design-system/tokens';

// CSS bundle
import '@ctt/design-system/css';
```

## Component Props

### Button

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `primary` | boolean | false | Primary button style |
| `backgroundColor` | string | null | Custom background color |
| `size` | 'small' \| 'medium' \| 'large' | 'medium' | Button size |
| `label` | string | 'Button' | Button text |

### Events

| Event | Description |
|-------|-------------|
| `ctt-click` | Fired when button is clicked |

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

### Generating New Components

Use the built-in component generator to quickly scaffold new components:

```bash
npm run generate:component MyComponent
```

This command will create:
- `src/components/MyComponent.js` - Main component file
- `src/components/MyComponentElement.js` - Web Component wrapper
- `src/tokens/my-component-tokens.css` - Component-specific CSS tokens
- `src/stories/MyComponent.stories.js` - Storybook story
- Updates `src/index.js` with exports

#### Example Usage

```bash
# Generate a Card component
npm run generate:component Card

# Generate a Navigation component  
npm run generate:component Navigation

# Generate an InputField component
npm run generate:component InputField
```

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
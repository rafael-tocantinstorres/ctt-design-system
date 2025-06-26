# CTT Design System

A framework-agnostic design system built with Web Components and design tokens.

## Installation

```bash
npm install ctt-design-system
```

## Usage

### Framework Agnostic (Web Components)

```html
<!-- Include CSS -->
<link rel="stylesheet" href="node_modules/ctt-design-system/dist/styles.css">

<!-- Use components directly in HTML -->
<ctt-button primary size="large" label="Click me"></ctt-button>

<script type="module">
  import 'ctt-design-system';
  
  document.querySelector('ctt-button').addEventListener('ctt-click', (e) => {
    console.log('Button clicked!');
  });
</script>
```

### React (Recommended)

```jsx
import React from 'react';
import { Button, InputField } from 'ctt-design-system/react';
import 'ctt-design-system/css';

function App() {
  const handleClick = (event) => {
    console.log('Button clicked!', event.detail);
  };

  return (
    <div>
      <Button
        variant="primary"
        size="large"
        label="Click me"
        onClick={handleClick}
      />
      
      <InputField
        label="Username"
        placeholder="Enter username"
        required
      />
    </div>
  );
}
```

**React Web Components (Alternative)**

```jsx
import 'ctt-design-system';
import 'ctt-design-system/css';

function App() {
  return (
    <ctt-button 
      variant="primary"
      size="large" 
      label="Click me"
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

### Using Fonts Only

```css
/* Import fonts CSS */
@import '@ctt/design-system/fonts.css';

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

### Server-Side Rendering (SSR)

Full SSR support with deep Shadow DOM rendering for Next.js, Node.js, and other server environments.

**Installation:**
```bash
npm install ctt-design-system @lit-labs/ssr
```

**Next.js Example:**
```javascript
// pages/index.js
import { renderCttButton, renderCttInputField, getCriticalCSS } from 'ctt-design-system/ssr';

export async function getServerSideProps() {
  const buttonHtml = await renderCttButton({
    variant: 'primary',
    size: 'medium',
    label: 'Server Rendered Button'
  });
  
  const inputHtml = await renderCttInputField({
    placeholder: 'Enter your name',
    type: 'text'
  });
  
  return {
    props: { buttonHtml, inputHtml, criticalCSS: getCriticalCSS() }
  };
}

export default function HomePage({ buttonHtml, inputHtml, criticalCSS }) {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <link rel="stylesheet" href="/node_modules/ctt-design-system/dist/styles.css" />
      </Head>
      
      <div dangerouslySetInnerHTML={{ __html: buttonHtml }} />
      <div dangerouslySetInnerHTML={{ __html: inputHtml }} />
      
      {/* Client-side hydration */}
      <script type="module" src="/node_modules/ctt-design-system/dist/index.esm.js" />
    </>
  );
}
```

**Available SSR Functions:**
- `renderCttButton(props)` - Render button component
- `renderCttInputField(props)` - Render input field component  
- `renderCttTextareaField(props)` - Render textarea component
- `renderCttRadioButton(props)` - Render radio button component
- `renderCttHeader(props)` - Render header component
- `renderCttPage(props)` - Render page component
- `renderCttComponent(tagName, props)` - Generic component renderer
- `getCriticalCSS()` - Get critical CSS for inline styles
- `getFontPreloadLinks()` - Get font preload link tags

📚 **See [SSR-NEXTJS-GUIDE.md](./SSR-NEXTJS-GUIDE.md) for complete documentation and examples.**

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
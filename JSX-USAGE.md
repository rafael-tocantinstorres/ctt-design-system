# JSX/React Usage Guide

This guide explains how to use CTT Design System components in JSX environments like React, Preact, or other JSX-based frameworks.

## Installation

```bash
npm install ctt-ds
```

## Usage Options

### Option 1: Direct Web Components Usage (Recommended for most cases)

Import the JSX type declarations to get full TypeScript support:

```typescript
// Import type declarations for JSX
import 'ctt-ds/jsx';
// Import the web components to register them
import 'ctt-ds';
// Import styles
import 'ctt-ds/css';
```

Then use the components directly in your JSX:

```jsx
function App() {
  const handleClick = (event) => {
    console.log('Button clicked:', event.detail);
  };

  return (
    <div>
      <ctt-button 
        variant="primary" 
        size="medium" 
        label="Click me"
        onCtt-click={handleClick}
      />
      
      <ctt-input-field 
        label="Your name"
        placeholder="Enter your name"
        required
      />
      
      <ctt-textarea-field
        label="Message"
        rows={4}
        placeholder="Enter your message"
      />
    </div>
  );
}
```

### Option 2: React Wrapper Components (Best React integration)

For the best React experience with proper event handling and refs:

```typescript
import React from 'react';
import { 
  CttButton, 
  CttInputField, 
  CttTextareaField 
} from 'ctt-ds/react';
import 'ctt-ds/css';

function App() {
  const buttonRef = React.useRef(null);

  const handleClick = (event) => {
    console.log('Button clicked:', event.detail);
  };

  const handleInputChange = (event) => {
    console.log('Input changed:', event.detail);
  };

  return (
    <div>
      <CttButton 
        ref={buttonRef}
        variant="primary" 
        size="medium" 
        label="Click me"
        onClick={handleClick}
        className="my-custom-class"
      />
      
      <CttInputField 
        label="Your name"
        placeholder="Enter your name"
        required
        onChange={handleInputChange}
      />
      
      <CttTextareaField
        label="Message"
        rows={4}
        placeholder="Enter your message"
      />
    </div>
  );
}
```

## TypeScript Configuration

Make sure your `tsconfig.json` includes the necessary settings for JSX:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx", // or "react" for older React versions
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  }
}
```

For React projects, you might also want to add this to your type declarations:

```typescript
// In your global.d.ts or a similar file
/// <reference types="ctt-ds/jsx" />
```

## Component Properties

### Button Properties
- `variant`: 'primary' | 'secondary' | 'tertiary'
- `size`: 'small' | 'medium' | 'large'
- `label`: string
- `disabled`: boolean
- `icon-left`: boolean
- `icon-left-element`: string (SVG markup)
- `icon-right`: boolean
- `icon-right-element`: string (SVG markup)
- `border-radius`: 'pill' | 'small' | 'extraSmall'
- `background-color`: string
- `aria-label`: string

### Input Field Properties
- `label`: string
- `value`: string
- `name`: string
- `type`: string
- `placeholder`: string
- `error`: string
- `disabled`: boolean
- `required`: boolean
- `size`: 'small' | 'medium' | 'large'

### Textarea Field Properties
- `label`: string
- `value`: string
- `name`: string
- `placeholder`: string
- `error-text`: string
- `disabled`: boolean
- `required`: boolean
- `rows`: number
- `cols`: number
- `resize`: 'none' | 'vertical' | 'horizontal' | 'both'

### Radio Button Properties
- `label`: string
- `name`: string
- `value`: string
- `checked`: boolean
- `disabled`: boolean
- `error-text`: string

## Events

All components emit custom events with the `ctt-` prefix:

- `ctt-click`: Fired when buttons are clicked
- `ctt-change`: Fired when form field values change
- `ctt-input`: Fired on input events
- `ctt-focus`: Fired when fields receive focus
- `ctt-blur`: Fired when fields lose focus

### Event Handling Examples

#### With Web Components
```jsx
<ctt-button 
  onCtt-click={(event) => console.log(event.detail)}
/>

<ctt-input-field 
  onCtt-change={(event) => console.log(event.detail)}
  onCtt-focus={(event) => console.log('Field focused')}
/>
```

#### With React Wrappers
```jsx
<CttButton 
  onClick={(event) => console.log(event.detail)}
/>

<CttInputField 
  onChange={(event) => console.log(event.detail)}
  onFocus={(event) => console.log('Field focused')}
/>
```

## Styling

Import the CSS file to get the default styles:

```typescript
import 'ctt-ds/css';
```

You can also import individual stylesheets:

```typescript
import 'ctt-ds/tokens.css'; // Design tokens only
import 'ctt-ds/fonts.css';  // Font declarations
```

## Framework-Specific Notes

### React
- Use the React wrapper components for the best experience
- Custom events work out of the box
- Refs are supported with wrapper components

### Vue.js
- Vue 3 has excellent web component support
- Use `v-on:ctt-click` for event handling
- Remember to use kebab-case for props

### Angular
- Angular has good web component support
- Use `(ctt-click)` for event binding
- Add `CUSTOM_ELEMENTS_SCHEMA` to your module

### Svelte
- Svelte works great with web components
- Use `on:ctt-click` for event handling
- Props work naturally with kebab-case

## Troubleshooting

### "Property does not exist on type 'JSX.IntrinsicElements'"

Make sure you're importing the type declarations:

```typescript
import 'ctt-ds/jsx';
```

Or add this to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["ctt-ds/jsx"]
  }
}
```

### Components not rendering

Make sure you're importing the actual components, not just the types:

```typescript
import 'ctt-ds'; // This registers the web components
```

### Styles not applied

Import the CSS file:

```typescript
import 'ctt-ds/css';
```

### Events not working in React

If using web components directly, make sure to use the `onCtt-` prefix. For better React integration, use the wrapper components from `ctt-ds/react`.

## Best Practices

1. **Use React wrappers for React projects** - They provide better integration
2. **Import types early** - Add the JSX type imports at the top level of your app
3. **Import styles once** - Usually in your main app file or CSS
4. **Use refs when needed** - The React wrappers support React refs
5. **Handle events properly** - Use the correct event names for your framework
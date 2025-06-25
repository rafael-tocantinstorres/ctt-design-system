# React Integration Guide

This guide explains how to use CTT Design System components in React applications.

## Installation

```bash
npm install ctt-design-system
```

## Usage Options

### Option 1: React Wrappers (Recommended)

The React wrappers provide the best developer experience with native React patterns:

Use the React wrappers for the best development experience:

```jsx
import React from 'react';
import { Button, InputField, TextareaField, RadioButton } from 'ctt-design-system/react';
import 'ctt-design-system/css'; // Import styles

function App() {
  const handleButtonClick = (event) => {
    console.log('Button clicked:', event.detail);
  };

  const handleInputChange = (event) => {
    console.log('Input changed:', event.detail.value);
  };

  return (
    <div>
      <Button
        variant="primary"
        size="medium"
        label="Click me"
        onClick={handleButtonClick}
      />
      
      <InputField
        label="Username"
        placeholder="Enter your username"
        onChange={handleInputChange}
        required
      />
      
      <TextareaField
        label="Comments"
        placeholder="Enter your comments"
        rows={4}
        onChange={handleInputChange}
      />
      
      <RadioButton
        label="Option 1"
        name="options"
        value="option1"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default App;
```

### Option 2: Direct Web Components

You can also use the web components directly in JSX:

```jsx
import React, { useEffect } from 'react';
import 'ctt-design-system'; // Import all web components
import 'ctt-design-system/css'; // Import styles

function App() {
  useEffect(() => {
    const handleButtonClick = (event) => {
      console.log('Button clicked:', event.detail);
    };

    const button = document.querySelector('ctt-button');
    button?.addEventListener('ctt-click', handleButtonClick);

    return () => {
      button?.removeEventListener('ctt-click', handleButtonClick);
    };
  }, []);

  return (
    <div>
      <ctt-button
        variant="primary"
        size="medium"
        label="Click me"
      />
      
      <ctt-input-field
        label="Username"
        placeholder="Enter your username"
        required
      />
    </div>
  );
}

export default App;
```

## TypeScript Support

Full TypeScript support is included with proper prop types and event handlers:

```tsx
import React from 'react';
import { Button, ButtonProps } from 'ctt-design-system/react';

interface MyButtonProps extends ButtonProps {
  customProp?: string;
}

const MyButton: React.FC<MyButtonProps> = ({ customProp, ...props }) => {
  return <Button {...props} />;
};
```

## Event Handling

React wrappers automatically handle custom events and convert them to React-style event handlers:

```jsx
// Web component emits 'ctt-click' event
// React wrapper converts it to onClick prop

<Button
  onClick={(event) => {
    // event is the original CustomEvent
    console.log(event.detail); // Access custom event data
  }}
/>
```

## Styling

Import the CSS file to get all component styles:

```jsx
import 'ctt-design-system/css';
```

You can also import individual token files:

```jsx
import 'ctt-design-system/tokens.css'; // Design tokens only
import 'ctt-design-system/fonts.css'; // Font definitions
```

## SSR Support

The React wrappers are SSR-friendly. Web components will be hydrated on the client side.

## Best Practices

1. **Use React Wrappers**: They provide better TypeScript support and React-like event handling
2. **Import Styles**: Always import the CSS file for proper styling
3. **Event Handling**: Use the React-style event handlers provided by the wrappers
4. **Performance**: Import only the components you need if bundle size is a concern

## Troubleshooting

### Components Not Rendering
Make sure you've imported the CSS file:
```jsx
import 'ctt-design-system/css';
```

### TypeScript Errors
Ensure you're using the React wrappers and have the correct imports:
```tsx
import { Button } from 'ctt-design-system/react';
```

### Events Not Working
Use the React wrapper's event props instead of adding event listeners manually:
```jsx
// ✅ Good
<Button onClick={handleClick} />

// ❌ Avoid
<ctt-button ref={ref} /> // then addEventListener on ref
```

## Advanced Usage

### Hooks for Enhanced Integration

```jsx
import { useCttForm, useCttComponent } from 'ctt-design-system/react';

// Form management hook
function MyForm() {
  const form = useCttForm({
    username: '',
    email: ''
  });

  return (
    <div>
      <InputField
        label="Username"
        value={form.getFieldValue('username')}
        onChange={form.handleFieldChange('username')}
      />
      
      <Button
        label="Submit"
        onClick={() => {
          const data = form.getAllValues();
          console.log('Form data:', data);
        }}
      />
    </div>
  );
}

// Component interaction hook
function MyComponent() {
  const inputRef = useRef();
  const { getValue, setValue, focus } = useCttComponent(inputRef);

  return (
    <InputField
      ref={inputRef}
      label="Controlled Input"
      onFocus={() => console.log('Input focused')}
    />
  );
}
```

### Direct Web Component Usage with Type Safety

```tsx
import 'ctt-design-system';
import 'ctt-design-system/css';

// Include JSX types for web components
/// <reference types="ctt-design-system/jsx" />

function App() {
  return (
    <div>
      {/* Full TypeScript support for web components */}
      <ctt-button
        variant="primary"
        size="large"
        label="Direct Web Component"
        onClick={(e) => console.log(e.detail)}
      />
    </div>
  );
}
```

## Framework-Specific Guides

- **Next.js**: See [NEXTJS-INTEGRATION.md](./NEXTJS-INTEGRATION.md)
- **Vite**: Check `examples/vite-react/` for a complete setup

## Examples

- `examples/react-example.jsx` - Basic React integration
- `examples/vite-react/` - Complete Vite + React application
- See [NEXTJS-INTEGRATION.md](./NEXTJS-INTEGRATION.md) for Next.js examples
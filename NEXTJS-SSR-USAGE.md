# Next.js SSR Usage Guide

This document demonstrates how to use ctt-ds in Next.js 13+ with Server-Side Rendering (SSR) support.

## ✅ What's Fixed

- **No more `ReferenceError: document is not defined`** during SSR
- **Automatic CSS loading** in the browser
- **Single component registration** - no duplicate custom elements
- **SSR-safe exports** - all component functions and tokens work on the server

## 📋 Quick Start

### 1. Install the package

```bash
npm install ctt-ds
```

### 2. Import in your Next.js app

```typescript
// app/layout.tsx (Next.js 13+ App Router)
import 'ctt-ds';  // ✅ This will NOT crash on the server

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### 3. Use components in your pages

```typescript
// app/page.tsx
'use client';  // Client component for web components
import { Button } from 'ctt-ds';
import { html, render } from 'lit';

export default function HomePage() {
  return (
    <div>
      <h1>My App</h1>
      
      {/* Using web components directly */}
      <ctt-button variant="primary" label="Click me"></ctt-button>
      <ctt-radio-button name="choice" value="option1" label="Option 1"></ctt-radio-button>
      <ctt-textarea-field label="Comments" placeholder="Enter your comments"></ctt-textarea-field>
      
      {/* Using Lit function components */}
      <div 
        dangerouslySetInnerHTML={{
          __html: String(Button({ variant: 'secondary', label: 'Lit Button' }))
        }}
      />
    </div>
  );
}
```

## 🔧 Server-Side Rendering (SSR) Support

### Server Components (SSR-safe)

```typescript
// app/server-component.tsx (Server Component)
import { tokens, Button } from 'ctt-ds';

export default function ServerComponent() {
  // ✅ These work on the server
  const primaryColor = tokens.colors.primary['500'];
  const buttonHTML = Button({ variant: 'primary', label: 'Server Button' });
  
  return (
    <div>
      <p style={{ color: primaryColor }}>Server-rendered content</p>
      <div dangerouslySetInnerHTML={{ __html: String(buttonHTML) }} />
    </div>
  );
}
```

### Client Components (Full Feature Access)

```typescript
// app/client-component.tsx
'use client';
import { CttButton } from 'ctt-ds';  // Web component class (client-only)

export default function ClientComponent() {
  useEffect(() => {
    // ✅ Web component classes are available on the client
    if (CttButton) {
      console.log('CttButton is available:', CttButton);
    }
  }, []);

  return (
    <div>
      {/* ✅ Web components work normally on the client */}
      <ctt-button 
        variant="primary" 
        label="Client Button"
        onCtt-click={(e) => console.log('Clicked!', e)}
      />
      
      <ctt-radio-button
        name="clientChoice"
        value="yes"
        label="Enable feature"
        onCtt-change={(e) => console.log('Radio changed:', e.detail)}
      />
      
      <ctt-textarea-field
        label="Feedback"
        placeholder="Your feedback..."
        onCtt-input={(e) => console.log('Input:', e.detail)}
      />
    </div>
  );
}
```

## 📦 Available Exports

### ✅ SSR-Safe (Available on Server & Client)

```typescript
import { 
  // Lit function components
  Button,
  RadioButton, 
  TextareaField,
  InputField,
  Header,
  Page,
  
  // Design tokens
  tokens,
  buttonTokens,
  tokenStyles,
  typographyHelpers,
  getCSSVar
} from 'ctt-ds';
```

### 🖥️ Client-Only (Undefined on Server)

```typescript
import { 
  // Web component classes (undefined on server)
  CttButton,
  CttRadioButton,
  CttTextareaFieldElement,
  CttInputField,
  CttHeader,
  CttPage
} from 'ctt-ds';
```

## 🎨 Styling

CSS is automatically loaded in the browser. You can also manually import it:

```typescript
// Optional: Import CSS manually
import 'ctt-ds/css';
```

## 🔍 How It Works

1. **SSR Guard**: All browser-specific code is wrapped in `typeof window !== 'undefined'`
2. **Dynamic CSS Loading**: CSS is loaded via dynamic import or link tag in the browser
3. **Lazy Component Registration**: Web components are registered only when needed
4. **Single Registration**: Components are registered exactly once per page load

## 🚀 Migration from Previous Versions

If you were previously getting SSR errors:

### Before (Crashed on SSR)
```typescript
import 'ctt-ds';  // ❌ ReferenceError: document is not defined
```

### After (SSR-Safe)
```typescript
import 'ctt-ds';  // ✅ Works perfectly in SSR
```

No other changes needed! Your existing code will continue to work.

## 🏷️ Available Web Components

- `<ctt-button>` - Button component
- `<ctt-header>` - Header component  
- `<ctt-input-field>` - Input field component
- `<ctt-page>` - Page component
- `<ctt-radio-button>` - Radio button component
- `<ctt-textarea-field>` - Textarea field component

## 💡 Pro Tips

1. **Use Server Components** for better performance when you only need tokens or Lit functions
2. **Use Client Components** when you need web component interactivity
3. **Import only what you need** to optimize bundle size
4. **TypeScript support** is included out of the box
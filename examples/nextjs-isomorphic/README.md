# Next.js Isomorphic Components Example

This example demonstrates the "isomorphic" Lit components recipe implementation with the CTT Design System.

## What This Shows

- **Server-side rendering** with full Shadow DOM using `@lit-labs/ssr`
- **Client-side hydration** without any special configuration
- **Conditional exports** automatically serving the right build for each environment
- **Same imports** working in both Node.js and browser environments

## How It Works

### Server Environment (Node.js)
```javascript
import { renderCttButton } from 'ctt-design-system/button';
// ↑ Resolves to dist/button.node.js via conditional exports

const html = await renderCttButton({ variant: 'primary' });
// ↑ Uses @lit-labs/ssr for deep Shadow DOM rendering
```

### Browser Environment
```javascript
import 'ctt-design-system/button';
// ↑ Resolves to dist/button.js via conditional exports
// ↑ Auto-registers <ctt-button> custom element
```

## Running the Example

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   ```
   http://localhost:3000
   ```

## Key Features Demonstrated

### ✅ True Isomorphism
- Same import path works in both environments
- No dynamic imports or special wrappers needed
- Conditional exports handle the complexity

### ✅ Full SSR Support
- Complete Shadow DOM rendered on server
- Styles properly inlined and scoped
- SEO-friendly HTML output

### ✅ Seamless Hydration
- Server-rendered components automatically become interactive
- No flash of unstyled content (FOUC)
- Smooth transition from SSR to client-side

### ✅ Performance Optimized
- Small browser bundles (no server code included)
- Fast server rendering with dedicated Node.js build
- Minimal runtime overhead

## File Structure

```
pages/
└── index.js          # Main example page

package.json          # Dependencies including @lit-labs/ssr
```

## Dependencies

The example requires:

- `ctt-design-system` - The component library
- `@lit-labs/ssr` - Lit's server-side rendering
- `next` - Next.js framework
- `react` - React runtime

## Implementation Notes

1. **Conditional Exports**: The magic happens in the library's `package.json`:
   ```json
   {
     "exports": {
       "./button": {
         "node": "./dist/button.node.js",
         "default": "./dist/button.js"
       }
     }
   }
   ```

2. **Server Rendering**: Uses `renderCttButton()` helper that internally uses `@lit-labs/ssr`

3. **Client Hydration**: Browser automatically loads the right version and registers components

4. **No Configuration**: Consumers don't need special setup or build configuration

This demonstrates the power of the isomorphic recipe - components that "just work" everywhere!
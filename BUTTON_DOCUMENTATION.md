# CTT Button Component Documentation

## Overview

The CTT Button component has been updated with a comprehensive configuration system that supports multiple variants, sizes, border radius options, and icon integration.

## Properties

### Core Properties

| Property | Type | Default | Options | Description |
|----------|------|---------|---------|-------------|
| `variant` | String | `'primary'` | `'primary'`, `'secondary'`, `'tertiary'` | Button visual style variant |
| `size` | String | `'medium'` | `'small'`, `'medium'`, `'large'` | Button size |
| `label` | String | `'Button'` | Any string | Button text content |
| `onclick` | Function | `undefined` | Function | Click event handler |

### Icon Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `iconLeft` | Boolean | `false` | Whether to show an icon on the left side |
| `iconLeftElement` | String | `''` | HTML string for the left icon (typically SVG) |
| `iconRight` | Boolean | `false` | Whether to show an icon on the right side |
| `iconRightElement` | String | `''` | HTML string for the right icon (typically SVG) |

### Style Properties

| Property | Type | Default | Options | Description |
|----------|------|---------|---------|-------------|
| `borderRadius` | String | `'pill'` | `'pill'`, `'small'`, `'extraSmall'` | Border radius style |
| `backgroundColor` | String | `null` | Any CSS color | Custom background color override |

### State Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `disabled` | Boolean | `false` | Whether the button is disabled |

### Accessibility Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `ariaLabel` | String | `null` | Accessible label for screen readers (required for icon-only buttons) |

## Usage Examples

### Basic Usage

```html
<!-- Primary button -->
<ctt-button variant="primary" size="medium" label="Save Changes"></ctt-button>

<!-- Secondary button -->
<ctt-button variant="secondary" size="large" label="Cancel"></ctt-button>

<!-- Tertiary button -->
<ctt-button variant="tertiary" size="small" label="Learn More"></ctt-button>
```

### With Icons

```html
<!-- Button with left icon -->
<ctt-button 
    variant="primary" 
    label="Add Item" 
    icon-left="true"
    icon-left-element='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>'>
</ctt-button>

<!-- Button with right icon -->
<ctt-button 
    variant="secondary" 
    label="Download" 
    icon-right="true"
    icon-right-element='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>'>
</ctt-button>

<!-- Icon-only button (requires aria-label for accessibility) -->
<ctt-button 
    variant="primary" 
    icon-left="true"
    icon-left-element='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>'
    aria-label="Menu">
</ctt-button>
```

### Border Radius Options

```html
<!-- Pill shape (default) -->
<ctt-button variant="primary" border-radius="pill" label="Pill Button"></ctt-button>

<!-- Small radius -->
<ctt-button variant="primary" border-radius="small" label="Small Radius"></ctt-button>

<!-- Extra small radius -->
<ctt-button variant="primary" border-radius="extraSmall" label="Extra Small"></ctt-button>
```

### Disabled States

```html
<!-- Disabled buttons -->
<ctt-button variant="primary" label="Disabled Primary" disabled></ctt-button>
<ctt-button variant="secondary" label="Disabled Secondary" disabled></ctt-button>
<ctt-button variant="tertiary" label="Disabled Tertiary" disabled></ctt-button>

<!-- Disabled button with icon -->
<ctt-button 
    variant="primary" 
    label="Disabled Save" 
    icon-left="true"
    icon-left-element='<svg>...</svg>'
    disabled>
</ctt-button>
```

### JavaScript Usage

```javascript
import { Button } from './src/components/Button/index.js';

// Create button programmatically
const buttonConfig = {
    variant: 'primary',
    size: 'large',
    label: 'Click Me',
    onclick: () => console.log('Button clicked!'),
    iconLeft: true,
    iconLeftElement: '<svg>...</svg>',
    borderRadius: 'small',
    disabled: false,
    ariaLabel: 'Save document' // For icon-only buttons
};

const buttonElement = Button(buttonConfig);
```

### Event Handling

```javascript
// Listen for button clicks
document.addEventListener('ctt-click', (event) => {
    console.log('Button clicked:', event.detail);
    // event.detail contains:
    // {
    //     variant: 'primary',
    //     size: 'medium',
    //     label: 'Button text',
    //     iconLeft: false,
    //     iconRight: false,
    //     borderRadius: 'pill',
    //     disabled: false
    // }
});
```

## CSS Classes

The component generates the following CSS classes:

- `.ctt-button` - Base button styles
- `.ctt-button--{variant}` - Variant styles (`primary`, `secondary`, `tertiary`)
- `.ctt-button--{size}` - Size styles (`small`, `medium`, `large`)
- `.ctt-button--{borderRadius}` - Border radius styles (`pill`, `small-radius`, `extra-small-radius`)
- `.ctt-button__icon` - Icon container styles
- `.ctt-button__icon--left` - Left icon specific styles
- `.ctt-button__icon--right` - Right icon specific styles
- `.ctt-button__label` - Label text styles

## Design Tokens

The button component uses the following design tokens:

### Spacing
- `--ctt-button-padding-small`
- `--ctt-button-padding-medium`
- `--ctt-button-padding-large`
- `--ctt-button-icon-gap`

### Border Radius
- `--ctt-button-border-radius-pill`
- `--ctt-button-border-radius-small`
- `--ctt-button-border-radius-extra-small`

### Colors
- Uses semantic color tokens for each variant
- Supports hover and active states
- Maintains accessibility contrast ratios

## Icon Guidelines

### Recommended Icon Format
- Use SVG format for scalability
- Set `width="16"` and `height="16"` for consistency
- Use `fill="currentColor"` to inherit button text color
- Ensure icons have proper viewBox for scaling

### Icon Size Guidelines
- Small buttons: 14px icons
- Medium buttons: 16px icons  
- Large buttons: 18px icons

### Example SVG Icons
```html
<!-- Plus icon -->
<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
</svg>

<!-- Download icon -->
<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
</svg>

<!-- Menu icon -->
<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
</svg>
```

## Button States

### Normal State
All button variants support normal, hover, active, and focus states with appropriate visual feedback.

### Disabled State
When `disabled` is set to `true`:
- Button becomes non-interactive
- Visual opacity is reduced
- Click events are prevented
- Hover effects are disabled
- Maintains accessibility standards

## Accessibility

- All buttons maintain proper contrast ratios
- Focus states are clearly visible
- Icons include proper semantic meaning through context
- Keyboard navigation is fully supported
- Screen readers can properly identify button purpose

### Icon-Only Button Accessibility

For buttons that contain only icons (no visible text), you **must** provide an `aria-label` attribute:

```html
<!-- ✅ Good: Icon-only button with aria-label -->
<ctt-button 
    variant="primary" 
    icon-left="true"
    icon-left-element="<svg>...</svg>"
    aria-label="Close dialog">
</ctt-button>

<!-- ❌ Bad: Icon-only button without accessible name -->
<ctt-button 
    variant="primary" 
    icon-left="true"
    icon-left-element="<svg>...</svg>">
</ctt-button>
```

### Accessibility Guidelines

1. **Always provide accessible names** for icon-only buttons using `aria-label`
2. **Use descriptive labels** that clearly indicate the button's action
3. **Ensure sufficient color contrast** for all button states
4. **Test with screen readers** to verify proper announcement
5. **Maintain focus visibility** for keyboard navigation

## Browser Support

- Modern browsers with ES6+ support
- Lit Element compatible browsers
- CSS Custom Properties support required
# Token Migration Guide

This guide helps you migrate from the old token structure to the new CTT Design System tokens.

## Quick Reference: Token Mapping

### Colors

| Old Token | New Token | Usage |
|-----------|-----------|-------|
| `--brand-primary-500` | `--ctt-core-color-primary-main` | Primary brand color |
| `--core-color-primary-main` | `--ctt-core-color-primary-main` | Primary brand color |
| `--base-color-content-fg-main` | `--ctt-base-color-content-fg-main` | Main text color |
| `--core-color-neutral-100` | `--ctt-core-color-neutral-100` | White/lightest neutral |
| `--base-color-feedback-error-bg-main` | `--ctt-base-color-feedback-error-bg-main` | Error background |

### Typography

| Old Token | New Token | Usage |
|-----------|-----------|-------|
| `--core-font-family-brand` | `--ctt-core-font-family-brand` | Brand font family |
| `--base-font-size-body-m` | `--ctt-base-font-size-body-m` | Medium body text |
| `--core-font-weight-700` | `--ctt-core-font-weight-700` | Bold font weight |
| `--base-font-weight-label` | `--ctt-base-font-weight-label` | Label font weight |

### Spacing & Sizing

| Old Token | New Token | Usage |
|-----------|-----------|-------|
| `--core-dimension-100` | `--ctt-core-dimension-100` | 16px spacing |
| `--base-border-radius-pill` | `--ctt-base-border-radius-pill` | Pill-shaped radius |
| `--core-border-width-2` | `--ctt-core-border-width-2` | 2px border |

## Step-by-Step Migration

### 1. Update CSS Imports

**Before:**
```css
@import './example.css';
```

**After:**
```css
@import './tokens.css';
```

### 2. Replace Token References

**Before:**
```css
.my-component {
  color: var(--core-color-primary-main);
  background: var(--base-color-container-bg-default);
  font-size: var(--base-font-size-body-m);
  padding: var(--core-dimension-100);
}
```

**After:**
```css
.my-component {
  color: var(--ctt-core-color-primary-main);
  background: var(--ctt-base-color-container-bg-default);
  font-size: var(--ctt-base-font-size-body-m);
  padding: var(--ctt-core-dimension-100);
}
```

### 3. Update Component-Specific Tokens

**Before:**
```css
:root {
  --my-component-bg: var(--brand-primary-500);
  --my-component-text: var(--core-color-neutral-100);
}
```

**After:**
```css
:root {
  --ctt-my-component-bg: var(--ctt-core-color-primary-main);
  --ctt-my-component-text: var(--ctt-core-color-neutral-100);
}
```

## Common Migration Patterns

### Button Components

**Before:**
```css
.button {
  background: var(--brand-primary-500);
  color: var(--core-color-neutral-100);
  border-radius: var(--core-border-radius-pill);
  padding: var(--core-dimension-75) var(--core-dimension-150);
}
```

**After:**
```css
.button {
  background: var(--ctt-base-color-selectable-primary-unselected-default-bg);
  color: var(--ctt-base-color-selectable-primary-unselected-default-fg);
  border-radius: var(--ctt-base-border-radius-pill);
  padding: var(--ctt-core-dimension-75) var(--ctt-core-dimension-150);
}
```

### Form Components

**Before:**
```css
.input {
  border: var(--core-border-width-1) solid var(--base-color-selectable-border-default);
  background: var(--base-color-selectable-bg-default);
  color: var(--base-color-content-fg-main);
}

.input:focus {
  border-color: var(--core-color-primary-main);
}
```

**After:**
```css
.input {
  border: var(--ctt-base-border-width-selectable-s) solid var(--ctt-base-color-selectable-border-default);
  background: var(--ctt-base-color-selectable-bg-default);
  color: var(--ctt-base-color-content-fg-main);
}

.input:focus {
  border-color: var(--ctt-core-color-primary-main);
}
```

### Feedback Components

**Before:**
```css
.alert--error {
  background: var(--base-color-feedback-error-bg-light);
  color: var(--base-color-feedback-fg-error);
  border: var(--core-border-width-1) solid var(--core-color-negative-main);
}
```

**After:**
```css
.alert--error {
  background: var(--ctt-base-color-feedback-error-bg-light);
  color: var(--ctt-base-color-feedback-fg-error);
  border: var(--ctt-core-border-width-1) solid var(--ctt-core-color-negative-main);
}
```

## Automated Migration Script

You can use this find-and-replace pattern to speed up migration:

### VS Code Find & Replace (Regex enabled)

**Find:** `--([a-zA-Z-]+)`
**Replace:** `--ctt-$1`

**Note:** This will add `ctt-` prefix to ALL CSS custom properties. Review changes carefully and revert any that shouldn't be prefixed.

### More Specific Patterns

**Find brand tokens:**
```regex
--brand-([a-zA-Z-]+)
```
**Replace:**
```
--ctt-brand-$1
```

**Find core tokens:**
```regex
--core-([a-zA-Z-]+)
```
**Replace:**
```
--ctt-core-$1
```

**Find base tokens:**
```regex
--base-([a-zA-Z-]+)
```
**Replace:**
```
--ctt-base-$1
```

## Validation Checklist

After migration, verify:

- [ ] All components render correctly
- [ ] Colors match the original design
- [ ] Typography scales properly
- [ ] Spacing is consistent
- [ ] Interactive states work (hover, focus, active)
- [ ] No console errors about missing CSS variables
- [ ] Storybook stories display correctly

## Troubleshooting

### Missing Token Errors

If you see `var(--undefined-token)` in DevTools:

1. Check if the token exists in `tokens.css`
2. Verify the import path is correct
3. Look for typos in token names
4. Check if you're using a legacy token that needs updating

### Color Inconsistencies

If colors don't match after migration:

1. Compare the old and new token values
2. Check if you're using the right semantic token
3. Verify the token hierarchy (brand → core → base)

### Performance Issues

If you notice slower CSS loading:

1. Ensure you're only importing `tokens.css` once
2. Remove unused legacy token imports
3. Consider splitting large component token files

## Need Help?

- Check the main [README.md](./README.md) for token structure
- Review the updated `button-tokens.css` as an example
- Look at existing migrated components for patterns
import fs from 'fs-extra';
import path from 'path';

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please provide a component name: npm run generate:component MyComponent');
  process.exit(1);
}

const pascalCase = componentName.charAt(0).toUpperCase() + componentName.slice(1);
const kebabCase = componentName.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
const camelCase = componentName.charAt(0).toLowerCase() + componentName.slice(1);

async function generateComponent() {
  console.log(`Generating component: ${pascalCase}`);
  
  try {
    // Create component directory
    const componentDir = `src/components/${pascalCase}`;
    await fs.ensureDir(componentDir);
    
    // Create main component file (index.js)
    const componentContent = `import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { tokens } from '../../tokens/index.js';
import { typographyHelpers, getCSSVar } from '../../tokens/utils.js';

/** ${pascalCase} component */
export const ${pascalCase} = ({ variant = 'default', size = 'medium', ...props }) => {
  const styles = {
    fontFamily: tokens.typography.fontFamilies.primary,
    // Add your component styles here using design tokens
    // Example: fontSize: tokens.typography.fontSizes.base,
    // Example: color: getCSSVar('core-color-secondary-main'),
  };

  return html\`
    <div
      class=\${['ctt-${kebabCase}', \`ctt-${kebabCase}--\${variant}\`, \`ctt-${kebabCase}--\${size}\`].join(' ')}
      style=\${styleMap(styles)}
      ...=\${props}
    >
      <!-- Your component content here -->
      <slot></slot>
    </div>
  \`;
};`;

    await fs.writeFile(`${componentDir}/index.js`, componentContent);
    
    // Create Web Component wrapper
    const webComponentContent = `import { LitElement, html, css } from 'lit';
import { ${pascalCase} } from './index.js';

/**
 * ${pascalCase} Web Component
 * 
 * A web component wrapper for the ${pascalCase} component.
 * This allows the component to be used in any framework or vanilla HTML.
 * 
 * Usage:
 * <ctt-${kebabCase} variant="primary" size="medium"></ctt-${kebabCase}>
 */
class Ctt${pascalCase} extends LitElement {
  static properties = {
    variant: { type: String },
    size: { type: String },
  };

  static styles = css\`
    :host {
      display: block;
    }
  \`;

  constructor() {
    super();
    this.variant = 'default';
    this.size = 'medium';
  }

  render() {
    return ${pascalCase}({
      variant: this.variant,
      size: this.size,
    });
  }

  /**
   * Handle click events and dispatch custom events
   */
  _handleClick(event) {
    this.dispatchEvent(new CustomEvent('ctt-${kebabCase}-click', {
      bubbles: true,
      composed: true,
      detail: { 
        originalEvent: event,
        variant: this.variant,
        size: this.size
      }
    }));
  }
}

// Register custom element
if (!customElements.get('ctt-${kebabCase}')) {
  customElements.define('ctt-${kebabCase}', Ctt${pascalCase});
}

export { Ctt${pascalCase} };`;

    await fs.writeFile(`${componentDir}/${pascalCase}Element.js`, webComponentContent);
    
    // Create component CSS in the new structure
    const componentCSSContent = `/**
 * ${pascalCase} Component Styles
 * 
 * This file contains the CSS styles for the ${pascalCase} component.
 * It uses design tokens from the foundations layer.
 * 
 * Usage:
 * @import './components/${kebabCase}.css';
 */

/* ==========================================================================
   ${pascalCase.toUpperCase()} COMPONENT
   ========================================================================== */

.ctt-${kebabCase} {
  /* Base styles using design tokens */
  display: block;
  font-family: var(--ctt-base-font-family-body);
  color: var(--ctt-base-color-text-primary);
  
  /* Add your base component styles here */
  /* Example: */
  /* border-radius: var(--ctt-base-border-radius-s); */
  /* padding: var(--ctt-core-dimension-100); */
}

/* Variants */
.ctt-${kebabCase}--default {
  /* Default variant styles */
  background-color: var(--ctt-base-color-background-primary);
  border: 1px solid var(--ctt-base-color-border-primary);
}

.ctt-${kebabCase}--primary {
  /* Primary variant styles */
  background-color: var(--ctt-core-color-primary-main);
  color: var(--ctt-base-color-text-inverse);
  border: 1px solid var(--ctt-core-color-primary-main);
}

.ctt-${kebabCase}--secondary {
  /* Secondary variant styles */
  background-color: transparent;
  color: var(--ctt-core-color-secondary-main);
  border: 1px solid var(--ctt-core-color-secondary-main);
}

/* Sizes */
.ctt-${kebabCase}--small {
  /* Small size styles */
  font-size: var(--ctt-base-font-size-body-s);
  padding: var(--ctt-core-dimension-50) var(--ctt-core-dimension-100);
}

.ctt-${kebabCase}--medium {
  /* Medium size styles */
  font-size: var(--ctt-base-font-size-body-m);
  padding: var(--ctt-core-dimension-75) var(--ctt-core-dimension-150);
}

.ctt-${kebabCase}--large {
  /* Large size styles */
  font-size: var(--ctt-base-font-size-body-l);
  padding: var(--ctt-core-dimension-100) var(--ctt-core-dimension-200);
}

/* States */
.ctt-${kebabCase}:hover {
  /* Hover state */
  opacity: 0.9;
  transform: translateY(-1px);
  transition: all 0.2s ease;
}

.ctt-${kebabCase}:focus {
  /* Focus state */
  outline: 2px solid var(--ctt-base-color-border-focus);
  outline-offset: 2px;
}

.ctt-${kebabCase}:disabled,
.ctt-${kebabCase}[disabled] {
  /* Disabled state */
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .ctt-${kebabCase} {
    /* Mobile-specific adjustments */
  }
}`;

    await fs.writeFile(`src/styles/components/${kebabCase}.css`, componentCSSContent);
    
    // Update the main styles index to include the new component
    const stylesIndexPath = 'src/styles/index.css';
    const stylesIndexContent = await fs.readFile(stylesIndexPath, 'utf8');
    
    const componentImport = `@import './components/${kebabCase}.css';`;
    
    // Find the component imports section and add the new import at the end
    const componentSectionStart = stylesIndexContent.indexOf('/* Import component styles */');
    const nextSectionStart = stylesIndexContent.indexOf('\n\n/*', componentSectionStart + 1);
    
    let updatedStylesIndex;
    if (componentSectionStart !== -1 && nextSectionStart !== -1) {
      // Extract the component section
      const beforeSection = stylesIndexContent.substring(0, componentSectionStart);
      const componentSection = stylesIndexContent.substring(componentSectionStart, nextSectionStart);
      const afterSection = stylesIndexContent.substring(nextSectionStart);
      
      // Add the new import at the end of the component section
      const updatedComponentSection = componentSection + componentImport + '\n';
      updatedStylesIndex = beforeSection + updatedComponentSection + afterSection;
    } else {
      // Fallback: try to find the last component import and add after it
      const lastImportRegex = /(\/\* Import component styles \*\/[\s\S]*?)(@import\s+[^;]+;)(\s*\n)/;
      const match = stylesIndexContent.match(lastImportRegex);
      
      if (match) {
        // Find all component imports and add after the last one
        const componentImportRegex = /@import\s+'\.\/components\/[^']+\.css';/g;
        const imports = [...stylesIndexContent.matchAll(componentImportRegex)];
        
        if (imports.length > 0) {
          const lastImport = imports[imports.length - 1];
          const insertPosition = lastImport.index + lastImport[0].length;
          updatedStylesIndex = stylesIndexContent.slice(0, insertPosition) + 
                             '\n' + componentImport + 
                             stylesIndexContent.slice(insertPosition);
        } else {
          // No existing component imports, add after the comment
          updatedStylesIndex = stylesIndexContent.replace(
            /(\/\* Import component styles \*\/)/,
            `$1\n${componentImport}`
          );
        }
      } else {
        // Last resort: add after the comment
        updatedStylesIndex = stylesIndexContent.replace(
          /(\/\* Import component styles \*\/)/,
          `$1\n${componentImport}`
        );
      }
    }
    
    await fs.writeFile(stylesIndexPath, updatedStylesIndex);
    
    // Create Storybook story
    const storyContent = `import { ${pascalCase} } from '../components/${pascalCase}/index.js';

export default {
  title: 'Components/${pascalCase}',
  tags: ['autodocs'],
  render: (args) => ${pascalCase}(args),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '${pascalCase} component with multiple variants and sizes. Built with design tokens for consistency.',
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
  },
};

export const Default = {
  args: {
    variant: 'default',
    size: 'medium',
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'medium',
  },
};

export const AllSizes = {
  render: () => html\`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Small</span>
        \${${pascalCase}({ size: 'small' })}
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Medium</span>
        \${${pascalCase}({ size: 'medium' })}
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Large</span>
        \${${pascalCase}({ size: 'large' })}
      </div>
    </div>
  \`,
};

export const AllVariants = {
  render: () => html\`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Default</span>
        \${${pascalCase}({ variant: 'default' })}
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Primary</span>
        \${${pascalCase}({ variant: 'primary' })}
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <span style="font-size: 0.875rem; color: #666;">Secondary</span>
        \${${pascalCase}({ variant: 'secondary' })}
      </div>
    </div>
  \`,
};`;

    await fs.writeFile(`src/stories/${pascalCase}.stories.js`, storyContent);
    
    // Update main index.js
    const indexPath = 'src/index.js';
    const indexContent = await fs.readFile(indexPath, 'utf8');
    
    // Add component export
    const componentExport = `export { ${pascalCase} } from './components/${pascalCase}/index.js';`;
    const updatedIndex = indexContent.replace(
      /(\/\/ Export all components\n)/,
      `$1${componentExport}\n`
    );
    
    // Add web component export
    const webComponentExport = `export { Ctt${pascalCase} } from './components/${pascalCase}/${pascalCase}Element.js';`;
    const finalIndex = updatedIndex.replace(
      /(\/\/ Export web component classes\n)/,
      `$1${webComponentExport}\n`
    );
    
    await fs.writeFile(indexPath, finalIndex);
    
    console.log(`✅ ${pascalCase} component generated successfully!`);
    console.log(`\nFiles created:`);
    console.log(`  📁 src/components/${pascalCase}/`);
    console.log(`    - index.js (main component)`);
    console.log(`    - ${pascalCase}Element.js (web component wrapper)`);
    console.log(`  📄 src/styles/components/${kebabCase}.css (component styles)`);
    console.log(`  📖 src/stories/${pascalCase}.stories.js (Storybook documentation)`);
    console.log(`  🔧 Updated src/index.js (exports)`);
    console.log(`  🎨 Updated src/styles/index.css (styles import)`);
    
    console.log(`\n📂 Component Structure:`);
    console.log(`src/components/${pascalCase}/`);
    console.log(`├── index.js                    # Main component logic`);
    console.log(`└── ${pascalCase}Element.js           # Web component wrapper`);
    
    console.log(`\n🚀 Next steps:`);
    console.log(`  1. Implement your component logic in src/components/${pascalCase}/index.js`);
    console.log(`  2. Add styles in src/styles/components/${kebabCase}.css`);
    console.log(`  3. Update the Storybook story in src/stories/${pascalCase}.stories.js`);
    console.log(`  4. Run 'npm run storybook' to see your component`);
    console.log(`  5. Run 'npm run build' to include the component in the build`);
    
    console.log(`\n💡 Usage Examples:`);
    console.log(`  JavaScript: import { ${pascalCase} } from '@ctt/design-system';`);
    console.log(`  Web Component: <ctt-${kebabCase} variant="primary" size="large"></ctt-${kebabCase}>`);
    console.log(`  React: <Ctt${pascalCase} variant="primary" size="large" />`);
    
    console.log(`\n🎨 Design Token Usage:`);
    console.log(`  - CSS custom properties: var(--ctt-core-color-primary-main)`);
    console.log(`  - Utility classes: .ctt-text-primary, .ctt-bg-neutral-100`);
    console.log(`  - Token helpers: getCSSVar('core-color-primary-main')`);
    console.log(`  - Check src/styles/foundations/ for available tokens`);
    
  } catch (error) {
    console.error('❌ Error generating component:', error);
    process.exit(1);
  }
}

generateComponent();
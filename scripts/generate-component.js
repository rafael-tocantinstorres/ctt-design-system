import fs from 'fs-extra';
import path from 'path';

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please provide a component name: npm run generate:component MyComponent');
  process.exit(1);
}

const pascalCase = componentName.charAt(0).toUpperCase() + componentName.slice(1);
const kebabCase = componentName.replace(/([A-Z])/g, '-$1').toLowerCase();
const camelCase = componentName.charAt(0).toLowerCase() + componentName.slice(1);

async function generateComponent() {
  console.log(`Generating component: ${pascalCase}`);
  
  try {
    // Create component file
    const componentContent = `import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { tokens } from '../tokens/index.js';

import '../tokens/${kebabCase}-tokens.css';

/** ${pascalCase} component */
export const ${pascalCase} = ({ variant = 'default', size = 'medium', ...props }) => {
  const styles = {
    fontFamily: tokens.typography.fontFamilies.primary,
    // Add your component styles here
  };

  return html\`
    <div
      class=\${['ctt-${kebabCase}', \`ctt-${kebabCase}--\${variant}\`, \`ctt-${kebabCase}--\${size}\`].join(' ')}
      style=\${styleMap(styles)}
    >
      <!-- Your component content here -->
      <slot></slot>
    </div>
  \`;
};`;

    await fs.writeFile(`src/components/${pascalCase}.js`, componentContent);
    
    // Create component CSS tokens
    const tokensContent = `.ctt-${kebabCase} {
  /* Base styles */
  display: block;
  font-family: var(--ctt-typography-font-families-primary);
}

.ctt-${kebabCase}--default {
  /* Default variant styles */
}

.ctt-${kebabCase}--small {
  /* Small size styles */
}

.ctt-${kebabCase}--medium {
  /* Medium size styles */
}

.ctt-${kebabCase}--large {
  /* Large size styles */
}`;

    await fs.writeFile(`src/tokens/${kebabCase}-tokens.css`, tokensContent);
    
    // Create Storybook story
    const storyContent = `import { ${pascalCase} } from '../components/${pascalCase}.js';

export default {
  title: 'Components/${pascalCase}',
  tags: ['autodocs'],
  render: (args) => ${pascalCase}(args),
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
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

export const AllSizes = {
  render: () => html\`
    <div style="display: flex; gap: 1rem; align-items: center;">
      \${${pascalCase}({ size: 'small' })}
      \${${pascalCase}({ size: 'medium' })}
      \${${pascalCase}({ size: 'large' })}
    </div>
  \`,
};`;

    await fs.writeFile(`src/stories/${pascalCase}.stories.js`, storyContent);
    
    // Create Web Component wrapper
    const webComponentContent = `import { LitElement, html, css } from 'lit';
import { ${pascalCase} } from '../components/${pascalCase}.js';

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
}

// Register custom element
if (!customElements.get('ctt-${kebabCase}')) {
  customElements.define('ctt-${kebabCase}', Ctt${pascalCase});
}

export { Ctt${pascalCase} };`;

    await fs.writeFile(`src/components/${pascalCase}Element.js`, webComponentContent);
    
    // Update main index.js
    const indexPath = 'src/index.js';
    const indexContent = await fs.readFile(indexPath, 'utf8');
    
    // Add export
    const exportLine = `export { ${pascalCase} } from './components/${pascalCase}.js';`;
    const updatedIndex = indexContent.replace(
      /\/\/ Export all components/,
      `// Export all components\n${exportLine}`
    );
    
    // Add web component import and export
    const webComponentImport = `import { Ctt${pascalCase} } from './components/${pascalCase}Element.js';`;
    const webComponentExport = `export { Ctt${pascalCase} };`;
    
    const finalIndex = updatedIndex
      .replace(
        /import { CttButton } from/,
        `${webComponentImport}\nimport { CttButton } from`
      )
      .replace(
        /export { CttButton };/,
        `${webComponentExport}\nexport { CttButton };`
      );
    
    await fs.writeFile(indexPath, finalIndex);
    
    console.log(`✅ ${pascalCase} component generated successfully!`);
    console.log(`Files created:`);
    console.log(`  - src/components/${pascalCase}.js`);
    console.log(`  - src/components/${pascalCase}Element.js`);
    console.log(`  - src/tokens/${kebabCase}-tokens.css`);
    console.log(`  - src/stories/${pascalCase}.stories.js`);
    console.log(`  - Updated src/index.js`);
    console.log(`\\nNext steps:`);
    console.log(`  1. Implement your component logic in src/components/${pascalCase}.js`);
    console.log(`  2. Add styles in src/tokens/${kebabCase}-tokens.css`);
    console.log(`  3. Update the Storybook story in src/stories/${pascalCase}.stories.js`);
    console.log(`  4. Run 'npm run storybook' to see your component`);
    
  } catch (error) {
    console.error('❌ Error generating component:', error);
    process.exit(1);
  }
}

generateComponent();
import "./Colors.css";

export default {
  title: 'Design System/Colors',
  parameters: {
    docs: {
      description: {
        component: 'Color palette and tokens for the CTT Design System.',
      },
    },
  },
};

// Overview
export const Overview = () => `
  <div class="colors-container">
    <div class="colors-section">
      <h1>Color System</h1>
      <p>Our color system provides a consistent palette that ensures accessibility, brand consistency, and visual hierarchy across all interfaces.</p>
      
      <div class="color-overview">
        <div class="overview-item">
          <h3>Primary Colors</h3>
          <p>Main brand identity colors for key interactive elements</p>
        </div>
        <div class="overview-item">
          <h3>Secondary Colors</h3>
          <p>Supporting colors that complement the primary palette</p>
        </div>
        <div class="overview-item">
          <h3>Neutral Colors</h3>
          <p>Foundation colors for backgrounds, borders, and subtle UI elements</p>
        </div>
        <div class="overview-item">
          <h3>Status Colors</h3>
          <p>Semantic colors that communicate different states and feedback</p>
        </div>
      </div>
    </div>
  </div>
`;

Overview.storyName = 'Color System Overview';

// Brand Colors - Primary Scale
export const BrandPrimary = () => `
  <div class="colors-container">
    <div class="colors-section">
      <h2>Brand Primary Colors</h2>
      <p>Complete primary color scale from the brand palette. These are the raw color values used throughout the design system.</p>
      
      <div class="color-grid">
        <div class="color-card">
          <div class="color-swatch brand-primary-100"></div>
          <div class="color-info">
            <h3>Primary 100</h3>
            <code>--ctt-brand-primary-100</code>
            <span class="color-value">#F9CCD3</span>
            <div class="color-usage">
              <strong>Usage:</strong> Light backgrounds, subtle highlights
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-primary-200"></div>
          <div class="color-info">
            <h3>Primary 200</h3>
            <code>--ctt-brand-primary-200</code>
            <span class="color-value">#F299A7</span>
            <div class="color-usage">
              <strong>Usage:</strong> Error light backgrounds
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-primary-300"></div>
          <div class="color-info">
            <h3>Primary 300</h3>
            <code>--ctt-brand-primary-300</code>
            <span class="color-value">#EC667C</span>
            <div class="color-usage">
              <strong>Usage:</strong> Medium tint variations
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-primary-400"></div>
          <div class="color-info">
            <h3>Primary 400</h3>
            <code>--ctt-brand-primary-400</code>
            <span class="color-value">#E53350</span>
            <div class="color-usage">
              <strong>Usage:</strong> Core primary light
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-primary-500"></div>
          <div class="color-info">
            <h3>Primary 500</h3>
            <code>--ctt-brand-primary-500</code>
            <span class="color-value">#DF0024</span>
            <div class="color-usage">
              <strong>Usage:</strong> Core primary main, focus states
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-primary-600"></div>
          <div class="color-info">
            <h3>Primary 600</h3>
            <code>--ctt-brand-primary-600</code>
            <span class="color-value">#C7001E</span>
            <div class="color-usage">
              <strong>Usage:</strong> Core primary dark, selected borders
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-primary-700"></div>
          <div class="color-info">
            <h3>Primary 700</h3>
            <code>--ctt-brand-primary-700</code>
            <span class="color-value">#B10018</span>
            <div class="color-usage">
              <strong>Usage:</strong> Error main, pressed states
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

BrandPrimary.storyName = 'Brand Primary Scale';

// Core Colors - Semantic Usage
export const PrimaryColors = () => `
  <div class="colors-container">
    <div class="colors-section">
      <h2>Core Primary Colors</h2>
      <p>Semantic primary colors mapped from the brand palette for consistent usage across components.</p>
      
      <div class="color-grid">
        <div class="color-card">
          <div class="color-swatch primary-light"></div>
          <div class="color-info">
            <h3>Primary Light</h3>
            <code>--ctt-core-color-primary-light</code>
            <span class="color-value">#E53350</span>
            <div class="color-usage">
              <strong>Usage:</strong> Hover states, light backgrounds
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch primary-main"></div>
          <div class="color-info">
            <h3>Primary Main</h3>
            <code>--ctt-core-color-primary-main</code>
            <span class="color-value">#DF0024</span>
            <div class="color-usage">
              <strong>Usage:</strong> Primary buttons, links, active states
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch primary-dark"></div>
          <div class="color-info">
            <h3>Primary Dark</h3>
            <code>--ctt-core-color-primary-dark</code>
            <span class="color-value">#C7001E</span>
            <div class="color-usage">
              <strong>Usage:</strong> Pressed states, emphasis
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

PrimaryColors.storyName = 'Core Primary Colors';

// Brand Colors - Secondary Scale
export const BrandSecondary = () => `
  <div class="colors-container">
    <div class="colors-section">
      <h2>Brand Secondary Colors</h2>
      <p>Complete secondary color scale from the brand palette. These neutral colors provide the foundation for text and UI elements.</p>
      
      <div class="color-grid">
        <div class="color-card">
          <div class="color-swatch brand-secondary-100"></div>
          <div class="color-info">
            <h3>Secondary 100</h3>
            <code>--ctt-brand-secondary-100</code>
            <span class="color-value">#CCCCCC</span>
            <div class="color-usage">
              <strong>Usage:</strong> Neutral 500, disabled text
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-secondary-200"></div>
          <div class="color-info">
            <h3>Secondary 200</h3>
            <code>--ctt-brand-secondary-200</code>
            <span class="color-value">#99999D</span>
            <div class="color-usage">
              <strong>Usage:</strong> Neutral 600, borders, tertiary text
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-secondary-300"></div>
          <div class="color-info">
            <h3>Secondary 300</h3>
            <code>--ctt-brand-secondary-300</code>
            <span class="color-value">#666666</span>
            <div class="color-usage">
              <strong>Usage:</strong> Core secondary light, secondary text
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-secondary-400"></div>
          <div class="color-info">
            <h3>Secondary 400</h3>
            <code>--ctt-brand-secondary-400</code>
            <span class="color-value">#333333</span>
            <div class="color-usage">
              <strong>Usage:</strong> Core secondary main, primary text
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-secondary-500"></div>
          <div class="color-info">
            <h3>Secondary 500</h3>
            <code>--ctt-brand-secondary-500</code>
            <span class="color-value">#000000</span>
            <div class="color-usage">
              <strong>Usage:</strong> Core secondary dark, high contrast text
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

BrandSecondary.storyName = 'Brand Secondary Scale';

// Core Colors - Secondary
export const SecondaryColors = () => `
  <div class="colors-container">
    <div class="colors-section">
      <h2>Core Secondary Colors</h2>
      <p>Semantic secondary colors mapped from the brand palette for text and neutral UI elements.</p>
      
      <div class="color-grid">
        <div class="color-card">
          <div class="color-swatch secondary-light"></div>
          <div class="color-info">
            <h3>Secondary Light</h3>
            <code>--ctt-core-color-secondary-light</code>
            <span class="color-value">#666666</span>
            <div class="color-usage">
              <strong>Usage:</strong> Secondary text, disabled states
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch secondary-main"></div>
          <div class="color-info">
            <h3>Secondary Main</h3>
            <code>--ctt-core-color-secondary-main</code>
            <span class="color-value">#333333</span>
            <div class="color-usage">
              <strong>Usage:</strong> Primary text, secondary buttons
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch secondary-dark"></div>
          <div class="color-info">
            <h3>Secondary Dark</h3>
            <code>--ctt-core-color-secondary-dark</code>
            <span class="color-value">#000000</span>
            <div class="color-usage">
              <strong>Usage:</strong> Headings, high contrast text
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

SecondaryColors.storyName = 'Secondary Colors';

// Neutral Colors
export const NeutralColors = () => `
  <div class="colors-container">
    <div class="colors-section">
      <h2>Neutral Colors</h2>
      <p>Neutral colors provide the foundation for backgrounds, borders, and subtle UI elements. Complete scale from white to black.</p>
      
      <div class="color-grid">
        <div class="color-card">
          <div class="color-swatch neutral-100"></div>
          <div class="color-info">
            <h3>Neutral 100</h3>
            <code>--ctt-core-color-neutral-100</code>
            <span class="color-value">#FFFFFF</span>
            <div class="color-usage">
              <strong>Usage:</strong> Page backgrounds, cards, inverse text
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch neutral-200"></div>
          <div class="color-info">
            <h3>Neutral 200</h3>
            <code>--ctt-core-color-neutral-200</code>
            <span class="color-value">#F7F7F7</span>
            <div class="color-usage">
              <strong>Usage:</strong> Cloudy backgrounds, secondary surfaces
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch neutral-300"></div>
          <div class="color-info">
            <h3>Neutral 300</h3>
            <code>--ctt-core-color-neutral-300</code>
            <span class="color-value">#F2F2F2</span>
            <div class="color-usage">
              <strong>Usage:</strong> Disabled backgrounds, tertiary surfaces
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch neutral-400"></div>
          <div class="color-info">
            <h3>Neutral 400</h3>
            <code>--ctt-core-color-neutral-400</code>
            <span class="color-value">#E9E5E5</span>
            <div class="color-usage">
              <strong>Usage:</strong> Primary borders, separators
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch neutral-500"></div>
          <div class="color-info">
            <h3>Neutral 500</h3>
            <code>--ctt-core-color-neutral-500</code>
            <span class="color-value">#CCCCCC</span>
            <div class="color-usage">
              <strong>Usage:</strong> Secondary borders, disabled text
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch neutral-600"></div>
          <div class="color-info">
            <h3>Neutral 600</h3>
            <code>--ctt-core-color-neutral-600</code>
            <span class="color-value">#99999D</span>
            <div class="color-usage">
              <strong>Usage:</strong> Default borders, tertiary text
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch neutral-700"></div>
          <div class="color-info">
            <h3>Neutral 700</h3>
            <code>--ctt-core-color-neutral-700</code>
            <span class="color-value">#666666</span>
            <div class="color-usage">
              <strong>Usage:</strong> Secondary text, icons
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch neutral-800"></div>
          <div class="color-info">
            <h3>Neutral 800</h3>
            <code>--ctt-core-color-neutral-800</code>
            <span class="color-value">#333333</span>
            <div class="color-usage">
              <strong>Usage:</strong> Primary text, headings
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch neutral-900"></div>
          <div class="color-info">
            <h3>Neutral 900</h3>
            <code>--ctt-core-color-neutral-900</code>
            <span class="color-value">#000000</span>
            <div class="color-usage">
              <strong>Usage:</strong> High contrast text, inverse backgrounds
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

NeutralColors.storyName = 'Neutral Colors';

// Brand Colors - Teal Scale
export const BrandTeal = () => `
  <div class="colors-container">
    <div class="colors-section">
      <h2>Brand Teal Colors</h2>
      <p>Teal color scale used for informative states and secondary accents.</p>
      
      <div class="color-grid">
        <div class="color-card">
          <div class="color-swatch brand-teal-100"></div>
          <div class="color-info">
            <h3>Teal 100</h3>
            <code>--ctt-brand-teal-100</code>
            <span class="color-value">#CCF2F0</span>
            <div class="color-usage">
              <strong>Usage:</strong> Light informative backgrounds
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-teal-200"></div>
          <div class="color-info">
            <h3>Teal 200</h3>
            <code>--ctt-brand-teal-200</code>
            <span class="color-value">#99E5E1</span>
            <div class="color-usage">
              <strong>Usage:</strong> Core informative light
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-teal-300"></div>
          <div class="color-info">
            <h3>Teal 300</h3>
            <code>--ctt-brand-teal-300</code>
            <span class="color-value">#66D8D2</span>
            <div class="color-usage">
              <strong>Usage:</strong> Medium teal variations
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-teal-400"></div>
          <div class="color-info">
            <h3>Teal 400</h3>
            <code>--ctt-brand-teal-400</code>
            <span class="color-value">#33CBC3</span>
            <div class="color-usage">
              <strong>Usage:</strong> Core informative main
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-teal-500"></div>
          <div class="color-info">
            <h3>Teal 500</h3>
            <code>--ctt-brand-teal-500</code>
            <span class="color-value">#00BEB4</span>
            <div class="color-usage">
              <strong>Usage:</strong> Strong teal accents
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-teal-600"></div>
          <div class="color-info">
            <h3>Teal 600</h3>
            <code>--ctt-brand-teal-600</code>
            <span class="color-value">#009C97</span>
            <div class="color-usage">
              <strong>Usage:</strong> Dark teal variations
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

BrandTeal.storyName = 'Brand Teal Scale';

// Brand Colors - Green Scale
export const BrandGreen = () => `
  <div class="colors-container">
    <div class="colors-section">
      <h2>Brand Green Colors</h2>
      <p>Green color scale used for success states and positive feedback.</p>
      
      <div class="color-grid">
        <div class="color-card">
          <div class="color-swatch brand-green-100"></div>
          <div class="color-info">
            <h3>Green 100</h3>
            <code>--ctt-brand-green-100</code>
            <span class="color-value">#F0F6DA</span>
            <div class="color-usage">
              <strong>Usage:</strong> Light success backgrounds
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-green-200"></div>
          <div class="color-info">
            <h3>Green 200</h3>
            <code>--ctt-brand-green-200</code>
            <span class="color-value">#E1EDB5</span>
            <div class="color-usage">
              <strong>Usage:</strong> Core success light
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-green-300"></div>
          <div class="color-info">
            <h3>Green 300</h3>
            <code>--ctt-brand-green-300</code>
            <span class="color-value">#D2E490</span>
            <div class="color-usage">
              <strong>Usage:</strong> Medium green variations
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-green-400"></div>
          <div class="color-info">
            <h3>Green 400</h3>
            <code>--ctt-brand-green-400</code>
            <span class="color-value">#C3DB6B</span>
            <div class="color-usage">
              <strong>Usage:</strong> Core success main
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-green-500"></div>
          <div class="color-info">
            <h3>Green 500</h3>
            <code>--ctt-brand-green-500</code>
            <span class="color-value">#B4D246</span>
            <div class="color-usage">
              <strong>Usage:</strong> Strong green accents
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-green-600"></div>
          <div class="color-info">
            <h3>Green 600</h3>
            <code>--ctt-brand-green-600</code>
            <span class="color-value">#A5C81F</span>
            <div class="color-usage">
              <strong>Usage:</strong> Dark green variations
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

BrandGreen.storyName = 'Brand Green Scale';

// Brand Colors - Yellow Scale
export const BrandYellow = () => `
  <div class="colors-container">
    <div class="colors-section">
      <h2>Brand Yellow Colors</h2>
      <p>Yellow color scale used for warning states and attention-grabbing elements.</p>
      
      <div class="color-grid">
        <div class="color-card">
          <div class="color-swatch brand-yellow-100"></div>
          <div class="color-info">
            <h3>Yellow 100</h3>
            <code>--ctt-brand-yellow-100</code>
            <span class="color-value">#FFFBCC</span>
            <div class="color-usage">
              <strong>Usage:</strong> Light warning backgrounds
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-yellow-200"></div>
          <div class="color-info">
            <h3>Yellow 200</h3>
            <code>--ctt-brand-yellow-200</code>
            <span class="color-value">#FFF799</span>
            <div class="color-usage">
              <strong>Usage:</strong> Core warning light
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-yellow-300"></div>
          <div class="color-info">
            <h3>Yellow 300</h3>
            <code>--ctt-brand-yellow-300</code>
            <span class="color-value">#FFF366</span>
            <div class="color-usage">
              <strong>Usage:</strong> Medium yellow variations
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-yellow-400"></div>
          <div class="color-info">
            <h3>Yellow 400</h3>
            <code>--ctt-brand-yellow-400</code>
            <span class="color-value">#FFEF33</span>
            <div class="color-usage">
              <strong>Usage:</strong> Core warning main
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-yellow-500"></div>
          <div class="color-info">
            <h3>Yellow 500</h3>
            <code>--ctt-brand-yellow-500</code>
            <span class="color-value">#FFEB00</span>
            <div class="color-usage">
              <strong>Usage:</strong> Strong yellow accents
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-yellow-600"></div>
          <div class="color-info">
            <h3>Yellow 600</h3>
            <code>--ctt-brand-yellow-600</code>
            <span class="color-value">#E6D400</span>
            <div class="color-usage">
              <strong>Usage:</strong> Dark yellow variations
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

BrandYellow.storyName = 'Brand Yellow Scale';

// Brand Colors - Purple Scale
export const BrandPurple = () => `
  <div class="colors-container">
    <div class="colors-section">
      <h2>Brand Purple Colors</h2>
      <p>Purple color scale used for "new" states and special highlights.</p>
      
      <div class="color-grid">
        <div class="color-card">
          <div class="color-swatch brand-purple-100"></div>
          <div class="color-info">
            <h3>Purple 100</h3>
            <code>--ctt-brand-purple-100</code>
            <span class="color-value">#E6D2E6</span>
            <div class="color-usage">
              <strong>Usage:</strong> Light purple backgrounds
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-purple-200"></div>
          <div class="color-info">
            <h3>Purple 200</h3>
            <code>--ctt-brand-purple-200</code>
            <span class="color-value">#CDA5CD</span>
            <div class="color-usage">
              <strong>Usage:</strong> Core new light
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-purple-300"></div>
          <div class="color-info">
            <h3>Purple 300</h3>
            <code>--ctt-brand-purple-300</code>
            <span class="color-value">#B478B4</span>
            <div class="color-usage">
              <strong>Usage:</strong> Medium purple variations
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-purple-400"></div>
          <div class="color-info">
            <h3>Purple 400</h3>
            <code>--ctt-brand-purple-400</code>
            <span class="color-value">#9B4B9B</span>
            <div class="color-usage">
              <strong>Usage:</strong> Core new main
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-purple-500"></div>
          <div class="color-info">
            <h3>Purple 500</h3>
            <code>--ctt-brand-purple-500</code>
            <span class="color-value">#821E82</span>
            <div class="color-usage">
              <strong>Usage:</strong> Strong purple accents
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch brand-purple-600"></div>
          <div class="color-info">
            <h3>Purple 600</h3>
            <code>--ctt-brand-purple-600</code>
            <span class="color-value">#690B69</span>
            <div class="color-usage">
              <strong>Usage:</strong> Dark purple variations
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

BrandPurple.storyName = 'Brand Purple Scale';

// Status Colors
export const StatusColors = () => `
  <div class="colors-container">
    <div class="colors-section">
      <h2>Status Colors</h2>
      <p>Status colors communicate different states and feedback to users. These are semantic colors mapped from the brand palette.</p>
      
      <div class="color-grid">
        <div class="color-card">
          <div class="color-swatch success-light"></div>
          <div class="color-info">
            <h3>Success Light</h3>
            <code>--ctt-core-color-success-light</code>
            <span class="color-value">#E1EDB5</span>
            <div class="color-usage">
              <strong>Usage:</strong> Success backgrounds, subtle indicators
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch success-main"></div>
          <div class="color-info">
            <h3>Success Main</h3>
            <code>--ctt-core-color-success-main</code>
            <span class="color-value">#C3DB6B</span>
            <div class="color-usage">
              <strong>Usage:</strong> Success messages, completed states
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch warning-light"></div>
          <div class="color-info">
            <h3>Warning Light</h3>
            <code>--ctt-core-color-warning-light</code>
            <span class="color-value">#FFF799</span>
            <div class="color-usage">
              <strong>Usage:</strong> Warning backgrounds, highlights
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch warning-main"></div>
          <div class="color-info">
            <h3>Warning Main</h3>
            <code>--ctt-core-color-warning-main</code>
            <span class="color-value">#FFEF33</span>
            <div class="color-usage">
              <strong>Usage:</strong> Warning messages, caution states
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch error-light"></div>
          <div class="color-info">
            <h3>Error Light</h3>
            <code>--ctt-core-color-error-light</code>
            <span class="color-value">#F299A7</span>
            <div class="color-usage">
              <strong>Usage:</strong> Error backgrounds, validation
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch error-main"></div>
          <div class="color-info">
            <h3>Error Main</h3>
            <code>--ctt-core-color-error-main</code>
            <span class="color-value">#B10018</span>
            <div class="color-usage">
              <strong>Usage:</strong> Error messages, destructive actions
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch informative-light"></div>
          <div class="color-info">
            <h3>Informative Light</h3>
            <code>--ctt-core-color-informative-light</code>
            <span class="color-value">#99E5E1</span>
            <div class="color-usage">
              <strong>Usage:</strong> Info backgrounds, tooltips
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch informative-main"></div>
          <div class="color-info">
            <h3>Informative Main</h3>
            <code>--ctt-core-color-informative-main</code>
            <span class="color-value">#33CBC3</span>
            <div class="color-usage">
              <strong>Usage:</strong> Info messages, help text
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch new-light"></div>
          <div class="color-info">
            <h3>New Light</h3>
            <code>--ctt-core-color-new-light</code>
            <span class="color-value">#CDA5CD</span>
            <div class="color-usage">
              <strong>Usage:</strong> New feature backgrounds, highlights
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch new-main"></div>
          <div class="color-info">
            <h3>New Main</h3>
            <code>--ctt-core-color-new-main</code>
            <span class="color-value">#9B4B9B</span>
            <div class="color-usage">
              <strong>Usage:</strong> New feature indicators, badges
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

StatusColors.storyName = 'Status Colors';

// Base Colors - Component Level
export const BaseColors = () => `
  <div class="colors-container">
    <div class="colors-section">
      <h2>Base Colors</h2>
      <p>Component-level semantic colors that provide specific usage contexts for pages, containers, text, backgrounds, and borders.</p>
      
      <h3>Page Colors</h3>
      <div class="color-grid">
        <div class="color-card">
          <div class="color-swatch base-page-bg-default"></div>
          <div class="color-info">
            <h3>Page Background Default</h3>
            <code>--ctt-base-color-page-bg-default</code>
            <span class="color-value">#FFFFFF</span>
            <div class="color-usage">
              <strong>Usage:</strong> Default page backgrounds
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch base-page-bg-cloudy"></div>
          <div class="color-info">
            <h3>Page Background Cloudy</h3>
            <code>--ctt-base-color-page-bg-cloudy</code>
            <span class="color-value">#F7F7F7</span>
            <div class="color-usage">
              <strong>Usage:</strong> Alternative page backgrounds
            </div>
          </div>
        </div>
      </div>

      <h3>Container Colors</h3>
      <div class="color-grid">
        <div class="color-card">
          <div class="color-swatch base-container-bg-default"></div>
          <div class="color-info">
            <h3>Container Background Default</h3>
            <code>--ctt-base-color-container-bg-default</code>
            <span class="color-value">#FFFFFF</span>
            <div class="color-usage">
              <strong>Usage:</strong> Default container backgrounds
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch base-container-bg-disabled"></div>
          <div class="color-info">
            <h3>Container Background Disabled</h3>
            <code>--ctt-base-color-container-bg-disabled</code>
            <span class="color-value">#F2F2F2</span>
            <div class="color-usage">
              <strong>Usage:</strong> Disabled container backgrounds
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch base-container-border-default"></div>
          <div class="color-info">
            <h3>Container Border Default</h3>
            <code>--ctt-base-color-container-border-default</code>
            <span class="color-value">#99999D</span>
            <div class="color-usage">
              <strong>Usage:</strong> Default container borders
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch base-container-border-selected"></div>
          <div class="color-info">
            <h3>Container Border Selected</h3>
            <code>--ctt-base-color-container-border-selected</code>
            <span class="color-value">#C7001E</span>
            <div class="color-usage">
              <strong>Usage:</strong> Selected container borders
            </div>
          </div>
        </div>
      </div>

      <h3>Text Colors</h3>
      <div class="color-grid">
        <div class="color-card">
          <div class="color-swatch base-text-primary"></div>
          <div class="color-info">
            <h3>Text Primary</h3>
            <code>--ctt-base-color-text-primary</code>
            <span class="color-value">#333333</span>
            <div class="color-usage">
              <strong>Usage:</strong> Primary text content
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch base-text-secondary"></div>
          <div class="color-info">
            <h3>Text Secondary</h3>
            <code>--ctt-base-color-text-secondary</code>
            <span class="color-value">#666666</span>
            <div class="color-usage">
              <strong>Usage:</strong> Secondary text content
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch base-text-tertiary"></div>
          <div class="color-info">
            <h3>Text Tertiary</h3>
            <code>--ctt-base-color-text-tertiary</code>
            <span class="color-value">#99999D</span>
            <div class="color-usage">
              <strong>Usage:</strong> Tertiary text, captions
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch base-text-inverse"></div>
          <div class="color-info">
            <h3>Text Inverse</h3>
            <code>--ctt-base-color-text-inverse</code>
            <span class="color-value">#FFFFFF</span>
            <div class="color-usage">
              <strong>Usage:</strong> Text on dark backgrounds
            </div>
          </div>
        </div>
      </div>

      <h3>Border Colors</h3>
      <div class="color-grid">
        <div class="color-card">
          <div class="color-swatch base-border-primary"></div>
          <div class="color-info">
            <h3>Border Primary</h3>
            <code>--ctt-base-color-border-primary</code>
            <span class="color-value">#E9E5E5</span>
            <div class="color-usage">
              <strong>Usage:</strong> Primary borders, separators
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch base-border-focus"></div>
          <div class="color-info">
            <h3>Border Focus</h3>
            <code>--ctt-base-color-border-focus</code>
            <span class="color-value">#DF0024</span>
            <div class="color-usage">
              <strong>Usage:</strong> Focus states, active borders
            </div>
          </div>
        </div>
        
        <div class="color-card">
          <div class="color-swatch base-border-error"></div>
          <div class="color-info">
            <h3>Border Error</h3>
            <code>--ctt-base-color-border-error</code>
            <span class="color-value">#B10018</span>
            <div class="color-usage">
              <strong>Usage:</strong> Error states, validation
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

BaseColors.storyName = 'Base Colors';

// Usage Guidelines
export const ColorUsageGuidelines = () => `
  <div class="colors-container">
    <div class="colors-section">
      <h2>Color Usage Guidelines</h2>
      
      <div class="usage-guidelines">
        <div class="guideline-item">
          <h4>Accessibility</h4>
          <p>All color combinations meet WCAG AA contrast requirements. Use the provided color tokens to ensure accessibility compliance. Test color combinations with accessibility tools before implementation.</p>
        </div>
        
        <div class="guideline-item">
          <h4>Semantic Usage</h4>
          <p>Use status colors consistently across your application:</p>
          <ul>
            <li><strong>Green:</strong> Success, completion, positive actions</li>
            <li><strong>Red:</strong> Errors, warnings, destructive actions</li>
            <li><strong>Orange:</strong> Warnings, caution, pending states</li>
            <li><strong>Blue:</strong> Information, help, neutral actions</li>
          </ul>
        </div>
        
        <div class="guideline-item">
          <h4>Brand Consistency</h4>
          <p>Primary colors should be used for key brand elements and call-to-action buttons. Secondary colors support the primary palette and provide hierarchy. Maintain consistent usage across all touchpoints.</p>
        </div>
        
        <div class="guideline-item">
          <h4>Implementation</h4>
          <p>Always use CSS custom properties (tokens) instead of hardcoded color values:</p>
          <ul>
            <li>Ensures consistency across the design system</li>
            <li>Makes maintenance and updates easier</li>
            <li>Supports theming and customization</li>
            <li>Provides better developer experience</li>
          </ul>
        </div>
        
        <div class="guideline-item">
          <h4>Color Combinations</h4>
          <p>Test color combinations for accessibility and readability. Avoid using color alone to convey information - always provide additional visual or textual cues for users with color vision deficiencies.</p>
        </div>
      </div>
    </div>
  </div>
`;

ColorUsageGuidelines.storyName = 'Usage Guidelines';
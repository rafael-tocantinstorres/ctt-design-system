import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';

const isProduction = process.env.NODE_ENV === 'production';

export default [
  // ES Module build
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true
    },
    plugins: [
      nodeResolve(),
      postcss({
        extract: true,
        minimize: isProduction
      }),
      copy({
        targets: [
          { src: 'src/tokens/*.css', dest: 'dist/tokens' },
          { src: 'src/assets/fonts.css', dest: 'dist/assets' },
          { src: 'src/assets/fonts-standalone.css', dest: 'dist/assets' },
          { src: 'src/assets/fonts/*', dest: 'dist/assets/fonts' },
          // Copy fonts to dist/fonts as well for backward compatibility
          { src: 'src/assets/fonts/*', dest: 'dist/fonts' },
          // Copy package-optimized fonts.css to dist root
          { src: 'src/fonts-package.css', dest: 'dist', rename: 'fonts.css' },
          { src: 'README.md', dest: 'dist' }
        ]
      }),
      isProduction && terser()
    ].filter(Boolean),
    external: ['lit', 'lit/directives/style-map.js']
  },
  // CommonJS build
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    plugins: [
      nodeResolve(),
      postcss({
        extract: true,
        minimize: isProduction
      }),
      isProduction && terser()
    ].filter(Boolean),
    external: ['lit', 'lit/directives/style-map.js']
  },
  // React wrappers build
  {
    input: 'src/react/index.js',
    output: [
      {
        file: 'dist/react/index.esm.js',
        format: 'es',
        sourcemap: true
      },
      {
        file: 'dist/react/index.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'named'
      }
    ],
    plugins: [
      nodeResolve(),
      postcss({
        extract: false,
        inject: false,
        minimize: isProduction
      }),
      copy({
        targets: [
          { src: 'src/react/index.d.ts', dest: 'dist/react' },
          { src: 'src/jsx.d.ts', dest: 'dist' }
        ]
      }),
      isProduction && terser()
    ].filter(Boolean),
    external: ['react', 'react-dom', 'lit', 'lit/directives/style-map.js', 'lit/directives/unsafe-html.js']
  },
  // Tokens-only build
  {
    input: 'src/tokens/index.js',
    output: [
      {
        file: 'dist/tokens/index.esm.js',
        format: 'es',
        sourcemap: true
      },
      {
        file: 'dist/tokens/index.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'named'
      }
    ],
    plugins: [
      nodeResolve(),
      isProduction && terser()
    ].filter(Boolean)
  }
];
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
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
          { src: 'src/assets/fonts/*', dest: 'dist/assets/fonts' },
          { src: 'src/index.d.ts', dest: 'dist' },
          { src: 'src/jsx.d.ts', dest: 'dist' },
          { src: 'README.md', dest: 'dist' }
        ]
      }),
      isProduction && terser()
    ].filter(Boolean),
    external: ['lit', 'lit/directives/style-map.js', 'react']
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
    external: ['lit', 'lit/directives/style-map.js', 'react']
  },
  // React components build
  {
    input: 'src/react.tsx',
    output: [
      {
        file: 'dist/react.esm.js',
        format: 'es',
        sourcemap: true
      },
      {
        file: 'dist/react.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'named'
      }
    ],
    plugins: [
      nodeResolve(),
      typescript({
        target: 'es2017',
        module: 'esnext',
        declaration: true,
        declarationDir: 'dist',
        declarationMap: true,
        exclude: ['**/*.spec.ts', '**/*.test.ts']
      }),
      copy({
        targets: [
          { src: 'src/jsx.d.ts', dest: 'dist', rename: 'react.d.ts' }
        ]
      }),
      isProduction && terser()
    ].filter(Boolean),
    external: ['react', 'lit', 'lit/directives/style-map.js']
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
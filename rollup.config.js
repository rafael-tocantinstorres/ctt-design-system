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
      dir: 'dist/esm',
      format: 'es',
      sourcemap: true,
      entryFileNames: 'index.js',
      chunkFileNames: '[name]-[hash].js'
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
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
      entryFileNames: 'index.js',
      chunkFileNames: '[name]-[hash].js'
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
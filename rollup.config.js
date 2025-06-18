import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

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
      copy({
        targets: [
          { src: 'src/tokens/*.css', dest: 'dist/tokens' },
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
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: './src/cookie.ts',
    output: [
      {
        format: 'umd',
        name: 'cookie',
        file: 'dist/cookie.js',
        exports: 'default'
      }
    ],
    plugins: [typescript({}), terser({ compress: { drop_console: false } })]
  },
  {
    input: './src/cookie.ts',
    output: [
      {
        format: 'cjs',
        file: 'dist/cookie.cjs',
        exports: 'default'
      },
      {
        format: 'esm',
        file: 'dist/cookie.mjs'
      }
    ],
    plugins: [typescript({})]
  }
]

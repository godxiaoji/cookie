import typescript from 'rollup-plugin-typescript2'

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
    plugins: [typescript({})]
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

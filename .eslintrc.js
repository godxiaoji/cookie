module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: 'eslint:recommended',
  globals: {
    define: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  rules: {
    strict: 0,
    'newline-per-chained-call': 0,
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}

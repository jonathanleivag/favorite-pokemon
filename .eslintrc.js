module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['next/core-web-vitals', 'plugin:react/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    indent: 'off',
    'no-undef': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'no-warning-comments': [
      'warn',
      { terms: ['todo', 'fixme', 'xxx', '**', '!', '?'], location: 'start' }
    ]
  }
}

module.exports = {
  root: true,
  env: {
    browser: true,
    es2024: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: '18' },
  },
  rules: {
    // Allow unused vars prefixed with _ (common pattern for destructuring)
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    // Framer Motion requires prop spreading — allow it
    'react/prop-types': 'off',
    // Allow target="_blank" with rel="noopener noreferrer" (we always add both)
    'jsx-a11y/anchor-is-valid': ['warn', { components: ['a'], specialLink: ['href'] }],
  },
}

module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
  },
};

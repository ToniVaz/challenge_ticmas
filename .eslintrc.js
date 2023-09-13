module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['prettier', '@typescript-eslint'],
  extends: ['standard-with-typescript', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};

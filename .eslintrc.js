module.exports = {
    root: true,
    env: {
      node: true,
      es6: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
    },
    overrides: [
      {
        files: ['**/*.js'],
        parser: 'espree',
        parserOptions: {
          ecmaVersion: 2018,
        },
        rules: {
          '@typescript-eslint/no-var-requires': 'off',
          '@typescript-eslint/explicit-module-boundary-types': 'off',
          '@typescript-eslint/no-empty-function': 'off',
          '@typescript-eslint/ban-ts-comment': 'off',
        },
      },
    ],
  };
  
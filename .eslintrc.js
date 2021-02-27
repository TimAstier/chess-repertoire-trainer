module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'storytel',
    'prettier',
  ],
  plugins: ['chai-friendly', 'react-hooks', 'simple-import-sort'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    // This setting is required if you want to use rules which require type information.
    // But it adds a significant time overhead
    // project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Rules to keep
    'simple-import-sort/sort': 'error',
    'import/no-useless-path-segments': 'off',
    'no-console': ['warn'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'no-unused-vars': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    'react/prop-types': ['error', { skipUndeclared: true }],
    camelcase: ['error', { allow: ['^UNSAFE_'] }],
    'prefer-template': 1,
    'no-lonely-if': 'error',
    'prefer-destructuring': ['error', { object: true, array: true }],
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
  env: {
    jest: true,
  },
};

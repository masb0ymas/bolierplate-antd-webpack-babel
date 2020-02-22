module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['react', 'module-resolver', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    semi: 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/no-danger': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/label-has-for': 'off',
    'react/state-in-constructor': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-filename-extension': 'off',
    'module-resolver/use-alias': 2,
    'import/no-unresolved': [
      2,
      {
        ignore: [
          'components',
          'containers',
          'fields',
          'stores',
          'styles',
          'utils',
          'views',
          'pages',
          'routes',
          'constants',
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}

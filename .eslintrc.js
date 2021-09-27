module.exports = {
  plugins: ['import'],
  extends: ['@react-native-community'],
  parser: 'babel-eslint',
  rules: {
    semi: 0,
    radix: 0,
    'no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'no-console': 'warn',
    'no-shadow': 0,
    'comma-dangle': 0,
    'no-constant-condition': ['error', { checkLoops: false }],
    'prettier/prettier': [
      2,
      {
        singleQuote: true,
        semi: false,
        jsxBracketSameLine: true,
        trailingComma: 'none'
      }
    ],
    'max-len': [
      2,
      {
        code: 130,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,
    'react-native/no-inline-styles': 0,
    'import/no-unresolved': 2,
    'import/named': 2,
    'import/namespace': 2,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: false
      }
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ]
      }
    ]
  },
  settings: {
    'import/ignore': ['react-native']
  }
}

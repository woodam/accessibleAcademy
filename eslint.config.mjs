import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHookPlugin from 'eslint-plugin-react-hooks'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'

export default [
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: [
      'src/**/*.{tsx,ts,js}',
      '*.config.{mjs,js}',
      '*tsconfig*.json',
      '.prettierrc.js',
      'next-env.d.ts',
      'nodemon.json',
    ],
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
      'react-hooks': reactHookPlugin,
      prettier: prettierPlugin,
      typescript: typescriptPlugin,
    },
    rules: {
      'no-unused-vars': ['error', { args: 'none' }],
      'simple-import-sort/imports': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-var-requires': 0,
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    },
  },
]

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: [
      'node_modules/**',
      'allure-report/**',
      'allure-results/**',
      'playwright-report/**',
      'test-results/**',
      'dist/**',
  ]
},
  // Base JS rules
  js.configs.recommended,

  // TypeScript rules
  ...tseslint.configs.recommended,

  // Playwright rules (only for tests)
  {
    files: ['tests/**/*.ts'],
    plugins: {
      playwright,
    },
    rules: {
      // TS cleanup
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',

      // Playwright best practices
      'playwright/no-focused-test': 'error',
      'playwright/no-skipped-test': 'warn',
    },
  },

  // Prettier must be last
  prettier,
];
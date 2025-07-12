import { defineConfig } from 'eslint/config';
import js from '@eslint/js';

export default defineConfig([
    {
        files: ["**/*.js"],
        plugins: {
            js,
        },
        extends: ["js/recommended"],
        rules: {
            indent: ['error', 4],
            semi: ['error', 'always'],
            'comma-dangle': ['error', 'always-multiline'],
            'no-unused-vars': ['warn'],
            'no-undef': 'error',
            'prefer-const': 'error',
            'no-var': 'error',
            'arrow-spacing': ['error', { before: true, after: true }],
            'no-duplicate-imports': 'error'
        },
    },
]);
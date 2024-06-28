/** @type {import('eslint').Linter.Config} */

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        // react 17 버전 이후 import React from 'react' 없어도 됨
        'react/react-in-jsx-scope': 'off',

        // react-three-fiber에서 사용하는 property 에러 무시
        'react/no-unknown-property': [
            'error',
            {
                ignore: [
                    'args',
                    'intensity',
                    'position',
                    'angle',
                    'penumbra',
                    'decay',
                    'dispose',
                    'rotation',
                    'geometry',
                    'material',
                    'object',
                ],
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};

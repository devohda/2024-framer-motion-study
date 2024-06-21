/**
 * @type {import('prettier').Config}
 */

module.exports = {
    parser: 'typescript',
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: false,
    trailingComma: 'es5',
    bracketSpacing: true,
    arrowParens: 'always',
    overrides: [
        {
            files: ['**/*.{ts,tsx,js,jsx}'],
            options: {
                tabWidth: 2,
            },
        },
        {
            files: ['*.json'],
            options: {
                parser: 'json',
                tabWidth: 4,
            },
        },
        {
            files: ['**/*.css'],
            options: {
                parser: 'css',
                tabWidth: 4,
            },
        },
        {
            files: ['.prettierrc', '.prettierrc.js', '.prettierrc.cjs'],
            options: {
                tabWidth: 4,
            },
        },
        {
            files: ['.eslintrc', '.eslintrc.js', '.eslintrc.cjs'],
            options: {
                tabWidth: 4,
            },
        },
    ],
};

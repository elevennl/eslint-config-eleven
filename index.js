module.exports = {
    extends: [
        './rules/best-practices',
        './rules/style',
        './rules/variables',
        './rules/to-be-defined'
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        strict: 'error',
    },
};

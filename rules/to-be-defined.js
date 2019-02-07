module.exports = {
    rules: {
        // Currently we don't enforce any callback returns or any callback naming conventions
        // https://eslint.org/docs/rules/callback-return
        'callback-return': 'off',

        // Currently we don't enforce camelCasing.
        // While it is considered a best practice in some frameworks
        'camelcase': 'off',

        // No enforcement of property spacing. This should be handled by the dev to make sure
        // code is always readable
        'computed-property-spacing': 'off',

        // We do not enforce a consistent this rule
        'consistent-this': 'off',

        // No redundant catch blocks
        'no-useless-catch': 'off'
    }
};

module.exports = {
    rules: {
        // require let or const instead of var
        'no-var': 'error',

        // Enables console commands only in development environments
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        // Enables debugger commands only in development environments
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        // Force the use of multiple var statements per function
        'one-var': ['error', 'never'],

        // disallow use of chained assignment expressions
        // https://eslint.org/docs/rules/no-multi-assign
        'no-multi-assign': ['error'],

        // suggest using of const declaration for variables that are never modified after declared
        'prefer-const': ['error', {
            destructuring: 'any',
            ignoreReadBeforeAssign: true,
        }],

        // disallow declaration of variables that are not used in the code
        'no-unused-vars': ['error', {vars: 'all', args: 'after-used', ignoreRestSiblings: true}],

        // disallow use of variables before they are defined
        'no-use-before-define': ['error', {functions: true, classes: true, variables: true}],

        // disallow deletion of variables
        'no-delete-var': 'error',

        // disallow labels that share a name with a variable
        // https://eslint.org/docs/rules/no-label-var
        'no-label-var': 'error',
    }
};

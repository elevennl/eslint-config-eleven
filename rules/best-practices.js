module.exports = {
    rules: {
        // enforces getter/setter pairs in objects
        'accessor-pairs': 'off',

        // enforces return statements in callbacks of array's methods
        // https://eslint.org/docs/rules/array-callback-return
        'array-callback-return': ['error', { allowImplicit: true }],

        // treat var statements as if they were block scoped
        'block-scoped-var': 'error',

        // specify the maximum cyclomatic complexity allowed in a program
        'complexity': ['off', 11],

        // enforce that class methods use "this"
        // https://eslint.org/docs/rules/class-methods-use-this
        'class-methods-use-this': ['error', {
            exceptMethods: [],
        }],

        // require return statements to either always or never specify values
        'consistent-return': 'off',

        // specify curly brace conventions for all control statements
        'curly': ['error', 'multi-line'],

        // require default case in switch statements
        'default-case': ['error', { commentPattern: '^no default$' }],

        // encourages use of dot notation whenever possible
        'dot-notation': ['error', { allowKeywords: true }],

        // enforces consistent newlines before or after dots
        // https://eslint.org/docs/rules/dot-location
        'dot-location': ['error', 'property'],

        // require the use of === and !==
        // https://eslint.org/docs/rules/eqeqeq
        'eqeqeq': ['error', 'always', { null: 'ignore' }],

        // make sure for-in loops have an if statement
        'guard-for-in': 'error',

        // enforce a maximum number of classes per file
        // https://eslint.org/docs/rules/max-classes-per-file
        'max-classes-per-file': ['off', 1],

        // disallow the use of alert, confirm, and prompt
        'no-alert': 'warn',

        // disallow use of arguments.caller or arguments.callee
        'no-caller': 'error',

        // disallow lexical declarations in case/default clauses
        // https://eslint.org/docs/rules/no-case-declarations.html
        'no-case-declarations': 'error',

        // disallow division operators explicitly at beginning of regular expression
        // https://eslint.org/docs/rules/no-div-regex
        'no-div-regex': 'off',

        // disallow else after a return in an if
        // https://eslint.org/docs/rules/no-else-return
        'no-else-return': ['error', { allowElseIf: false }],

        // disallow empty functions, except for standalone funcs/arrows
        // https://eslint.org/docs/rules/no-empty-function
        'no-empty-function': ['error', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods',
            ]
        }],

        // disallow empty destructuring patterns
        // https://eslint.org/docs/rules/no-empty-pattern
        'no-empty-pattern': 'error',

        // disallow comparisons to null without a type-checking operator
        'no-eq-null': 'off',

        // disallow use of eval()
        'no-eval': 'error',

        // disallow adding to native types
        'no-extend-native': 'error',

        // disallow unnecessary function binding
        'no-extra-bind': 'error',

        // disallow Unnecessary Labels
        // https://eslint.org/docs/rules/no-extra-label
        'no-extra-label': 'error',

        // disallow fallthrough of case statements
        'no-fallthrough': 'error',

        // disallow the use of leading or trailing decimal points in numeric literals
        'no-floating-decimal': 'error',

        // disallow reassignments of native objects or read-only globals
        // https://eslint.org/docs/rules/no-global-assign
        'no-global-assign': ['error', { exceptions: [] }],

        // disallow implicit type conversions
        // https://eslint.org/docs/rules/no-implicit-coercion
        'no-implicit-coercion': ['off', {
            boolean: false,
            number: true,
            string: true,
            allow: [],
        }],

        // disallow var and named functions in global scope
        // https://eslint.org/docs/rules/no-implicit-globals
        'no-implicit-globals': 'off',

        // disallow use of eval()-like methods
        'no-implied-eval': 'error',

        // disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 'off',

        // disallow usage of __iterator__ property
        'no-iterator': 'error',

        // disallow use of labels for anything other then loops and switches
        'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

        // disallow unnecessary nested blocks
        'no-lone-blocks': 'error',

        // disallow magic numbers
        // https://eslint.org/docs/rules/no-magic-numbers
        'no-magic-numbers': ['off', {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
        }],

        // disallow use of multiple spaces
        'no-multi-spaces': ['error', {
            ignoreEOLComments: false,
        }],

        // disallow use of multiline strings
        'no-multi-str': 'error',

        // disallow use of new operator when not part of the assignment or comparison
        'no-new': 'error',

        // disallow use of new operator for Function object
        'no-new-func': 'error',

        // require `await` in `async function` (note: this is a horrible rule that should never be used)
        // https://eslint.org/docs/rules/require-await
        'require-await': 'off',

        // Disable the use of useless escaping of strings/characters
        'no-useless-escape': 'error',

        // disallow usage of configurable warning terms in comments:
        'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

        // We are not Star Wars nor Yoda. Make sure to always compare something the logical way.
        'yoda': 'error',

        // Check if a callback error handler is defined. While this is good practice we do not enforce it as of now.
        'handle-callback-err': 'off',

        // Enforce a maximum amount of parameters in function.
        'max-params': ['error', 5],

        // This will make code diffs much more readable.
        'comma-dangle': 'error',

        // Enforce a correct use of for loops.
        'for-direction': 'error',

        // Make sure to correctly check using isNan instead of NaN itself
        'use-isnan': 'error'
    }
};

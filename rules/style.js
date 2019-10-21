module.exports = {
    rules: {
        // disallow use of the Object constructor
        'no-new-object': 'error',

        // disallow use of the Array constructor
        'no-array-constructor': 'error',

        // require method and property shorthand syntax for object literals
        'object-shorthand': ['error', 'always', {
            ignoreConstructors: false,
            avoidQuotes: true,
        }],

        // Enforce the use of single quotes and allow the use of backticks
        // for use with dynamic template strings
        'quotes': ['error', 'single', {
            allowTemplateLiterals: true
        }],

        // Dissallow the use of spaces in template string curly brace pairs
        'template-curly-spacing': ['error', 'never'],

        // Require the use of inserting a semicolon after statements
        'semi': ['error', 'always'],

        // Enable the use of function expressions
        'func-style': ['error', 'expression', {
            allowArrowFunctions: true
        }],

        // Disallow use of unary operators, ++ and --
        'no-plusplus': 'error',

        // Force the spacing on anonymous and named functions
        'space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always'
        }],

        // Force a space before the start of curly braces in blocks
        'space-before-blocks': 'error',

        // require spaces around operators
        'space-infix-ops': 'error',

        // Disallow reassignment of Function parameters
        'no-param-reassign': 'error',

        // Prefer arrow functions as inline callbacks
        'prefer-arrow-callback': 'error',

        // Force spacing between the arrow function
        'arrow-spacing': 'error',

        // Allows for the removal of parenthesis when a single statement is used
        'arrow-parens': ['error', 'as-needed', {
            requireForBlockBody: true
        }],

        // Allows the removal of braces when a single statement is used
        'arrow-body-style': ['error', 'as-needed'],

        // Disallow arrow functions where they could be confused with comparisons
        'no-confusing-arrow': ['error', {
            allowParens: true,
        }],

        // Disallow duplicate imports
        'no-duplicate-imports': 'error',

        // Set the correct indentation
        'indent': ['error', 'tab'],

        // Disallow the used of space and tabs in the same project
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],

        // Enforces line break usage after opening and before closing array brackets
        'array-bracket-newline': ['error', 'consistent'],

        // Enforces the use of spaces inside brackets of arrays
        'array-bracket-spacing': ['error', 'never', {
            'arraysInArrays': false,
            'objectsInArrays': false
        }],

        // Comma styles for comma seperated lists
        'comma-style': ['error', 'last'],

        // Enforces consistent line-breaks in parameters in functions
        'function-paren-newline': ['error', 'multiline'],

        // Enforces consistent line-breaks in arrays
        'array-element-newline': ['error', 'consistent'],

        // Enforces consistent spacing inside blocks
        'block-spacing': 'error',

        // Do not notify of a missing super call in constructors
        'constructor-super': 'off',

        // Enforce the position of line comments in code for readability
        'line-comment-position': ['error', 'above'],

        // The one true brace style
        'brace-style': ['error', '1tbs'],

        // This might seem unnecessary but can be very helpful in terms of readability.
        // Yet we don't enforce this and expect the developer to maintain a readable
        // format for using comments.
        'capitalized-comments': 'off',

        // Enforces correct spacing before or after commas
        'comma-spacing': ['error', {
            'before': false,
            'after': true
        }],

        // A good practice and most editors already enforce this
        'eol-last': ['error', 'always']
    }
};

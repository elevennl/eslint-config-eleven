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

        // Force the spacing on anonymous and named functions
        'space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always'
        }],

        // Force a space before the start of curly braces in blocks
        'space-before-blocks': 'error',

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

        // Set the correct indentation based on the editorConfigs
        'indent': ['error', 2, {
            SwitchCase: 2,
            VariableDeclarator: 2,
            outerIIFEBody: 2,
            FunctionDeclaration: {
                parameters: 2,
                body: 2
            },
            CallExpression: {
                arguments: 2
            },
            ArrayExpression: 2,
            ObjectExpression: 2,
            ImportDeclaration: 2,
            flatTernaryExpressions: false,
            ignoreComments: false
        }],

        // Disallow the used of space and tabs in the same project
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs']
    }
};

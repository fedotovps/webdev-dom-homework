module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'prettier/prettier': 'error',
        camelcase: ['error'],
        eqeqeq: ['error', 'always'],
    },
}

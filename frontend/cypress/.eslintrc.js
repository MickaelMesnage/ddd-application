module.exports = {
    env: { 'cypress/globals': true },
    extends: ['plugin:cypress/recommended', '../.eslintrc.json'],
    plugins: ['eslint-plugin-cypress'],
    root: true,
};

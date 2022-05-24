module.exports = {
  extends: [
    '@titanom/eslint-config',
    '@titanom/eslint-config/typescript',
    '@titanom/eslint-config/react',
    '@titanom/eslint-config/node',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};

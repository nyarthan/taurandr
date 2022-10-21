module.exports = {
  extends: [
    '@titanom/eslint-config',
    '@titanom/eslint-config/typescript', // optional
    '@titanom/eslint-config/react', // optional
  ],
  // if using typscript
  parserOptions: {
    project: ['./tsconfig.json'],
  },

  overrides: [
    {
      files: ['vite.config.ts'],
      parserOptions: {
        project: ['./tsconfig.node.json'],
      },
      env: {
        node: true,
      },
    },
  ],
};

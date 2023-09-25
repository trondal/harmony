module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json']
  },
  extends: ['@trondal/eslint-config-trondal/strict'],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'vite-env.d.ts',
    'vite.config.ts',
    'server.js'
  ]
};

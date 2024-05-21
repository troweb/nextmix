module.exports = {
  extends: ['troweb'],
  settings: {
    'import/internal-regex': '^(nextmix)',
  },
  rules: {
    'import/no-unresolved': ['error', { ignore: ['nextmix'] }],
  },
};

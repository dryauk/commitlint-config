module.exports = {
  'extends': [
    '@commitlint/config-conventional',
  ],
  'rules': {
    'body-max-line-length': [0, 'always'],
    'footer-max-line-length': [0, 'always'],
    'type-enum': [
      2,
      'always',
      [
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'style',
        'test',
      ],
    ],
  },
};

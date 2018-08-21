module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'function-comma-newline-after': null,
    'function-parentheses-newline-inside': null,
    'function-max-empty-lines': null,
    'function-whitespace-after': null,
    'indentation': 4,
    'rule-empty-line-before': null,
    'selector-combinator-space-after': null,
    'selector-list-comma-newline-after': null,
    'selector-pseudo-element-colon-notation': null,
    'unit-no-unknown': null,
    'value-list-max-empty-lines': null,
    'block-closing-brace-newline-before': null,
    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': null,
    'number-leading-zero': 'never',
    'number-no-trailing-zeros': null,
    'selector-class-pattern': ['^[a-z]+([a-z0-9]?|[a-z0-9\\-]*[a-z0-9])$', {
      message: 'should be written in lowercase with hyphens(-)'
    }],
    'color-named': 'never',
    'color-hex-case': 'upper',
    'color-hex-length': null,
    'selector-max-class': 3,
    'max-nesting-depth': 3,
    'scss/at-mixin-pattern': ['^[a-z]+([a-z0-9]?|[a-z0-9\\-]*[a-z0-9])$', {
      message: 'should be written in lowercase with hyphens(-)'
    }],
    'block-closing-brace-newline-after': ['always', {
      ignoreAtRules: ['if', 'else']
    }]
  }
};

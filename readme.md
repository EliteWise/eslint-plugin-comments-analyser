# eslint-plugin-comments-analyser

This ESLint plugin provides a custom rule to ensure that each function is preceded by a comment explaining its purpose.

## Installation

You will need [Node.js](https://nodejs.org/) and [npm](https://npmjs.com/) installed to use this plugin. You can then install the ESLint plugin and ESLint using npm:

```bash
npm install eslint --save-dev
npm install eslint-plugin-comments-analyser --save-dev
```

## Configuration

After installation, add `eslint-plugin-comments-analyser` to the plugins section of your `.eslintrc` configuration file. 
Then activate the rule by adding a rule to the rules section.

```json
{
  "plugins": [
    "eslint-plugin-comments-analyser"
  ],
  "rules": {
    "eslint-plugin-comments-analyser/function": "warn",
    "eslint-plugin-comments-analyser/file": "warn"
  }
}
```

You can adjust the level of the rule to suit your needs, using `off`, `warn` or `error`.

## Rules

- `function`: This rule checks that all functions are preceded by a comment.
- `file`: This rule ensure each file (.ts / .tsx / .js) contains at least one comment.

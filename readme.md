# eslint-plugin-comments-analyser

This ESLint plugin provides two rules: `function`, to ensure that each function is preceded by a comment explaining its purpose, and `file`, to verify that each script file contains at least one comment.

## Installation

You will need [Node.js](https://nodejs.org/) and [npm](https://npmjs.com/) installed to use this plugin. You can then install the ESLint plugin and ESLint using npm:

```bash
npm install eslint eslint-plugin-comments-analyser --save-dev
npm install typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
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
    "comments-analyser/function": "warn",
    "comments-analyser/file": "warn"
  }
}
```

You can adjust the level of the rule to suit your needs, using `off`, `warn` or `error`.

## Rules

- `function`: This rule checks that all functions are preceded by a comment.
- `file`: This rule ensure each file (.ts / .tsx / .js) contains at least one comment.

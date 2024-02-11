import { ESLintUtils } from '@typescript-eslint/experimental-utils';
import { TSESTree } from '@typescript-eslint/typescript-estree';

const createRule = ESLintUtils.RuleCreator(name => `https://github.com/EliteWise/eslint-plugin-comments-analyser/blob/master/readme.md`);

const functionRule = createRule({
  name: 'function',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Ensure each function is preceded by a comment explaining its purpose',
      recommended: false,
    },
    schema: [], // This rule does not have options
    messages: {
      missingComment: 'Function "{{ name }}" is missing a preceding comment.',
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      'FunctionDeclaration, FunctionExpression, ArrowFunctionExpression'(node: TSESTree.Node) {
        const sourceCode = context.getSourceCode();
        const commentsBefore = sourceCode.getCommentsBefore(node);

        if (commentsBefore.length === 0) {
          context.report({
            node,
            messageId: 'missingComment',
            data: {
              name: node.type === TSESTree.AST_NODE_TYPES.FunctionDeclaration && node.id ? node.id.name : 'anonymous function',
            },
          });
        }
      },
    };
  },
});

const fileRule = createRule({
  name: 'file',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Ensure each file (.ts / .tsx / .js) contains at least one comment',
      recommended: false,
    },
    schema: [], // This rule does not have options
    messages: {
      missingComment: 'File "{{ name }}" is missing a comment.',
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      Program(node: TSESTree.Node) {
        const fileName = context.getFilename()
        const comments = context.getSourceCode().getAllComments();

        if (comments.length === 0) {
          context.report({
            node,
            messageId: 'missingComment',
            data: {
              name: fileName,
            },
          });
        }
      },
    };
  },
});

module.exports = {
  rules: {
    "function": functionRule,
    "file": fileRule
  },
};
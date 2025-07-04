
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import path from "node:path";
import { FlatCompat } from "@eslint/eslintrc";
import tsParser from "@typescript-eslint/parser";
import {defineConfig, globalIgnores} from "eslint/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([
  globalIgnores([
    "node_modules/**",
    "**/node_modules/**",
    "dist/**",
    "scripts/**",
    "**/polyfills.ts",
    "**/*.json",
    "**/main.ts"
  ]),
  {
    files: ["**/*.ts"],
    extends: compat.extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "plugin:@angular-eslint/recommended",
      "plugin:@angular-eslint/template/process-inline-templates",
      "prettier"
    ),
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        project: "tsconfig.json"
      }
    },
    rules: {
      //ANGULAR RULES
      "@angular-eslint/component-class-suffix": ["error", {
        suffixes: [
          "Component",
          "Page",
          "Layout"
        ]
      }],
      "@angular-eslint/directive-selector": ["error", {
        type: "attribute",
        prefix: [
          "app",
          "stk"
        ],
        style: "camelCase"
      }],
      "@angular-eslint/component-selector": ["error", {
        type: "element",
        prefix: [
          "app",
          "stk"
        ],
        style: "kebab-case"
      }],
      "@angular-eslint/no-attribute-decorator": "error",
      "@angular-eslint/no-empty-lifecycle-method": "error",
      "@angular-eslint/no-forward-ref": "error",
      "@angular-eslint/no-lifecycle-call": "error",
      "@angular-eslint/no-output-rename": "error",
      "@angular-eslint/no-pipe-impure": "error",
      "@angular-eslint/no-queries-metadata-property": "error",
      "@angular-eslint/prefer-output-readonly": "error",
      "@angular-eslint/use-component-selector": "error",
      "@angular-eslint/use-component-view-encapsulation": "error",
      "@angular-eslint/prefer-standalone": "off",

      //TYPESCRIPT RULES
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "error",
      "@typescript-eslint/dot-notation": "error",
      "@typescript-eslint/member-ordering": "error",
      "@typescript-eslint/method-signature-style": [
        "error",
        "method"
      ],
      "@typescript-eslint/explicit-member-accessibility": ["error", {
        accessibility: "explicit",
        overrides: {
          accessors: "explicit",
          constructors: "no-public",
          methods: "explicit",
          properties: "explicit",
          parameterProperties: "explicit"
        }
      }
      ],
      "@typescript-eslint/naming-convention": ["error", {
        selector: "enumMember",
        format: ["PascalCase", "UPPER_CASE"]
      }],
      "@typescript-eslint/no-base-to-string": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unused-expressions": ["error", {
        allowTernary: true
      }],
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/require-await": "error",
      "@typescript-eslint/restrict-plus-operands": "error",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/consistent-type-assertions": "off",
      "@typescript-eslint/unbound-method": "off", //TODO
      "@typescript-eslint/no-extraneous-class": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/prefer-readonly": "off",
      "@typescript-eslint/promise-function-async": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/return-await": "off",
      "@typescript-eslint/strinct-boolean-expressions": "off",
      "@typescript-eslint/generic-type-naming": "off",
      "@typescript-eslint/interface-name-prefix": "off",

      //OTHER RULES
      "no-implicit-coercion": [2, {
        boolean: true,
        number: true,
        string: true
      }],
      "brace-style": [
        "off",
        "1tbs"
      ],
      "id-blacklist": "error",
      "eqeqeq": "error",
      "curly": "error",
      "no-case-declarations": "error",
      "no-redeclare": "error",
      "no-sparse-arrays": "error",
      "no-underscore-dangle": "off",
      "no-useless-escape": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "padding-line-between-statements": "error",
      "no-ternary": "off",
      "no-undef": "off",
      "space-before-function-paren": "off",
      "prefer-arrow/prefer-arrow-functions": "off",
      "quote-props": "off",
      "radix": "off",
      "one-var": "off",
      "pace-before-function-par": "off",
      "no-unused-vars": "off",
      "no-prototype-builtins": "off",
      "no-magic-numbers": "off",
      "no-asinc-promise-executor": "off",
      "arrow-body-style": "off",
      "import/no-deprecated": "off",
      "indent": "off" //Revert this after formatter
    }
  }, {
    files: ["**/*.html"],
    extends: compat.extends(
      "plugin:@angular-eslint/template/recommended",
      "prettier"
    ),
    rules: {
      "@angular-eslint/template/conditional-complexity": ["error", {
        maxComplexity: 5
      }],
      "@angular-eslint/template/cyclomatic-complexity": ["off", {
        maxComplexity: 10
      }],
      "angular-eslint/template/i18n": ["off", {
        checkId: true,
        checkText: true
      }],
      "@angular-eslint/template/use-track-by-function": "off"
    }
  }


])
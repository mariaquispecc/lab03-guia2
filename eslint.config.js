const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        console: "readonly",
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        process: "readonly",
        __dirname: "readonly",
      },
    },
    rules: {
      "eqeqeq":         "error",
      "no-var":         "warn",
      "no-unused-vars": "warn",
      "no-console":     "off",
      "prefer-const":   "warn",
    },
  },
];
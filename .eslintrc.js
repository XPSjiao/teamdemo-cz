module.exports = {
  root: true,
  env: {
      node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
      parser: "@babel/eslint-parser",
  },
  rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      // "vue/multi-word-component-names": 'off',
      'space-before-function-paren': 'off',
      overrides: [{
          files: ["src/components/Hello.vue", "src/components/**/Hello.vue"], // 匹配 components 和二级目录中的 Hello.vue
          rules: {
              "vue/multi-word-component-names": "off",

          },
      }, ],
  },
};


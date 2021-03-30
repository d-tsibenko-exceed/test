module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: ["react-app", "airbnb", "plugin:jsx-a11y/recommended", "prettier"],
  plugins: ["jsx-a11y", "prettier"],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    semi: 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "prettier/prettier": [
      "error",
      {
        semi: false,
      },
    ],
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
}

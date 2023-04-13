module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  bracketSpacing: true,
  parser: "typescript",
  arrowParens: "always",
  tailwindConfig: "./tailwind.config.js",
};

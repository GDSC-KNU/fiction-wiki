module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
  extend: {
    // Extend the backgroundImage theme
    backgroundImage: {
      "custom-gradient-1":
        "linear-gradient(270deg, rgb(26, 27, 30) 0%, transparent 100%)",
    },
  },
};

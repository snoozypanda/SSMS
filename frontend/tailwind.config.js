/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-color-yelow": "#FAEF5C",
        "custom-color-green": {
          300: "#98D86F",
          400: "#41B886",
        },
        "custom-color-blue": {
          300: "#00938D",
          400: "#106D7D",
          900: "#2F4858",
        },
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      'sans': ['Roboto', 'Arial', 'sans-serif'], 
    },
    keyframes: {
      bounce: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      },
    },
    animation: {
      'bounce-custom': 'bounce 1s infinite',
    },

    backgroundImage: {
      'parallax': 'url("/black-white.jpg")',
    },
  },
},
  plugins: [],
};

export default config;

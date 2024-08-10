import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        'parallax': 'url("/fondo7.webp")',
      },

      boxShadow: {
        'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)', // Define la sombra de texto
      },
    },
},
  plugins: [],
};

export default config;

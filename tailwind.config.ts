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
        'border-pulse': {
          '0%, 100%': { borderColor: '#d1d5db' }, // Color inicial y final
          '50%': { borderColor: '#686d75' }, // Color intermedio
        },
      },
      animation: {
        'bounce-custom': 'bounce 1s infinite',
        'border-pulse': 'border-pulse 2s ease-in-out infinite',
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

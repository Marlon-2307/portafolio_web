import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b1220',   // Fondo oscuro
        secondary: '#F8FAFC', // Texto principal
        muted: '#94A3B8',     // Texto secundario
        accent: '#0070F3',    // Botones / azul neón
        highlight: '#22C55E', // Sombras / hover / glow
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'border-pulse': {
          '0%, 100%': { borderColor: '#d1d5db' },
          '50%': { borderColor: '#686d75' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'bounce-custom': 'bounce 1s infinite',
        'border-pulse': 'border-pulse 2s ease-in-out infinite',
        'gradient-slow': 'gradient 20s ease infinite',
      },
      backgroundImage: {
        'parallax': 'url("/black-white.jpg")',
      },
      boxShadow: {
        'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'neon-accent': '0 0 10px #22C55E, 0 0 20px #22C55E',
      },
    },
  },
  plugins: [],
};

export default config;
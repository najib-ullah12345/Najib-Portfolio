/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#c1a46a',
        'gold-light': '#e8d5a3',
        'gold-dark': '#8a6f3e',
        dark: '#0b0b0f',
        'dark-2': '#111117',
        'dark-3': '#18181f',
        'dark-4': '#1f1f28',
        text: '#e0e0e8',
        'text-muted': '#7a7a8c',
        'text-dim': '#4a4a5c',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      borderColor: {
        border: 'rgba(255,255,255,0.07)',
      },
    },
  },
  plugins: [],
}

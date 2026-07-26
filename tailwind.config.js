/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        light: '#f8f8fc',
        'light-2': '#eeeef2',
        'light-3': '#e4e4ea',
        'light-4': '#d8d8e0',
        text: '#1a1a2e',
        'text-muted': '#5a5a6e',
        'text-dim': '#8a8a9c',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      borderColor: {
        border: 'rgba(255,255,255,0.07)',
        'border-light': 'rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}

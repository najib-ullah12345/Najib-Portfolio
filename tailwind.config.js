/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        'gold-light': '#f0d060',
        dark: '#0a0a0f',
        'dark-2': '#111118',
        'dark-3': '#1a1a25',
        gray: '#2a2a3a',
        text: '#e0e0e8',
        'text-muted': '#8888a0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

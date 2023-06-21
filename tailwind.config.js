/** @type {import('tailwindcss').Config} */
module.exports = { 
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neo': {
          'teal': '#4A9B9B',
          'teal-dark': '#2A6B6B',
          'teal-light': '#7BBEBE',
          'charcoal': '#2C3E50',
          'slate': '#34495E',
          'gray-light': '#BDC3C7',
          'off-white': '#F8F9FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
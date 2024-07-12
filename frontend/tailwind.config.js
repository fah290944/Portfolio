/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'md': '580px',

      '2md': '881px',
      // => @media (min-width: 768px) { ... }

      'lg': '1025px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1325px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1590px',
      // => @media (min-width: 1590px) { ... }

    }
  },
  plugins: [],
}
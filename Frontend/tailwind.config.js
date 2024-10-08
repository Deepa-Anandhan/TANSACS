/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {

    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        IstokWeb: ['IstokWeb', 'sans-serif'],
      },
      colors: {
        'custom-red': '#f40000',
        'custom-gray': "#B3B3B3",
        'custom-choco': '#F6E6E6',
      },
      keyframes: {
        colorChange: {
          '0%, 100%': { color: 'red' },
          '50%': { color: 'blue' },
        },
      },
      animation: {
        colorChange: 'colorChange 1s infinite',
      },
    },

  },
  plugins: [],
}


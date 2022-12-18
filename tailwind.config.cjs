/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        '--primary': 'rgb(55,181,255)',
        '--light': 'rgb(255,255,255)',
        '--dark': 'rgb(39,40,40)',
      },
    },
  },
  plugins: [],
};

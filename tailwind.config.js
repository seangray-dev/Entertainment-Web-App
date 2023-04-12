/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: 'repeat(4, minmax(220px, 280px))',
      },
      colors: {
        DarkBlue: '#10141E',
        semiDarkBlue: '#161D2F',
        red: '#FC4747',
        grayishBlue: '#5A698F',
      },
    },
  },
  plugins: [],
};

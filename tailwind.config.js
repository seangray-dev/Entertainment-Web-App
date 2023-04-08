/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      lg: '1440px',
    },
    extend: {
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

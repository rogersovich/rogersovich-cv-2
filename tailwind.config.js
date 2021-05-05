const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  prefix: 'tw-',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.mono],
      },
      textColor: {
        primary: '#38B4EE',
        secondary: '#273BF3',
        dark: '#1D1D1D',
        'dark-1': '#2D3436',
      },
      backgroundColor: {
        primary: '#38B4EE',
        secondary: '#273BF3',
        dark: '#1D1D1D',
        'dark-1': '#2D3436',
      },
      borderColor: {
        primary: '#38B4EE',
        secondary: '#273BF3',
        dark: '#1D1D1D',
        'dark-1': '#2D3436',
      },
      gradientColorStops: {
        primary: 'rgba(56, 180, 238, 0.8)',
        'primary-1': '#85D0F8',
      },
      letterSpacing: {
        widest: '.2em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

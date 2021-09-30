module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '4.5xl': ['2.5rem', '2.5rem'],
      },
      fontFamily: {
        'sans': ['Convergence', 'sans-serif']
      },
      spacing: {
        '90per': '90%',
        '22': '5.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

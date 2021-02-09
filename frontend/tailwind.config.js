module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: '0 2px 4px 0 rgba(0, 0, 0, 0.25), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
      md: '0 6px 8px -1px rgba(0, 0, 0, 0.25), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 14px -1px rgba(0, 0, 0, 0.25), 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
      rxl: '0 -20px 25px -10px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
    },
    screens: {
      'sm': '400px',
      'md': '600px',
      'lg': '850px',
      'xl': '1050px',
      '2xl': '1620px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true
}

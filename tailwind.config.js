const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customblue: {
          '900': '#16519F',
        },
        customred: {
          '900': '#E40C2B',
        },
        customgreen: {
          '900': '#438945',
        },
        customtext: {
          '900': '#00bcd4',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

//https://stackoverflow.com/questions/62693939/tailwindcss-referencing-theme-colors-when-creating-custom-class
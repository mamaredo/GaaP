module.exports = {
  purge: ["public/**/*.html", "src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#E9E9E9'
      },
    },
    minHeight: {
      'card': '348px'
    },
    maxHeight: {
      'card': '348px'
    },
    container: {
      center: true
    },
    spacing: {
      '1': '8px',
      '2': '16px',
      '3': '24px',
      '4': '32px',
      '5': '40px',
      '6': '48px',
      '7': '56px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


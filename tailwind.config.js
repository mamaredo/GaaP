module.exports = {
  content: ["public/**/*.html", "src/**/*.{js,jsx,ts,tsx}"],
  // darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'balsamiq': ['"Balsamiq Sans"', 'cursive']
      },
      colors: {
        'primary': '#60CAAD',
        'primary-dark': '#51AA91',
        'primary-light': '#60CAAD',
        'secondary': '#333333',
        'header-text': '#2B2B2B',
        'background': '#FAFAFA',
        'tag-bg': '#FFFFFF',
        'twitter': '#55ACEE',
        'git-hub': '#24292E',
        'google-form': '#764BBE',
        'hr': '#DADADA'
      },
      opacity: {
        '37': '0.37',
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        'index-size': "400px",
        'icon': '12px',
        'button-icon': '24px',
        'main-visual': '25vw'
      },
      zIndex: {
        top: '9999'
      }
    },
    minHeight: {
      'card': '348px',
      'image': '243px',
      'button': '36px'
    },
    maxHeight: {
      'card': '348px'
    },
    minWidth: {
      'blog-index-fixed': '410px',
      'profile': '350px',
      'tag': '18px'
    },
    maxWidth: {
      '2xl': '1280px',
      'xl': '1024px',
      'md': '720px',
      'sm': '360px',
      'max': '100%',
      'tag': '18px',
      'blog-index-fixed': '410px',
    },
    container: {
      center: true
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


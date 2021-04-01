module.exports = {
  purge: ["public/**/*.html", "src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'background': '#E9E9E9',
        'tag-bg': '#FAFAFA',
        'twitter': '#1DA1F2',
        'git-hub': '#24292E',
        'content-full': '#0E1E25'
      },
      opacity: {
        '37': '0.37',
      },
    },
    minHeight: {
      'card': '348px',
      'image': '243px',
      'button': '36px'
    },
    maxHeight: {
      'card': '348px'
    },
    maxWidth: {
      '2xl': '1280px',
      'xl': '1024px',
      'md': '720px',
      'sm': '352px'
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
      'icon': '12px',
      'button-icon': '24px'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


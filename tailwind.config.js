const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        zIndex: {
          "-1":"-1"
        },
        colors: {
          'primary': '#3f51b5'
        }
      },
    },
    variants: {
      borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
};

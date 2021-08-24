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
        }
      },
    },
    variants: {
      borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
};

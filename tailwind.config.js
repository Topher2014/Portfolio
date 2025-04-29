module.exports = {
    theme: {
      extend: {
        imageRendering: {
          'crisp-edges': 'crisp-edges',
        },
      },
    },
    plugins: [
      function({ addUtilities }) {
        const newUtilities = {
          '.rendering-crisp-edges': {
            'image-rendering': ['-webkit-optimize-contrast', 'crisp-edges'],
            '-ms-interpolation-mode': 'nearest-neighbor',
          },
        }
        addUtilities(newUtilities)
      },
    ],
  }
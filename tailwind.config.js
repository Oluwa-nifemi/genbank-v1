const generatePercentages = () => {
  return Array.from({ length: 100 }).reduce((acc, current, idx) => {
    acc[`${idx + 1}%`] = `${idx + 1}%`
    return acc
  }, {})
}

const rem = (px) => `${px / 16}rem`

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      blue: {
        200: '#37CCE6',
        300: '#02BBDC',
        400: '#0252DC',
        500: '#1565D8',
        600: '#30466E',
        700: '#06265C',
        800: '#273245',
        900: '#0A2E34',
        1000: '#000e25',
        disclaimer: '#343941'
      },
      white: '#fff'
    },
    extend: {
      fontSize: {

      },
      fontFamily: {
        'plex-serif': ["IBM Plex Serif", 'sans-serif'],
        'plex-hebrew': ["IBM Plex Hebrew", 'sans-serif'],
      },
      spacing: {
        ...generatePercentages(),
        'fit-content': 'fit-content'
      },
    },
  },
  variants: {
    extend: {
      padding: ["first"],
      backgroundColor: ["disabled"],
      cursor: ["disabled"],
      textColor: ["disabled", 'active'],
    },
  },
  plugins: [],
}

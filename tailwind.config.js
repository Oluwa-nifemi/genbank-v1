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
        100: '#CDDFFE',
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
      white: '#fff',
      black: '#000'
    },
    extend: {
      borderRadius: {
        10: rem(40),
        half: '50%',
      },
      width: {
        '41.25': rem(165),
        '68.75': rem(275)
      },
      height: {
        'fill-with-header': 'calc(100vh - 80px)'
      },
      fontSize: {
        'hero': [rem(64), rem(83)],
        'hero-mobile': [rem(48), rem(62)],
        'description': [rem(20), rem(26)],
      },
      opacity: {
        48: '0.48',
        12: '0.12'
      },
      fontFamily: {
        'plex-serif': ["IBM Plex Serif", 'sans-serif'],
        'plex-hebrew': ["IBM Plex Hebrew", 'sans-serif'],
      },
      spacing: {
        ...generatePercentages(),
        'fit-content': 'fit-content',
        30: rem(120)
      },
      screens: {
        "lg-max": {
          max: "1024px",
        },
        "md-max": {
          max: "768px",
        },
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

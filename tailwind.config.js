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
      transparent: 'transparent',
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
        'footer-background': '#03122C',
        'close-button': '#BDD4FB',
        'phone-input-border': '#35445D',
      },
      disclaimer: '#343941',
      'disclaimer-border': '#40516E',
      white: '#fff',
      black: '#000',
      gray: '#EDF3EF',
      'gray-disabled': '#93969A',
      red: "#F23577"
    },
    extend: {
      maxWidth: {
        '100%': '100%'
      },
      borderRadius: {
        10: rem(40),
        8: rem(32),
        half: '50%',
      },
      width: {
        '41.25': rem(165),
        '68.75': rem(275),
        '4.5': rem(18)
      },
      height: {
        18: rem(72),
        '4.5': rem(18)
      },
      fontSize: {
        'hero': [rem(64), rem(83)],
        'hero-mobile': [rem(48), rem(62)],
        'description': [rem(20), rem(26)],
        'feature-title': [rem(34), rem(44)],
        'feature-title-m': [rem(22), rem(28)],
        'download-from': [rem(8), rem(10)],
      },
      opacity: {
        48: '0.48',
        12: '0.12',
        15: '0.15',
      },
      fontFamily: {
        'plex-serif': ["IBM Plex Serif", 'sans-serif'],
        'plex-hebrew': ["IBM Plex Hebrew", 'sans-serif'],
      },
      spacing: {
        ...generatePercentages(),
        'fit-content': 'fit-content',
        30: rem(120),
        '22.5': rem(90),
        '3.5': rem(14),
        '4.75': rem(19),
        'unset': 'unset'
      },
      zIndex: {
        '-1': '-1'
      },
      screens: {
        "lg-max": {
          max: "1024px",
        },
        "md-max": {
          max: "768px",
        },
        "sm-max": {
          max: "640px",
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
      transform: ['hover', 'focus']
    },
  },
  plugins: [],
}

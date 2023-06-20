/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        transparent: 'transparent',
        darkblue: '#393E46',
        darkblueTwo: '#929AAB',
        darkblueThree: '#9DB2BF',
        white: '#D9D9D9',
        grey: '#928E8E'
      }
    },
    plugins: [],
  }
}

// colors: {
//   transparent: 'transparent',
//   darkblue: '#0B2447',
//   darkblue2: '',
//   darkblue3: '',
//   lightblue: '#A5D7E8',
//   dullblue: '#5599AF',
//   grey: '#928E8E'
// }


  // colors: {
  //   transparent: 'transparent',
  //   darkblue: '#27374D',
  //   darkblueTwo: '#526D82',
  //   darkblueThree: '#27374E',
  //   white: '#D9D9D9',
  //   lightblue: '#DDE6ED',
  //   dullblue: '#9DB2BF',
  //   grey: '#928E8E'
  // },

  // transparent: 'transparent',
  //     darkblue: '#393E46',
  //     darkblueTwo: '#929AAB',
  //     darkblueThree: '#9DB2BF',
  //     white: '#D9D9D9',
  //     lightblue: '#F7F7F7',
  //     dullblue: '#EEEEEE',
  //     grey: '#928E8E'

  // transparent: 'transparent',
  //       darkblue: '#000000',
  //       darkblueTwo: '#000000',
  //       darkblueThree: '#000000',
  //       white: '#D9D9D9',
  //       lightblue: '#F7F7F7',
  //       dullblue: '#EEEEEE',
  //       grey: '#928E8E'
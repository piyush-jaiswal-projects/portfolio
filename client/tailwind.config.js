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
    colors: {
      transparent: 'transparent',
      darkblue: '#0B2447',
      darkblue2: '',
      darkblue3: '',
      white: '#D9D9D9',
      lightblue: '#A5D7E8',
      dullblue: '#5599AF',
      grey: '#928E8E'
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
        darkblue: '#0B2447',
        darkblue2: '',
        darkblue3: '',
        lightblue: '#A5D7E8',
        dullblue: '#5599AF',
        grey: '#928E8E'
      }
    },
    plugins: [],
  }
}

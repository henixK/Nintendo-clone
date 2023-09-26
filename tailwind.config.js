/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
      },
      fontFamily: {
        'lato': ["Lato"]
      },
      backgroundImage: {
        'hero': "url('../public/assets/hero/198x185_SMBW_bg.avif')",
        'triangle': "url('../public/assets/hero/triangle.svg')",
      },
      colors: {
        'primary-color': '#E60012',
        'secondary-color': '#484848', 
      }
    },
    animation: {
      'btn-animation': 'btnAnimation 5s linear forwards',
    },
    keyframes: {
      btnAnimation: {
        '0%': {
          animationTimingFunction: 'ease-out',
          transform: 'scale(1)',
          transformOrigin: 'center center',
        },
        '10%': {
          animationTimingFunction: 'ease-in',
          transform: 'scale(0.91)',
        },
        '17%': {
          animationTimingFunction: 'ease-out',
          transform: 'scale(0.98)',
        },
        '33%': {
          animationTimingFunction: 'ease-in',
          transform: 'scale(0.87)',
        },
        '50%': {
          animationTimingFunction: 'ease-out',
          transform: 'scale(1)',
        },
      },
    },
  },
  plugins: [],
}
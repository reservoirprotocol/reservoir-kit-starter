/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'collection-slider': 'linear-gradient(89.55deg, #010101 50.26%, rgba(35, 35, 35, 0) 94.88%)',
      },
      animation: {
        moveCollections: 'moveCollections 20s linear infinite',
        moveCollections1: 'moveCollections 20s linear infinite',
      },
      keyframes: {
        moveCollections: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)'},
        },
        moveCollections1: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)'},
        }
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      textColor: ["visited"],
    },
  },
};

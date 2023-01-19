/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        leg: '12px', // legend
        s: '14px', // small
        r: '16px', // regular
        sl: '20px', // semilarge
        l: '24px', // large
        xl: '32px', // extra large
        '2xl': '48px', // double extra large
        ut: '96px', // utmost
      },
      fontWeight: {
        ut: '800', // utmost
        xs: '700', // extra strong
        s: '600', // strong
        r: '400', // regular 
        w: '300', // weak
      },
      colors: {
        primary: {
          '050': '#A3C1D9',
          '100': '#5E9FD1',
          '150': '#253E52',
        },
        secondary: {
          '050': '#D9CA8D',
          '100': '#D1B649',
          '150': '#9E8A37',
        },
        neutral: {
          '000': '#F8F8F8',
          '050': '#D3DBCF',
          '100': '#595C57',
          '150': '#343633',
          '200': '#000000',
        },
      }
    },
  },
  plugins: [],
}
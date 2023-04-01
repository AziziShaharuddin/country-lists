/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'h1': ['24px', {
          lineHeight: `${24 * 1.5}px`,
          fontWeight: '500',
        }],
        base: ['16px', {
          lineHeight: `${16 * 1.5}px`,
          fontWeight: '400',
        }],
        'caption': ['14px', {
          lineHeight: `${14 * 1.5}px`,
          fontWeight: '400',
        }]
      },
      colors: {
        acdo: {
          primary: '#0B4B7F',
          secondary: '#0473AC',
          white: '#FFFFFF',
          background: '#F7F9FA',
          grayLine: '#E5E5E5',
          grayText: '#8D8D8D',
          darkText: '#19252E'
        }
      }
    },
  },
  plugins: [],
}

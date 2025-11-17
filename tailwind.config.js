/******** Tailwind Config with Brand Palette ********/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // emerald core
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        sand: {
          50: '#faf7f2',
          100: '#f3eee6',
          200: '#e7dccb',
          300: '#d7c2a3',
          400: '#c9ab85',
          500: '#b99266',
          600: '#a97f54',
          700: '#8e6845',
          800: '#715238',
          900: '#5b432f',
        },
        dusk: {
          50: '#f5f7fb',
          100: '#e9edf7',
          200: '#cdd8ee',
          300: '#a4b9e1',
          400: '#7c9bd4',
          500: '#5e83c9',
          600: '#4e6bb3',
          700: '#425a94',
          800: '#394b78',
          900: '#303e63',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(16, 185, 129, 0.25)',
      }
    },
  },
  plugins: [],
}

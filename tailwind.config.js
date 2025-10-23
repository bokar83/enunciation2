/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Coastal Clarity Palette
        ocean: {
          50: '#E6F9FA',
          100: '#CCF3F5',
          200: '#99E7EB',
          300: '#66DBE1',
          400: '#33CFD7',
          500: '#00B7C2', // Main brand color
          600: '#0099A2',
          700: '#007B82',
          800: '#005D62',
          900: '#003F42',
        },
        navy: {
          50: '#F0F3F7',
          100: '#E1E7EF',
          200: '#C3CFDF',
          300: '#A5B7CF',
          400: '#879FBF',
          500: '#6987AF',
          600: '#4B6F9F',
          700: '#2D578F',
          800: '#0F3F7F',
          900: '#071A2E', // Text/background anchor
        },
        orange: {
          50: '#FFF4E6',
          100: '#FFE9CC',
          200: '#FFD399',
          300: '#FFBD66',
          400: '#FFA733',
          500: '#FF7A00', // Accent color
          600: '#E66B00',
          700: '#CC5C00',
          800: '#B34D00',
          900: '#993E00',
        },
        clay: {
          50: '#F5F0EC',
          100: '#EBE1D9',
          200: '#D7C3B3',
          300: '#C3A58D',
          400: '#AF8767',
          500: '#B47C57', // Warm tertiary
          600: '#A06B4D',
          700: '#8C5A43',
          800: '#784939',
          900: '#64382F',
        },
        mist: {
          50: '#FDFDFE',
          100: '#FBFCFD',
          200: '#F7F9FB',
          300: '#F3F6F9', // Light neutral
          400: '#EFF3F7',
          500: '#EBF0F5',
          600: '#E7EDF3',
          700: '#E3EAF1',
          800: '#DFE7EF',
          900: '#DBE4ED',
        },
        carbon: {
          50: '#F4F5F6',
          100: '#E9EBED',
          200: '#D3D7DB',
          300: '#BDC3C9',
          400: '#A7AFB7',
          500: '#919BA5',
          600: '#7B8793',
          700: '#657381',
          800: '#4F5F6F',
          900: '#1E222A', // Dark neutral
        }
      }
    },
  },
  plugins: [],
}

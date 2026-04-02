/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Luxury Romantic Palette
        gold: {
          50: '#FFFBF0',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        cream: {
          50: '#FFFEF9',
          100: '#FFFEF0',
          200: '#FFFCDD',
          300: '#FFFAE5',
          400: '#FFF8DC',
          500: '#FFF5CC',
          600: '#FFF2B3',
          700: '#FFED99',
          800: '#FFE866',
          900: '#FFE333',
        },
        rose: {
          50: '#FFF1F2',
          100: '#FFE4E6',
          200: '#FECDD3',
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#F43F5E',
          600: '#E11D48',
          700: '#BE123C',
          800: '#9F1239',
          900: '#881337',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E3E8E3',
          200: '#C5D1C5',
          300: '#A3B5A3',
          400: '#7E917E',
          500: '#5C7A5C',
          600: '#426342',
          700: '#355035',
          800: '#2A402A',
          900: '#223522',
        },
        blush: {
          50: '#FFDFE8',
          100: '#FFBFCC',
          200: '#FF9FB0',
          300: '#FF7F94',
          400: '#FF5F78',
          500: '#FF3F5C',
          600: '#E62644',
          700: '#BD1831',
          800: '#941024',
          900: '#7A0D1D',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          50: '#FDF2F4',
          100: '#FBE4E8',
          200: '#F7CAD2',
          500: '#C52243',
          600: '#A31936',
          700: '#8B1538',
          800: '#72122E',
          900: '#540D22',
          950: '#380614',
        },
        saffron: {
          50: '#FFFBEB',
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
        gold: {
          light: '#FCE77D',
          DEFAULT: '#E6A117',
          dark: '#B87A0B',
        },
        vedic: {
          cream: '#FFFDF9',
          parchment: '#FDF8EE',
          sand: '#F7EFE2',
          amber: '#C25E00',
          dark: '#0C0A14',
          navy: '#151329',
          card: '#1D1935',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'system-ui', '-apple-system', 'sans-serif'],
        mystic: ['"Cinzel Decorative"', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-reverse-slow': 'spinReverse 50s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

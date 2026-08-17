/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cherry: {
          DEFAULT: '#670626',
          dark: '#4D041C',
          light: '#8F133B',
          glow: '#A81C49',
        },
        blush: {
          DEFAULT: '#E8B7C2',
          light: '#F5D8DF',
          soft: '#FAECEF',
          dark: '#D196A3',
        },
        cream: {
          DEFAULT: '#FDF8F5',
          card: '#FAF2EE',
          dark: '#F3E8E2',
        },
        nearblack: {
          DEFAULT: '#12090D',
          card: '#1D0E16',
          border: '#2A1621',
          surface: '#170B11',
        }
      },
      fontFamily: {
        display: ['Syne', 'Outfit', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'web-pulse': 'webPulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        webPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
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

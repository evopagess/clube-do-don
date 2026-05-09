/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        don: {
          dark: '#0a0a0a', // Preto mais profundo e sofisticado
          light: '#F8F5F0', // Off-white mais elegante
          gold: '#C5A059', // Dourado mais suave e metálico
          goldlight: '#E2C792',
          black: '#000000',
          surface: '#111111', // Cor para cards
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Fonte mais premium que Inter
        serif: ['Cormorant Garamond', 'serif'], // Fonte serifada extremamente elegante
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C5A059 0%, #E2C792 50%, #C5A059 100%)',
      },
      boxShadow: {
        'gold': '0 4px 30px rgba(197, 160, 89, 0.15)',
        'gold-hover': '0 8px 40px rgba(197, 160, 89, 0.3)',
      }
    },
  },
  plugins: [],
}

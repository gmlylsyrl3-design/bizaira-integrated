/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f1ff',
          100: '#c7dcff',
          200: '#a0c8ff',
          300: '#6ca5ff',
          400: '#3d82ff',
          500: '#001830',
          600: '#001427',
          700: '#00101e',
          800: '#000d15',
          900: '#00090c',
        },
        cta: '#007BFF',
        cream: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
        },
        gold: '#001830',
        accent: {
          blue: '#001830',
          sky: '#1a3a60',
          slate: '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease both',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(12px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropFilter: {
        'blur-lg': 'blur(18px)',
      },
    },
  },
  plugins: [],
}

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
          50: '#ebf2ff',
          100: '#d8e4ff',
          200: '#b7cdff',
          300: '#8db2ff',
          400: '#5f8afc',
          500: '#3b6cf7',
          600: '#2f57d4',
          700: '#243ea0',
          800: '#1d3278',
          900: '#182a59',
        },
        cream: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
        },
        gold: '#3b82f6',
        accent: {
          blue: '#3b82f6',
          sky: '#60a5fa',
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

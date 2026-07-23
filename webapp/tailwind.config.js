/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        industrial: {
          950: '#0a1628',
          900: '#0f2744',
          800: '#163660',
          700: '#1e4976',
          600: '#2563eb',
          500: '#3b82f6',
          400: '#60a5fa',
          accent: '#f59e0b',
          danger: '#ef4444',
          success: '#22c55e',
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hind Siliguri', 'sans-serif'],
        display: ['Hind Siliguri', 'sans-serif'],
      },
      colors: {
        mango: {
          50: '#fffaf0',
          100: '#fef5e7',
          200: '#fdeacc',
          300: '#fcd6a1',
          400: '#fab44d',
          500: '#f59e0b',
          600: '#e18000',
          700: '#c25e00',
          800: '#974a00',
          900: '#7c3f00',
        },
        leaf: {
          50: '#f3f8f3',
          100: '#e7f1e8',
          200: '#d1e3d4',
          300: '#a9cba6',
          400: '#7aad75',
          500: '#589050',
          600: '#3d7539',
          700: '#33612f',
          800: '#2a4f26',
          900: '#233e1f',
        },
      },
      backgroundImage: {
        'mango-gradient': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'mango-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSIjZjU5ZTBiIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')",
      },
      boxShadow: {
        'mango': '0 4px 14px -2px rgba(245, 158, 11, 0.25)',
        'mango-lg': '0 10px 25px -3px rgba(245, 158, 11, 0.2), 0 4px 6px -2px rgba(245, 158, 11, 0.1)',
      },
      borderRadius: {
        'mango': '4rem 1rem 4rem 1rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'ripple': 'ripple 1.5s cubic-bezier(0, 0.5, 0.5, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.95)', opacity: '0.5' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      }
    },
  },
  plugins: [],
};

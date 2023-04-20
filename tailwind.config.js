/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'to-right': {
          '0%': { transform: 'translateX(-500px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        'to-left': {
          '0%': { transform: 'translateX(500px)' },
          '100%': { transform: 'translateX(0px)' },
        },
      },
      animation: {
        'to-right': 'to-right 1s ease-in-out',
        'to-left': 'to-left 500ms ease-in-out',
      },
    },
  },
  plugins: [],
};

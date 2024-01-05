/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'brand-darkgrey': '#161616',
        'brand-darkorange': '#DE9E50',
      },
      keyframes: {
        slideRight: {
          '0%': {
            transform: 'translate(100%)',
          },
          '50%': {
            transform: 'translate(50%)',
          },
          '100%': {
            transform: 'translate(0%)',
          },
        },
      },
      animation: {
        'slide-r': 'slideRight 0.15s linear',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

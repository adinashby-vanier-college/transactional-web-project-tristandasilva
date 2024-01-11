/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        "brand-darkgrey": "#161616",
        "brand-darkorange": "#DE9E50",
      },
      keyframes: {
        slideRight: {
          "0%": {
            transform: "translate(100%)",
          },
          "50%": {
            transform: "translate(50%)",
          },
          "100%": {
            transform: "translate(0%)",
          },
        },
      },
      animation: {
        "slide-r": "slideRight 0.15s linear",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

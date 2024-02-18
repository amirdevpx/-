/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: "480x",
      // => @media (min-width: 480x) { ... }
      sm: "576x",
      // => @media (min-width: 576x) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "992px",
      // => @media (min-width: 992px) { ... }
      xl: "1280px",
      // => @media (min-width: 1140px) { ... }
      "2xl": "1280",
      // => @media (min-width: 1280) { ... }
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"]
    },
    backgroundImage: {
      avatar: "url(assets/images/user-image.png)",
      banner: "url(assets/images/banner-bg.jpg)",
    }
  },
  plugins: [],
};

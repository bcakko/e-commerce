module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "main-color": "#854442",
      "side-color": "#3c2f2f",
      "secondary-color": "#6b3432",
      "header-main-color": "#fff4e6",
      "header-secondary-color": "#D6B02E",
      "backdrop-color": "#121212",
    },
    screens: {
      xs: "280px",
      // => @media (min-width: 250px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "765px",
      // => @media (min-width: 765px) { ... }
      lg: "1040px",
      // => @media (min-width: 1040px) { ... }
      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};

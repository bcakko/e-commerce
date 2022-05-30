module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "main-color": "#b84059",
      "side-color": "#40b89f",
      "secondary-color": "#c25067",
    },
    screens: {
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d451f",
        dark_primary: "#1c411d",
        secondary: "#b28f3f",
      },
      spacing: {
        primary: "8.2rem",
        secondary: "4.2rem",
      },
    },
    fontFamily: {
      name1: [""],
      name2: [""],
    },

    screens: {
      xs: "320px",
      ss: "420px",
      sm: "578px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xsl: "1300px",
      xxl: "1440px",
      xll: "1550px",
      xxll: "1750px",
    },
  },
  plugins: [],
};

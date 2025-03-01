/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#0E1B4D",
        secondary: "#4770DB",
        tertiary: "#EFF0F5",
        success: "#2dd55b",
        warning: "#ffc409",
        danger: "#c5000f",
        light: "#FFFFFF",
        medium: "#D7D9E1",
        dark: "#2f2f2f",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        defaultRed: "#f9004d",
        hoverdefaultRed: "#ffcdb8",
        darkTheme: "#282828",
        backGroundColorDarkTheme: "#404040",
      },
    },
  },
  plugins: [],
};

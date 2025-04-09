/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: "#5c3622",
        greencoffee: "#706D54",
      },
      height: {
        128: "100rem",
      },
      fontFamily: {
        archivo: ["Archivo Black", "sans-serif"],
        Noto: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

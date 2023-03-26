/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e835b2",

          secondary: "#eabd9f",

          accent: "#b007bc",

          neutral: "#211E24",

          "base-100": "#243C51",

          info: "#66AFEA",

          success: "#147B46",

          warning: "#F0D75C",

          error: "#FB342D",
        },
      },
    ],
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textTitle: "#444444",
        textBody: "#787878",
        customGray: "#444444",
        customPurple: "#6100C1",
        customLightPurple: "#864AC0",
        customDarkPurple: "#30005F",
        customPink: "#E33FAB",
        customDarkPurple: "#30005F",
      },
      fontFamily: {
        custom: ['SFProRounded', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

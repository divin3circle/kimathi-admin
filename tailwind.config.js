/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#222831",
        secondary: "#393E46",
        teal: "#00ADB5",
        text: "#EEEEEE",
      },
      fontFamily: {
        office: ["Ysabeau Office", 'sans-serif'],
      },
      screens: {
        xxs: "370px",
        xs: "475px",
      },
    },
  },
  plugins: [],
};

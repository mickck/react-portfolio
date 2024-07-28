/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6a994e",
      },
      maxWidth: {
        "90%": "90%",
      },
    },
  },
  plugins: [],
};

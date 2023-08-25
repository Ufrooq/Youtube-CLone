/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGrey: "rgba(255, 255, 255, 0.206)",
      },
    },
  },
  plugins: [],
};

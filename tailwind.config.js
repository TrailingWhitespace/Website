/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        49: "12.25rem",
        50: "12.5rem",
      },
    },
  },
  plugins: [],
};

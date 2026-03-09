/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5BA69A",
        secondary: "#E9B7B7",
        accent: "#F5F5F5",
        dark: "#374151",
      },
    },
  },
  plugins: [],
};
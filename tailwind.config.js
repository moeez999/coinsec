/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#94ABFD", // Customize this value
          DEFAULT: "#4c1d95", // Customize this value
          dark: "#232731", // Customize this value
        },
      },
    },
  },
  plugins: [],
};

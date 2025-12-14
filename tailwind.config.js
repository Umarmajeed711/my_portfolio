/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          // primary: "#C778DD",
          // secondary: "#ABB2BF",
          // background:"#282C33",
          // white:"#FFFFFF",



          // changes

          primary: "#C778DD",      // Accent Purple
          accent: "#61DAFB",       // React Blue 
          secondary: "#BFC7D5",    // Softer Gray
          // background: "#1F232A",
          background:"#282C33",   // Premium Dark Background
          surface: "#2A2F38",      // Cards, sections
          white: "#FFFFFF"

        },
      },
    },
  },
  plugins: [],
};

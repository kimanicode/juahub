const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      light: {
        // ...
        colors: {
          'lagoon1':'#0295a9'
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

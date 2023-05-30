/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkNavy: "#232f3e",
        primary: "#7ED957",
        secondary: "#FFC312",

        textColor: "#191919",
        lightGray: "#9ca3af",
        darkGray: "#374151"

      },
      screens: {
        xs: "320px",
        sm: "480px",
        md: "850px",
        lg: "1024px",
        xl: "1440px",
        xxl: "1916px",
      },
    },
  },
  plugins: [],
}


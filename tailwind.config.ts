export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--main-bg)",
        nav: "var(--nav-bg)",
    },
    },
  },
};
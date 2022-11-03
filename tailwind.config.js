module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#FEFEFE",
        dark: "#383C3E",
        green: "#36C980",
        pink: "#C9367F",
        lightBlue: "#36C9C9",
      },
      width: {
        container: "1280px",
      },
      boxShadow: {
        bookButton: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        darkBookButton: "0px 4px 4px rgba(0, 0, 0, 0.50)",
      },
    },
    fontFamily: {
      roboto: "Roboto",
    },
  },
  plugins: [],
};

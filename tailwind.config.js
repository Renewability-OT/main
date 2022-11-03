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
        container: "1180px",
      },
      boxShadow: {
        Button: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        darkButton: "0px 4px 4px rgba(0, 0, 0, 0.50)",
        banner: "10px 10px 22px -7px rgba(0,0,0,0.62)",
      },
      dropShadow: {
        "3xl": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "4xl": "0px 4px 4px rgba(0, 0, 0, 0.4)",
      },
    },
    fontFamily: {
      roboto: "Roboto",
    },
  },
  plugins: [],
};

module.exports = {
    darkMode: "class",
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                light: "#FEFEFE",
                dark: "#383C3E",
                green: "#36C980",
                pink: "#C9367F",
                lightBlue: "#36C9C9",
                AboutUsBg: "rgba(54, 201, 201, 0.29)"
            },
            objectPosition: {
                "centerTopServices": "0px 25%",
                "centerTopBlog": "0px 50%"
            },
            width: {
                container: "1180px"
            },
            boxShadow: {
                Button: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                darkButton: "0px 4px 4px rgba(0, 0, 0, 0.50)",
                banner: "10px 10px 22px -7px rgba(0,0,0,0.62)"
            },
            dropShadow: {
                "3xl": "0px 4px 4px rgba(0, 0, 0, 0.25)",
                "4xl": "0px 4px 4px rgba(0, 0, 0, 0.4)"
            }
        },
        fontFamily: {
            roboto: "Roboto"
        },
        screens: {
            xxs: "320px",
            "imgXs": "426px",
            xs: "480px",
            sm: "640px",
            md: "768px",
            tablet: "820px",
            lg: "1024px",
            lgXl: "1190px",
            xl: "1280px",
            "2xl": "1536px"
        }
    },
    plugins: []
};

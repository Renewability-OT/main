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
                superLightBlue: "#C9EFEE",
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
                banner: "10px 10px 22px -7px rgba(0,0,0,0.62)",
                article: 'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
                serviceInfo: "0px -9px 13px -7px rgba(0,0,0,0.15)",
            },
            dropShadow: {
                "3xl": "0px 4px 4px rgba(0, 0, 0, 0.25)",
                '3xlWhite': '2px 2px 10px #FEFEFE',
                'blog': "10px 10px 4px rgba(0,0,0,0.24)",
                "4xl": "0px 4px 4px rgba(0, 0, 0, 0.4)"
            },
            backgroundImage: {
                'cloudBg': "url('/assets/photos/cloudbg.jpeg')",
                'leafBg': "url('/assets/photos/leaf.jpeg')",
                'leaf2Bg': "url('/assets/photos/leaf2.jpeg')",
            }
        },
        fontFamily: {
            'Roboto': ['Roboto', 'sans-serif']
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

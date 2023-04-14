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
                darkBlue: "#2eaaa8",
                notificationGreen: 'rgb(240 253 244)',
                notificationRed: 'rgb(254 242 242)',
                notificationIconGreen: 'rgb(74 222 128)',
                notificationIconRed: 'rgb(248 113 113)',
                notificationIconHoverRed: 'rgb(254 226 226)',
                notificationIconHoverGreen: 'rgb(220 252 231)',
                notificationTextGreen: 'rgb(22 163 74)',
                notificationTextRed: 'rgb(220 38 38)',
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
                Button: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                InsetButton: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
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
            'Ubuntu': ['Ubuntu', 'sans-serif']
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

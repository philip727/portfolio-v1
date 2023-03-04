/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sp: "200px",
            mp: "350px",
            bp: "500px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "xl-offset": "1370px",
            "2xl": "1536px",
            "2xl-offset": "1550px",
            "3xl": "1720px",
            "FHD": "1920px",
            "2k": "2560px",
        },
        extend: {
            grayscale: {
                25: "25%",
                50: "50%",
            },
            width: {
                '112': '36rem',
                '90s': '90vw',
                '140': '49.5rem',
                '156': '53rem',
                "180": '62rem',
                '95p': '95%',
            },
            height: {
                '100': '25rem',
                '108': '32rem',
                '112': '36rem',
            }
        },
    },
    plugins: [],
};

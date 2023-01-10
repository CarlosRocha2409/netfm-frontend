/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#ecba13",
                "primary-light": "#f4dc72",
                "primary-dark": "#b79522",
                secondary: "#96b4cc",
                "secondary-dark": "#84a4c2",
                "background-dark": "#353d30",
                "background-white": "#a8a8a8",
            },
            fontFamily: {
                marker: "Permanent Marker",
                pen: "Nanum Pen Script",
            },
        },
    },
    plugins: [],
};
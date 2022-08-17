/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        colors: {
            blue: {
                primary: "#111827",
                secondary: "#2b4865",
            },
            green: {
                primary: "#8fe3cf",
                secondary: "#007357",
            },
            grey: {
                primary: "#aaaaaa",
            },
            white: {
                primary: "#ffffff",
            },
        },
        fontFamily: {
            primary: ["Roboto", "sans-serif"],
            secondary: ["Montserrat", "sans-serif"],
        },
    },
    plugins: [],
};

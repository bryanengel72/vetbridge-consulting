import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Purple palette from flyer
                'brand-primary': '#2d2b55', // Deep violet/dark purple
                'brand-secondary': '#6b63b5', // Lighter purple/lavender
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        `./src/pages/**/*.{js,jsx,ts,tsx}`,
        `./src/components/**/*.{js,jsx,ts,tsx}`,
        `./src/templates/**/*.{js,jsx,ts,tsx}`,
        `./src/posts/**/*.{md,mdx}`,
    ],
    theme: {
        extend: {
            colors: {
                'h-blue': '#0596ff',
                'h-gray': '#d9d9d9',
                'post-hover-gray': '#ececec',
                'h-white': '#ffffff',
            },
            keyframes: {
                expandWidth: {
                    '0%': { width: '0' },
                    '100%': { width: '24rem' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                blinkEffect: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            animation: {
                'expand-width': 'expandWidth 1s ease-in-out 1s forwards',
                'fade-in': 'fadeIn 1s ease-in-out 1.5s forwards',
                'blink-effect': 'blinkEffect 1s ease-in-out infinite alternate',
            },
        },
    },
    plugins: [],
};

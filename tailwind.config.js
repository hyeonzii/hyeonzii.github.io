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
        },
    },
    plugins: [],
};

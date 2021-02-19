//tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
    purge: {
        enabled: true,
        content: [
            './**/*.html',
            './**/*.razor'
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            brandBlue: '#2b59c0',
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            red: colors.red,
            yellow: colors.amber,
            green: colors.emerald,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.violet,
            pink: colors.pink,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
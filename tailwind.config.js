/* eslint-disable @typescript-eslint/no-var-requires */
/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./**/*.{js,jsx,tsx}'],
    theme: {
        extend: {
            colors: { ...colors, custom: '#ccc' }
        }
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '*[onclick]': { cursor: 'pointer' }
            }
            addUtilities(newUtilities, ['responsive', 'hover'])
        }
    ]
}

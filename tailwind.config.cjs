/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                neutral: {
                    100: '#FFFFFF',
                    200: '#F4F6F8',
                    300: '#979797',
                    500: '#666666',
                    800: '#08140C',
                    900: '#000000',
                },
                green: {
                    100: '#61CD85',
                    300: '#25D366',
                    900: '#061B01',
                },
                blue: {
                    100: '#8291E9',
                    200: '#55ACEE',
                    300: '#0099FF',
                    400: '#021794',
                },
                red: '#DB0A40',
                pink: '#C837AB',
                orange: '#FA3004',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                lato: ['Lato', 'sans-serif'],
                sacramento: ['Sacramento', 'cursive'],
            },
        },
    },
    plugins: [],
};

module.exports = {
    purge: ['./src/**/*.{js,jsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: [
                [
                    'Inter',
                    'system-ui',
                    '-apple-system',
                    'Segoe UI',
                    'Roboto',
                    'sans-serif',
                    'Segoe UI',

                    'Helvetica',
                    'Arial',
                    'Apple Color Emoji',
                    'Segoe UI Emoji'
                ]
            ]
        },
        extend: {
            colors: {
                blue: {
                    1000: '#34304C'
                }
            }
        }
    },
    variants: {},
    plugins: []
}

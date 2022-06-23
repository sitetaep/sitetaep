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
        },
        textShadow: {
            'default': '0 2px 0 #000',
            'md': '0 2px 2px #000',
            'h2': '0 0 3px #FF0000, 0 0 5px #0000FF',
            'h1': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
        }
    },
    variants: {},
    plugins: []
}

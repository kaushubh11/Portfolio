/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                palette: {
                    pine: '#0A210F',
                    forest: '#14591D',
                    moss: '#99AA38',
                    lime: '#E1E289',
                    sky: '#ACD2ED',
                    dark: '#061208',
                    card: '#0A1D10',
                    border: 'rgba(225, 226, 137, 0.15)',
                },
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            boxShadow: {
                'palette-glow': '0 0 30px rgba(153, 170, 56, 0.25)',
                'palette-sky': '0 0 30px rgba(172, 210, 237, 0.25)',
                'palette-lime': '0 0 30px rgba(225, 226, 137, 0.25)',
            },
        },
    },
    plugins: [],
}

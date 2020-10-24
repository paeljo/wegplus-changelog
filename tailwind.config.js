module.exports = {
    presets: [require('@paeljo/wegplus-tailwind-preset')],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'accent-1': '#333',
            },
        },
    },
    variants: {},
    plugins: [],
}

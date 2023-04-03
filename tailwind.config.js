const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

// -------------------------------------------------------------
// @title: Tips for Tailwind configuration
// @author: viget.com
// https://www.viget.com/articles/tips-for-your-tailwind-config/
// -------------------------------------------------------------
const em = px => `${px / 16}em`;
const rem = px => ({ [px]: `${px / 16}rem` });
const px = num => ({ [num]: `${num}px` });

// @type {import('tailwindcss').Config}

module.exports = {
    content: [
        './dist/**/*.html',
        './src/assets/js/**/*.js',
        './src/views/**/*.js',
        './src/views/**/*.html',
        './src/views/**/*.md',
        './src/views/**/*.njk',
    ],
    theme: {
        extend: {
            // ------------------------------------------------
            // Border
            // ------------------------------------------------
            borderWidth: ({ theme }) => ({}),
            borderColor: ({ theme }) => ({}),
            borderRadius: ({ theme }) => ({}),
            // ------------------------------------------------
            // Background
            // ------------------------------------------------
            backgroundColor: ({ theme }) => ({}),
            backgroundImage: ({ theme }) => ({
                'triangel': 'url("data:image/svg+xml,%3Csvg fill=\'%23ffffff\' stroke=\'%231f1f1f\' stroke-width=\'4\' stroke-linecap=\'round\' stroke-linejoin=\'round\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,24 12,10 L24,24\' /%3E%3C/svg%3E")',
            }),
            // ------------------------------------------------
            // Typography
            // ------------------------------------------------
            colors: {
                black: '#1F1F1F',
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans]
            },
            fontSize: ({ theme }) => ({}),
            fontWeight: ({ theme }) => ({}),
            textColor: ({ theme }) => ({}),
            textTransform: ({ theme }) => ({}),
            // ------------------------------------------------
            // Spacing
            // ------------------------------------------------
            // 'name': 'var(--)',
            spacing:   ({ theme }) => ({
                'touch': 'var(--ui-touch-size, theme(spacing[11]))',
            }),
            padding:   ({ theme }) => ({}),
            height:    ({ theme }) => ({}),
            minHeight: ({ theme }) => ({
                ...theme('spacing'),
            }),
            maxHeight: ({ theme }) => ({ ...theme('spacing'), }),
            width:     ({ theme }) => ({ 'prose': '72ch', }),
            minWidth:  ({ theme }) => ({
                ...theme('spacing'),
                ...theme('screens'),
            }),
            maxWidth:  ({ theme }) => ({
                ...theme('spacing'),
                ...theme('screens'),
            }),
            // ------------------------------------------------
            // SVG
            // ------------------------------------------------
            fill: ({ theme }) => ({
                none: 'none',
                ...theme('colors'),
            }),
            stroke: ({ theme }) => ({
                none: 'none',
                ...theme('colors'),
            }),
            strokeWidth: ({ theme }) => ({
                '2.5': '2.5',
                '3': '3',
            }),
            // ------------------------------------------------
            // Breakpoints
            // ------------------------------------------------
            screens: ({ theme }) => ({
                'xxs': em(380),
                'xs':  em(480),
                'mouse': {
                    raw: '(hover: hover) and (pointer: fine)'
                },
                'touch': {
                    // https://gist.github.com/perjo927/e1f114398fc6fb8538a1412bea800f1a
                    raw: 'not all and (pointer: coarse), (min--moz-device-pixel-ratio:0)'
                    // raw: '(pointer: coarse)'
                },
                ...defaultTheme.screens,
            }),
            // ------------------------------------------------
            // Transitions
            // ------------------------------------------------
            transitionTimingFunction: ({ theme }) => ({
                // Cubic
                'in-cubic': 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
                'out-cubic': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                // Circ
                'in-circ': 'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
                'out-circ': 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
                'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
                // Expo
                'in-expo': 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
                'out-expo': 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
                'in-out-expo': 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
                // Quad
                'in-quad': 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
                'out-quad': 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                'in-out-quad': 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
                // Quart
                'in-quart': 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
                'out-quart': 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
                'in-out-quart': 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
                // Quint
                'in-quint': 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                'out-quint': 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
                'in-out-quint': 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',
                // Sine
                'in-sine': 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
                'out-sine': 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
                'in-out-sine': 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
                // Back
                'in-back': 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
                'out-back': 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
                'in-out-back': 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
            }),
            // ------------------------------------------------
            // Animations & @keyframes
            // ------------------------------------------------
            // @source: https://tail-animista.vercel.app/play/entrances/slide-in-fwd/slide-in-fwd-bottom
            animation: {
                "slide-in-fwd-bottom": "slide-in-fwd-bottom 350ms ease-in-out both",
                "slide-in-fwd-top": "slide-in-fwd-top 350ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
            },
            keyframes: {
                "slide-in-fwd-bottom": {
                    "0%": {
                        transform: "translateZ(-1400px) translateY(8px)",
                        opacity: "0"
                    },
                    to: {
                        transform: "translateZ(0) translateY(0)",
                        opacity: "1"
                    }
                },
                "slide-in-fwd-top": {
                    "0%": {
                        transform: "translateZ(0) translateY(8px)",
                        opacity: "0"
                    },
                    to: {
                        transform: "translateZ(0) translateY(0)",
                        opacity: "1"
                    }
                },
            },
        },
    },
    plugins: [
        // https://github.com/stevecochrane/tailwindcss-logical
        require('tailwindcss-logical'),

        plugin(function({ addVariant }) {
            addVariant('no-js', '.no-js &')
        }),
        // plugin(function({ addComponents }) {
        //     addComponents({
        //         '[data-btn]': {
        //             'outline': 'none',
        //             'appearance': 'none',
        //             'position': 'relative',
        //             'display': 'inline-flex',
        //             'align-items': 'center',
        //             'justify-content': 'center',
        //             'min-width': 'var(--touch-size, theme(spacing.11))',
        //             'min-height': 'var(--btn-height, var(--touch-size, theme(spacing.11)))',
        //             'padding-block': 'var(--btn-padding-y, theme(padding[2.5]))',
        //             'padding-inline': 'var(--btn-padding-x, theme(padding.4))',
        //             'writing-mode': 'horizontal-tb',
        //             'direction': 'ltr',
        //             'color': 'var(--btn-txt-color)', 
        //             'fontSize': 'var(--btn-font-size, theme(fontSize.sm))',
        //             'fontWeight': 'var(--btn-font-weight, theme(fontWeight.medium))',
        //             'lineHeight': '1',
        //             'textAlign':'center',
        //             'textTransform': 'var(--btn-txt-transform)',
        //             'borderRadius': 'var(--btn-radius)',
        //             'backgroundColor': 'var(--btn-bkg-color)',
        //             'transitionProperty': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        //             'transitionTimingFunction': 'cubic-bezier(0.4, 0, 0.2, 1)',
        //             'transitionDuration': '150ms',
        //             'touchAction': 'manipulation',
        //         },
        //     })
        // })
    ],
};

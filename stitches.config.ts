import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            neutral100: '#FFFFFF',
            neutral200: '#F4F6F8',
            neutral500: '#666666',
            neutral800: '#08140C',
            neutral900: '#000000',
            green100: '#61CD85',
            green300: '#25D366',
            green900: '#061B01',
            blue100: '#8291E9',
            blue200: '#55ACEE',
            blue300: '#0099FF',
            blue400: '#021794',
            red: '#DB0A40',
            pink: '#C837AB',
            orange: '#FA3004',
        },
    },
    media: {
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
    },
    utils: {
        marginX: (value: string | number) => ({
            marginLeft: value,
            marginRight: value,
        }),
        paddingX: (value: string | number) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        paddingY: (value: string | number) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        bg: (value: string | number) => ({ backgroundColor: value }),
    },
});

import type * as Stitches from '@stitches/react';
import { styled } from '../../stitches.config';

const Button = styled('button', {
    color: '$neutral100',
    borderRadius: '9999px',
    textTransform: 'capitalize',
    fontSize: '16px',
    fontWeight: 'bold',
    width: 'fit-content',
    height: 'fit-content',
    wordBreak: 'keep-all',
    whiteSpace: 'nowrap',
    fontFamily: 'Poppins, sans-serif',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
        backgroundColor: '$blue400',
    },
    '&:focus': {
        outline: 'none',
    },
    variants: {
        size: {
            medium: {
                padding: '15px 40px',
            },
            small: {
                padding: '12px 24px',
            },
        },
        color: {
            blue200: {
                backgroundColor: '$blue200',
            },
            blue400: {
                backgroundColor: '$blue400',
            },

            disabled: {
                backgroundColor: '#999999',
                '&:hover': {
                    backgroundColor: '#999999',
                },
            },
            blue300: {
                backgroundColor: '$blue300',
            },
            green: {
                backgroundColor: '$green300',
            },
            pink: {
                backgroundColor: '$pink',
            },
            adminYellow100: {
                backgroundColor: '$yellow100',
                color: '#000',
                fontSize: '14px',
            },
            adminBlue400: {
                backgroundColor: '$blue400',
                fontSize: '12px',
                border: '1px solid $blue400',
                width: '144px',
            },
            adminOutline: {
                backgroundColor: 'transparent',
                border: '1px solid $blue400',
                color: '$blue400',
                width: '144px',
                fontSize: '12px',
                '&:hover': {
                    color: '$neutral100',
                },
            },
            outline: {
                backgroundColor: 'transparent',
                border: '1px solid $blue400',
                fontSize: '12px',
                width: '144px',
                color: '$blue400',
                '&:hover': {
                    color: '$neutral100',
                },
            },
        },
    },
    defaultVariants: {
        color: 'blue400',
        size: 'medium',
    },
});
export type ButtonVariants = Stitches.VariantProps<typeof Button>;
export default Button;

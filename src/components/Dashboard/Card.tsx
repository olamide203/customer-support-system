import type * as Stitches from '@stitches/react';
import { styled } from '../../../stitches.config';
import Button from '../Button';

const StyledDiv = styled('div', {
    Width: '320px',
    height: '290px',
    borderRadius: '30px',
    backgroundColor: '$neutral100',
    borderLeft: '10px solid $blue400',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@bp1': {
        width: '320px',
        borderLeft: '20px solid',
    },
    '@bp2': {
        width: '481px',
        borderLeft: '30px solid',
    },
    variants: {
        color: {
            blue200: {
                borderColor: '$blue200',
            },
            blue400: {
                borderColor: '$blue400',
            },
            blue300: {
                borderColor: '$blue300',
            },
            green: {
                borderColor: '$green300',
            },
            pink: {
                borderColor: '$pink',
            },
        },
    },
});

const StyledHeading = styled('h2', {
    color: '$neutral900',
    fontSize: '32px',
    fontWeight: 'bold',
    fontFamily: 'Poppins, sans-serif',
    textTransform: 'uppercase',
    variants: {
        color: {
            blue200: {
                color: '$blue200',
            },
            blue400: {
                color: '$blue400',
            },
            blue300: {
                color: '$blue300',
            },
            green: {
                color: '$green300',
            },
            pink: {
                color: '$pink',
            },
        },
    },
});

export type StyledDivVariants = Stitches.VariantProps<typeof StyledDiv>;

interface CardProps {
    name: string;
    stats: number;
    icon: string;
    color: StyledDivVariants['color'];
}

const Card = ({ name, stats, icon, color }: CardProps) => {
    return (
        <StyledDiv color={color}>
            <div className="grid grid-cols-[auto_1fr] items-center justify-center font-poppins text-3xl gap-[25px]">
                <img src={icon} alt="" />
                <StyledHeading color={color}>{name}</StyledHeading>
                <div className="grid items-center justify-center text-neutral-900/80">
                    <h3 className="font-bold text-4xl text-center">{stats}</h3>
                    <p className="text-xl font-semibold text-center capitalize">
                        chats
                    </p>
                </div>
                <Button size="small" color={color} className="justify-self-end">
                    view chats
                </Button>
            </div>
        </StyledDiv>
    );
};

export default Card;

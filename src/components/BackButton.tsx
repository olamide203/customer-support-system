import { useNavigate } from 'react-router-dom';
import { RxArrowLeft } from 'react-icons/rx';
import type * as Stitches from '@stitches/react';
import { styled } from '../../stitches.config';

const Button = styled('button', {
    color: '$blue400',
    borderRadius: '9999px',
    display: 'grid',
    placeItems: 'center',
    height: '32px',
    width: '32px',
    border: '1px solid $blue400',
    variants: {
        color: {
            outline: {
                color: '$blue400',
                border: '1px solid $blue400',
            },
            white: {
                color: '$neutral100',
                border: '1px solid $neutral100',
            },
        },
    },
    defaultVariants: {
        color: 'outline',
    },
});

export type ButtonVariants = Stitches.VariantProps<typeof Button>;

interface BackButtonProps {
    color?: ButtonVariants['color'];
}

const BackButton = ({ color }: BackButtonProps) => {
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate(-1);
    };

    return (
        <Button onClick={navigateBack} type="button" color={color}>
            <RxArrowLeft className="inline" />
        </Button>
    );
};

BackButton.defaultProps = {
    color: 'outline',
};

export default BackButton;

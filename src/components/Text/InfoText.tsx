import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const blinkAnimation = keyframes`
  0%, 100% {
    color: red;
  }
  50% {
    color: blue;
  }
`;

const StyledInfoText = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    animation: ${blinkAnimation} 2s infinite;

    span {
        font-family: 'Poppins';
        font-size: 16px;
    }
`;

interface Props {
    text: string;
}

const InfoText = ({ text }: Props) => {
    return (
        <StyledInfoText>
            <img
                src="/icons/alert-circle.svg"
                alt=""
                style={{ animation: ` ${blinkAnimation} 2s infinite` }}
            />
            <span>{text}</span>
        </StyledInfoText>
    );
};

export default InfoText;

// import React from 'react';

// interface Props {
//     text: string;
// }

// const InfoText = ({ text }: Props) => {
//     return (
//         <div className="flex flex-row gap-1 ">
//             <img src="/icons/alert-circle.svg" alt="" />
//             <span className="font-poppins text-blue-400 ">{text}</span>
//         </div>
//     );
// };

// export default InfoText;

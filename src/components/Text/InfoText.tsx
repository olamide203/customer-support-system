import React from 'react';

interface Props {
    text: string;
}

const InfoText = ({ text }: Props) => {
    return (
        <div className="flex flex-row gap-1">
            <img src="/icons/alert-circle.svg" alt="" />
            <span className="font-poppins text-blue-400">{text}</span>
        </div>
    );
};

export default InfoText;

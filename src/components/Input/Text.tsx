import React, { useState } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    placeholder?: string;
    label?: string | null;
    pattern?: string;
    onClick?: () => void;
}

const TextInput = ({
    name,
    placeholder,
    pattern,
    label,
    onClick,
    className,
    ...rest
}: TextInputProps) => {
    return (
        <>
            {label && (
                <label
                    htmlFor={name}
                    className="font-poppins text-neutral-900/80 font-semibold px-2 capitalize"
                >
                    {label}
                </label>
            )}
            <input
                name={name}
                id={name}
                placeholder={placeholder}
                pattern={pattern}
                required
                onClick={onClick}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...rest}
                className={`h-[50px] w-full border border-neutral-300 rounded-lg p-2 px-4 text-neutral-900 outline-none placeholder:text-grey-2 sm:text-base ${className}`}
            />
        </>
    );
};

TextInput.defaultProps = {
    pattern: '[A-Za-z0-9]+',
    placeholder: '',
    label: null,
    onClick: () => {},
};

export default TextInput;

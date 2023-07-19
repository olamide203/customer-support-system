import React, { useState } from 'react';

interface TextInputProps {
    name: string;
    placeholder?: string;
    label: string;
    pattern?: string;
}

const TextInput = ({ name, placeholder, pattern, label }: TextInputProps) => {
    const [value, setValue] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="relative grid gap-2">
            <label
                htmlFor={name}
                className="font-poppins text-neutral-900/80 font-semibold px-2 capitalize"
            >
                {label}
            </label>
            <input
                name={name}
                id={name}
                placeholder={placeholder}
                pattern={pattern}
                required
                value={value}
                onChange={handleChange}
                className="h-[50px] w-full border border-neutral-300 rounded-lg p-2 px-4 text-neutral-900 outline-none placeholder:text-grey-2 focus:border-neutral-900 sm:text-base"
            />
        </div>
    );
};

TextInput.defaultProps = {
    pattern: '[A-Za-z0-9]+',
    placeholder: '',
};

export default TextInput;

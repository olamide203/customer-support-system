import React, { useState } from 'react';

interface TextAreaProps {
    name: string;
    placeholder?: string;
    label: string;
}

const TextArea = ({ name, placeholder, label }: TextAreaProps) => {
    const [value, setValue] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="relative grid gap-2">
            <label
                htmlFor={name}
                className="font-poppins text-neutral-900/80 font-semibold text-[12px] px-2 capitalize"
            >
                {label}
            </label>
            <textarea
                name={name}
                id={name}
                placeholder={placeholder}
                required
                value={value}
                onChange={handleChange}
                className="w-full border border-neutral-300 rounded-lg p-2 px-4 text-neutral-900  outline-none placeholder:text-grey-2 focus:border-neutral-900 sm:text-base h-[110px]"
            />
        </div>
    );
};

TextArea.defaultProps = {
    placeholder: '',
};

export default TextArea;

import { useState } from 'react';

interface EmailInputProps {
    name: string;
    placeholder?: string;
    label: string;
    onChange?: (e: any) => void;
    value?: string;
}

function EmailInput({
    name,
    placeholder,
    label,
    onChange,
    value: data,
}: EmailInputProps) {
    const [value, setValue] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="grid gap-2 relative">
            <label
                htmlFor={name}
                className="font-poppins text-neutral-900/80 font-semibold px-2 capitalize"
            >
                {label}
            </label>
            <input
                name={name}
                id={name}
                type="email"
                placeholder={placeholder}
                required
                value={data || value}
                onChange={onChange || handleChange}
                className="h-[50px] w-full border border-neutral-300 rounded-lg p-2 px-4 text-neutral-900 outline-none placeholder:text-grey-2 focus:border-neutral-900 sm:text-base"
            />
        </div>
    );
}

EmailInput.defaultProps = {
    placeholder: '',
};

export default EmailInput;

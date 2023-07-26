import React, { useState } from 'react';
import { FiEyeOff, FiEye } from 'react-icons/fi';

interface PasswordInputProps {
    name: string;
    label: string;
    placeholder?: string;
    onChange?: any;
}

function PasswordInput({
    name,
    label,
    placeholder,
    onChange,
}: PasswordInputProps) {
    const [value, setValue] = useState('');
    const [isPassword, setIsPassword] = useState(true);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
        setValue(e.target.value);
    };
    // hide or show password
    const togglePassword = () => {
        setIsPassword(!isPassword);
    };
    return (
        <div className="relative grid gap-2">
            <div className="grid grid-cols-2">
                <label
                    htmlFor={name}
                    className="font-poppins text-neutral-900/80 font-semibold px-2 capitalize"
                >
                    {label}
                </label>
                <button
                    className="justify-self-end px-2 flex gap-2 relative items-center text-xs font-normal font-poppins outline-none"
                    onClick={togglePassword}
                    type="button"
                >
                    {isPassword && (
                        <>
                            <FiEyeOff className="text-neutral-300" />
                            show
                        </>
                    )}
                    {!isPassword && (
                        <>
                            <FiEye className="text-neutral-300" />
                            hide
                        </>
                    )}
                </button>
            </div>
            <input
                type={isPassword ? 'password' : 'text'}
                name="password"
                id="password"
                placeholder={placeholder}
                value={value}
                required
                onChange={handleChange}
                className="peer h-[50px] w-full border border-neutral-300 rounded-lg p-2 px-4 text-neutral-900 outline-none placeholder:text-grey-2 focus:border-neutral-900 sm:text-base"
            />
        </div>
    );
}

PasswordInput.defaultProps = {
    placeholder: '',
};

export default PasswordInput;

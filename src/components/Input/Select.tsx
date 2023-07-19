import React from 'react';
import Select from 'react-select';

interface SelectInputProps {
    options: { value: string; label: string }[];
    placeholder: string;
    name: string;
    label: string;
}

function SelectInput({ options, placeholder, name, label }: SelectInputProps) {
    return (
        <div className="relative grid gap-2">
            <label
                htmlFor={name}
                className="font-poppins text-neutral-900/80 font-semibold px-2 capitalize"
            >
                {label}
            </label>
            <Select
                options={options}
                placeholder={placeholder}
                name={name}
                styles={{
                    control: (provided, state) => ({
                        ...provided,
                        border: '1px solid #979797',
                        height: '48px',
                        outline: 'none',
                        '@media (min-width: 768px)': {
                            fontSize: '16px',
                        },
                    }),
                    indicatorSeparator: (provided, state) => ({
                        ...provided,
                        display: 'none',
                    }),
                    dropdownIndicator: (provided, state) => ({
                        ...provided,
                        height: '40px',
                    }),
                }}
            />
        </div>
    );
}

export default SelectInput;

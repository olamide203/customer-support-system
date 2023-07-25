import React from 'react';
import Select from 'react-select';

interface SelectInputProps {
    options: { value: string; label: string }[];
    name: string;
    label: string;
    onChange?: (selected: { label: string; value: string } | null) => void;
}

function SelectInput({ options, name, label, onChange }: SelectInputProps) {
    return (
        <div className="relative flex flex-row items-center justify-center">
            <label
                htmlFor={name}
                className="font-poppins text-neutral-900/80 font-semibold px-2 capitalize"
            >
                {label}
            </label>
            <Select
                options={options}
                name={name}
                defaultValue={options[0]}
                onChange={onChange}
                styles={{
                    control: (provided, state) => ({
                        ...provided,
                        border: '1px solid #979797',
                        height: '4px',
                        width: '200px',
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
SelectInput.defaultProps = {
    onChange: () => {},
};
export default SelectInput;

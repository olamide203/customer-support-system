import React from 'react';
import Select from 'react-select';

const options = [
    { value: '10', label: '10' },
    { value: '15', label: '15' },
    { value: '20', label: '20' },
    { value: '30', label: '30' },
];

interface SelectInputProps {
    onChange?: (selected: { label: string; value: string } | null) => void;
}

function SelectInput({ onChange }: SelectInputProps) {
    return (
        <div className="relative flex flex-row items-center justify-center">
            <Select
                options={options}
                defaultValue={options[0]}
                menuPlacement="auto"
                onChange={onChange}
                styles={{
                    control: (provided, state) => ({
                        ...provided,
                        border: '1px solid #979797',
                        height: '4px',
                        width: '80px',
                        outline: 'none',
                        overflow: 'hidden',
                        '@media (min-width: 768px)': {
                            fontSize: '16px',
                        },
                    }),
                    indicatorSeparator: (provided, state) => ({
                        ...provided,
                        display: 'none',
                    }),
                    indicatorsContainer: (provided, state) => ({
                        ...provided,
                        backgroundColor: '#021794',
                        height: '40px',
                        borderRadius: '2px',
                        overflow: 'hidden',
                    }),
                    dropdownIndicator: (provided, state) => ({
                        ...provided,
                        height: '40px',
                    }),
                }}
            />
            <p className="font-poppins text-neutral-900/80 font-semibold px-2 capitalize whitespace-nowrap">
                Per Page
            </p>
        </div>
    );
}
SelectInput.defaultProps = {
    onChange: () => {},
};
export default SelectInput;

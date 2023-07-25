import React from 'react';
import Select from 'react-select';

interface SelectInputProps {
    onChange?: (selected: { label: string; value: string } | null) => void;
}

const filters = [
    {
        value: 'all',
        label: 'All',
    },
    {
        value: 'today',
        label: 'Today',
    },
    {
        value: 'last 7 days',
        label: 'Last 7 days',
    },
];

function SelectInput({ onChange }: SelectInputProps) {
    return (
        <div className="relative flex flex-row items-center justify-center">
            <p className="font-poppins text-neutral-900/80 font-semibold px-2 capitalize whitespace-nowrap">
                Filter By:
            </p>
            <Select
                options={filters}
                defaultValue={filters[2]}
                onChange={onChange}
                styles={{
                    control: (provided, state) => ({
                        ...provided,
                        border: '1px solid #979797',
                        height: '43px',
                        width: '150px',
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

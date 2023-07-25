import { useState, useEffect } from 'react';
import { RxChevronDown } from 'react-icons/rx';
import DropdownMenu from './DropdownMenu';
import TextInput from '../Input/Text';
import { type Option } from '../../data/categories';

interface SelectInputProps {
    options: Option[];
    label?: string | null;
    name: string;
    onValueChange?: (val: string) => void;
}

const SelectInput = ({
    options,
    label,
    name,
    onValueChange,
}: SelectInputProps) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        if (onValueChange) onValueChange(value);
    }, [value, onValueChange]);
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
            <DropdownMenu options={options} onSelect={setValue}>
                <div className="relative flex flex-col gap-2 w-full">
                    <TextInput
                        name="categories"
                        readOnly
                        value={value}
                        className="capitalize"
                    />
                    <button
                        type="button"
                        className="absolute h-full right-0 rounded active:bg-neutral-200 grid items-center justify-center aspect-square"
                    >
                        <RxChevronDown className="" />
                    </button>
                </div>
            </DropdownMenu>
        </>
    );
};

SelectInput.defaultProps = {
    label: null,
    onValueChange: () => {},
};

export default SelectInput;

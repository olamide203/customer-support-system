import { useState, useEffect } from 'react';
import { RxChevronDown } from 'react-icons/rx';
import DropdownMenu, { DropdownMenu2 } from './DropdownMenu';
import TextInput from '../Input/Text';
import { type Option } from '../../data/categories';

interface SelectInputProps {
    options: Option[];
    label?: string | null;
    name: string;
    value?: 'string';
    onValueChange?: (val: string) => void;
}

const SelectInput = ({
    options,
    label,
    name,
    onValueChange,
    value: data,
}: SelectInputProps) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        console.log('djjd', value);
        if (onValueChange) {
            onValueChange(value);
        }
    }, [value]);
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
                        value={data || value}
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




export const SelectInput2 = ({
    options,
    label,
    name,
    onValueChange,
    value: data,
}: SelectInputProps) => {
    const [value, setValue] = useState<any>('');
    useEffect(() => {
        console.log('djjd', value);
        if (onValueChange) {
            onValueChange(value);
        }
    }, [value]);
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
            <DropdownMenu2 options={options} onValueChange={onValueChange}>
                <div className="relative flex flex-col gap-2 w-full">
                    <TextInput
                        name="categories"
                        readOnly
                        value={data || value}
                        className="capitalize"
                    />
                    <button
                        type="button"
                        className="absolute h-full right-0 rounded active:bg-neutral-200 grid items-center justify-center aspect-square"
                    >
                        <RxChevronDown className="" />
                    </button>
                </div>
            </DropdownMenu2>
        </>
    );
};


SelectInput.defaultProps = {
    label: null,
    onValueChange: () => {},
};
SelectInput2.defaultProps = {
    label: null,
    onValueChange: () => {},
};

export default SelectInput;

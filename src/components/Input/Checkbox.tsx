import { useState } from 'react';
import { Root, Indicator } from '@radix-ui/react-checkbox';
import { RxCheck } from 'react-icons/rx';

interface CheckboxProps {
    label: string;
    onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = ({ label, onCheckedChange }: CheckboxProps) => {
    const [checked, setChecked] = useState(false);
    const handleCheckChange = () => {
        setChecked((prev) => !prev);
        if (onCheckedChange) {
            onCheckedChange(!checked);
        }
    };
    return (
        <div className="flex items-center">
            <Root
                className="flex h-[20px] w-[20px] appearance-none items-center justify-center rounded-[4px] bg-white outline-none border border-neutral-300 data-[state=checked]:border-blue-400 data-[state=checked]:bg-blue-400"
                onCheckedChange={handleCheckChange}
                checked={checked}
                id="c1"
            >
                <Indicator className="text-white">
                    <RxCheck />
                </Indicator>
            </Root>
            <label
                className="pl-[8px] text-xs leading-none text-neutral-800 font-semibold font-poppins capitalize"
                htmlFor="c1"
            >
                {label}
            </label>
        </div>
    );
};

Checkbox.defaultProps = {
    onCheckedChange: null,
};

export default Checkbox;

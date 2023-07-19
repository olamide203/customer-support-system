import { Root, Indicator } from '@radix-ui/react-checkbox';
import { RxCheck } from 'react-icons/rx';

interface CheckboxProps {
    label: string;
}

const Checkbox = ({ label }: CheckboxProps) => (
    <form>
        <div className="flex items-center">
            <Root
                className="flex h-[20px] w-[20px] appearance-none items-center justify-center rounded-[4px] bg-white outline-none border border-neutral-900"
                id="c1"
            >
                <Indicator className="text-neutral-800">
                    <RxCheck />
                </Indicator>
            </Root>
            <label
                className="pl-[15px] text-xs leading-none text-neutral-800 font-bold font-poppins capitalize"
                htmlFor="c1"
            >
                {label}
            </label>
        </div>
    </form>
);

export default Checkbox;

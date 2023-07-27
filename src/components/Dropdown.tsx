import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { IoIosArrowDown } from 'react-icons/io';
import LogOut from '../helpers/Logout';

const Dropdown = () => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button
                    className="rounded-full w-fit inline-flex items-center justify-center text-violet11 bg-white outline-none uppercase text-blue-400"
                    aria-label="Customise options"
                    type="button"
                >
                    damilola
                    <IoIosArrowDown className="ml-[5px] text-[15px]" />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="min-w-[180px] bg-white rounded-md p-[5px] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade shadow-lg"
                    sideOffset={5}
                >
                    <DropdownMenu.Item
                        className="group leading-none rounded-[3px] flex items-center py-4 px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                        onClick={() => LogOut()}
                    >
                        Logout
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default Dropdown;

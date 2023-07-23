import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxChevronUp } from 'react-icons/rx';

export interface ItemProps {
    title: string;
    path: string;
    icon?: string;
    children?: ItemProps[];
}
interface SidebarItemProps {
    item: ItemProps;
    sidebarExpanded: boolean;
}

const SidebarItem = ({ item, sidebarExpanded }: SidebarItemProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    // toggle sidebar item
    const toggleMenu = () => {
        setIsExpanded((prev) => !prev);
    };
    return (
        <>
            {!item.children && (
                <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                        `w-full transition-all grid grid-cols-auto grid-flow-col items-center h-12 px-2 sm:px-3 gap-x-2 cursor-pointer hover:bg-sky-600 overflow-x-hidden ${
                            isActive ? 'bg-blue-200' : ''
                        } ${
                            sidebarExpanded
                                ? 'justify-start'
                                : 'justify-items-center'
                        }`
                    }
                >
                    <img src={item.icon} alt="" />
                    {sidebarExpanded && (
                        <span className="justify-self-start self-center text-sm font-semibold capitalize whitespace-nowrap">
                            {item.title}
                        </span>
                    )}
                </NavLink>
            )}
            {sidebarExpanded && item.children && (
                <div
                    className={`w-full transition-all grid gap-x-2 cursor-pointer border-4 border-blue-400 overflow-x-hidden  ${
                        isExpanded ? 'bg-blue-100' : ''
                    }`}
                >
                    <button
                        className="w-full transition-all grid grid-cols-[auto_1fr_auto] items-center justify-start h-12 gap-x-2 px-4 cursor-pointer hover:bg-sky-600 overflow-x-hidden capitalize rounded-none text-left"
                        onClick={toggleMenu}
                        type="button"
                    >
                        <img src={item.icon} alt="" />

                        {item.title}
                        <RxChevronUp
                            className={`inline text-xl justify-self-end ${
                                !isExpanded ? 'rotate-180' : ''
                            } transition-transform duration-500`}
                        />
                    </button>
                    <div className={`px-4 ${isExpanded ? 'block' : 'hidden'}`}>
                        {item.children.map((childItem) => (
                            <SidebarItem
                                item={childItem}
                                key={childItem.title}
                                sidebarExpanded={sidebarExpanded}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default SidebarItem;

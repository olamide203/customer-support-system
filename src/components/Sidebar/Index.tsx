import { motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SidebarItem, { ItemProps } from './Item';
import data from '../../data/sidebar.json';
import LogOut from '../../helpers/Logout';

interface SidebarProps {
    sidebarExpanded: boolean;
    toggleSidebar: () => void;
}

function Sidebar({ sidebarExpanded, toggleSidebar }: SidebarProps) {
    return (
        <motion.div
            className={`fixed left-0 min-h-screen mx-0 flex flex-col bg-blue-400 text-white shadow-xl transition-all duration-300 z-[100] `}
            layout
            style={{ width: sidebarExpanded ? '276px' : '64px' }}
        >
            <button
                className="hidden md:grid content-center justify-center  w-10 h-10 p-2 absolute -right-5 top-4 bg-gray-800 text-white hover:bg-white hover:text-gray-800 rounded-3xl cursor-pointer"
                onClick={toggleSidebar}
                type="button"
            >
                {!sidebarExpanded && <IoIosArrowForward />}
                {sidebarExpanded && <IoIosArrowBack />}
            </button>
            <div className="mt-16 transition-all py-5 flex flex-col gap-6 px-2">
                {data.map((item: ItemProps) => (
                    <SidebarItem
                        item={item}
                        key={item.title}
                        sidebarExpanded={sidebarExpanded}
                    />
                ))}
                <button
                    type="button"
                    className={`w-full transition-all grid grid-cols-auto grid-flow-col items-center h-12 px-3 gap-x-2 cursor-pointer hover:bg-sky-600 overflow-x-hidden  ${
                        sidebarExpanded
                            ? 'justify-start'
                            : 'justify-items-center'
                    }`}
                    onClick={() => LogOut()}
                >
                    <img src="/icons/logout.svg" alt="" />
                    {sidebarExpanded && (
                        <span className="justify-self-start self-center text-sm font-semibold capitalize whitespace-nowrap">
                            logout
                        </span>
                    )}
                </button>
            </div>
        </motion.div>
    );
}

export default Sidebar;

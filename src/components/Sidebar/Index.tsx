import SidebarItem, { ItemProps } from './Item';
import data from '../../data/sidebar.json';

function Sidebar() {
    return (
        <div className="fixed left-0 min-h-screen overflow-y-auto w-[276px] m-0 flex flex-col bg-blue-400 text-white shadow-xl transition-all duration-300">
            <div className="mt-16 transition-all py-5">
                {data.map((item: ItemProps) => (
                    <SidebarItem item={item} key={item.title} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;

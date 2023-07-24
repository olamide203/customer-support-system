import { NavLink } from 'react-router-dom';

const items = [
    {
        title: 'Complaints',
        path: '',
    },
    {
        title: 'Enquiries',
        path: 'enquiries',
    },
    {
        title: 'Requests',
        path: 'requests',
    },
];

const NavMenu = () => {
    return (
        <div className="flex flex-row justify-between border border-neutral-400 px-5">
            {items.map((item) => (
                <NavLink
                    to={item.path}
                    key={item.title}
                    className={({ isActive }) =>
                        `p-5 relative ${
                            isActive
                                ? 'after:absolute after:w-full after:bottom-0 after:left-0 after:flex after:h-[4px] after:rounded after:bg-blue-400'
                                : ''
                        }`
                    }
                >
                    complaints
                </NavLink>
            ))}
        </div>
    );
};

export default NavMenu;

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

const NavMenu = (data: any) => {
    var title = '';
    switch (data.state) {
        case 1:
            title = 'Complaints';
            break;

        case 2:
            title = 'Enquiries';
            break;

        case 3:
            title = 'Requests';
            break;
        default:
            break;
    }

    // <NavLink
    //     to={item.path}
    //     key={item.title}
    //     className={({ isActive }) =>
    //         `p-5 relative ${
    //             isActive
    //                 ? 'after:absolute after:w-full after:bottom-0 after:left-0 after:flex after:h-[4px] after:rounded after:bg-blue-400'
    //                 : ''
    //         }`
    //     }
    // >
    //     {item.title}
    // </NavLink>

    return (
        <div className="flex flex-row justify-between border border-neutral-400 px-5">
            {items.map((item, index) => {
                var number = 1;
                if (item?.title === 'Enquiries') {
                    number = 2;
                } else if (item?.title === 'Requests') {
                    number = 3;
                } else {
                    number = 1;
                }
                return (
                    <div
                        className={`p-5 relative ${
                            title === item?.title
                                ? 'after:absolute after:w-full after:bottom-0 after:left-0 after:flex after:h-[4px] after:rounded after:bg-blue-400'
                                : ''
                        }`}
                        onClick={() => data.onClick(number)}
                        key={index}
                    >
                        {item.title}
                    </div>
                );
            })}
        </div>
    );
};

export default NavMenu;

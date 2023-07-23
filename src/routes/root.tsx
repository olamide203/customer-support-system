import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar/Index';
import useMediaQuery from '../hooks/useMediaquery';

function Root() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [sidebarExpanded, setSidebarExpanded] = useState(!isMobile);

    useEffect(() => {
        if (isMobile) {
            setSidebarExpanded(false);
        }
    }, [isMobile, setSidebarExpanded]);
    const toggleSidebar = () => {
        if (isMobile) {
            setSidebarExpanded(false);
            return;
        }
        setSidebarExpanded((prev) => !prev);
    };

    return (
        <>
            <Header />
            <Sidebar
                sidebarExpanded={sidebarExpanded}
                toggleSidebar={toggleSidebar}
            />
            <div
                className={`min-h-[calc(100vh_-_70px)] mt-[70px]  bg-neutral-200 overflow-x-hidden ${
                    sidebarExpanded
                        ? 'ml-[276px] max-w-[calc(100vw_-_276px)]'
                        : 'ml-16 max-w-[calc(100vw_-_64px)]'
                }`}
            >
                <Outlet />
            </div>
        </>
    );
}

export default Root;

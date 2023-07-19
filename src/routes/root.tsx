import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar/Index';

function Root() {
    return (
        <>
            <Header />
            <Sidebar />
            <div className="min-h-[calc(100vh_-_70px)] max-w-[calc(100vw_-_276px)] mt-[70px] ml-[276px] bg-neutral-200 overflow-x-hidden">
                <Outlet />
            </div>
        </>
    );
}

export default Root;

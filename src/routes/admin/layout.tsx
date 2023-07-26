import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';

function AdminLayout() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (pathname === '/admin') {
            navigate('/admin/dashboard');
        }
    });

    return (
        <>
            <Header isAdmin />
            <div className="max-w-screen mt-[70px] pt-[35px] min-h-[calc(100vh_-_70px)] overflow-x-hidden overflow-y-hidden grid items-center justify-center bg-neutral-200">
                <Outlet />
            </div>
        </>
    );
}

export default AdminLayout;

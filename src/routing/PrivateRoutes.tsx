import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getToken, getUser } from '../hooks/constants/axiosInstance';

const PrivateRoutes = () => {
    const authed = getToken();

    return authed ? (
        authed.length > 0 ? (
            <Outlet />
        ) : (
            <Navigate
                to={{
                    pathname: '/login',
                }}
            />
        )
    ) : (
        <Navigate
            to={{
                pathname: '/login',
            }}
        />
    );
};
export default PrivateRoutes;

export const PrivateRoutesAdmin = () => {
    const user = getUser();

    return user ? (
        user === 'admin_User' ? (
            <Outlet />
        ) : (
            <Navigate
                to={{
                    pathname: '/',
                }}
            />
        )
    ) : (
        <Navigate
            to={{
                pathname: '/',
            }}
        />
    );
};

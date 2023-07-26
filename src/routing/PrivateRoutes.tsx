import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../hooks/constants/axiosInstance';

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

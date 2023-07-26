import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../hooks/constants/axiosInstance';

type Props = {
    children: any;
    roles: string;
};

const PrivateRoutes = (children: any) => {
    const authed = getToken();

    return authed ? (
        children
    ) : (
        <Navigate
            to={{
                pathname: '/login',
            }}
        />
    );
};
export default PrivateRoutes;

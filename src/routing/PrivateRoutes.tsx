import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../hooks/constants/axiosInstance';

type Props = {
    children: any;
    roles: string;
};

 const PrivateRoutes = ({ component: Component }: any) => {

    
    const authed = getToken();
    

    return authed ? (
        authed.length > 0 ? (
            Component
        ) : (
            <Navigate
                to={{
                    pathname: '/unauthorized',
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

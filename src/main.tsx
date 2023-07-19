import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './routes/root';
import CreateUser from './routes/create-user';
import ResetPassword from './routes/reset-password';
import ForgotPassword from './routes/forgot-password';
import LoginPage from './routes/login';
import Dashboard from './routes/dashboard';
import UpdateAccountKnowledgeBase from './routes/account/update-knowledge-base';
import UpdateGeneralKnowledgeBase from './routes/general/update-knowledge-base';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                element: <Dashboard />,
                index: true,
            },
            {
                path: 'general',
                children: [
                    {
                        path: 'update-knowledge-base',
                        element: <UpdateGeneralKnowledgeBase />,
                    },
                ],
            },
            {
                path: 'account',
                children: [
                    {
                        path: 'update-knowledge-base',
                        element: <UpdateAccountKnowledgeBase />,
                    },
                ],
            },
        ],
    },
    {
        path: '/create-user',
        element: <CreateUser />,
    },
    {
        path: '/reset-password',
        element: <ResetPassword />,
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

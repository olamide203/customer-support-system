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
import UpdateGeneralKnowledgeBase from './routes/general/update-knowledge-base';
import KnowledgeBasePage from './routes/knowledge-base';
import AdminDashboard from './routes/admin/admin-dashboard';
import AdminNotification from './routes/admin/admin-notification';

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
                path: 'update-knowledge-base',
                element: <UpdateGeneralKnowledgeBase />,
            },

            {
                path: 'knowledge-base',
                element: <KnowledgeBasePage />,
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
    {
        path: '/admin-dashboard',
        element: <AdminDashboard />,
    },
    {
        path: '/admin-notification',
        element: <AdminNotification />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

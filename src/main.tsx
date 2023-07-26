import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider as ToastProvider } from '@radix-ui/react-toast';
import './index.css';
import Root from './routes/root';
import CreateUser from './routes/create-user';
import ResetPassword from './routes/reset-password';
import ForgotPassword from './routes/forgot-password';
import LoginPage from './routes/login';
import Dashboard from './routes/dashboard';
import UpdateGeneralKnowledgeBase from './routes/general/update-knowledge-base';
import AddNewCategory from './routes/general/add-new-category';
import KnowledgeBasePage from './routes/KnowledgeBase/Page';
import KnowledgeBaseLayout from './routes/KnowledgeBase/Layout';
import ComplaintsPage from './routes/KnowledgeBase/complaints/page';
import SingleComplaint from './routes/KnowledgeBase/complaints/[id]';
import NotificationsPage from './routes/notifications';
import AdminLayout from './routes/admin/layout';
import AdminKnowledgeBaseLayout from './routes/admin/knowledgeBase/layout';
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
                path: 'add-new-category',
                element: <AddNewCategory />,
            },
            {
                path: 'update-knowledge-base',
                element: <UpdateGeneralKnowledgeBase />,
            },
            {
                path: 'notifications',
                element: <NotificationsPage />,
            },

            {
                path: 'knowledge-base',
                element: <KnowledgeBaseLayout />,
                children: [
                    {
                        path: '',
                        element: <KnowledgeBasePage />,
                        children: [
                            {
                                element: <ComplaintsPage />,
                                index: true,
                            },
                            {
                                element: <ComplaintsPage />,
                                path: 'complaints',
                            },
                        ],
                    },
                    {
                        element: <SingleComplaint />,
                        path: 'complaints/:id',
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
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: 'dashboard',
                element: <AdminDashboard />,
            },
            {
                path: 'notifications',
                element: <NotificationsPage />,
            },
            {
                path: 'knowledge-base',
                element: <AdminKnowledgeBaseLayout />,
                children: [
                    {
                        path: '',
                        element: <KnowledgeBasePage />,
                        children: [
                            {
                                element: <ComplaintsPage />,
                                index: true,
                            },
                            {
                                element: <ComplaintsPage />,
                                path: 'complaints',
                            },
                        ],
                    },
                ],
            },
        ],
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
        <ToastProvider>
            <RouterProvider router={router} />
        </ToastProvider>
    </React.StrictMode>
);

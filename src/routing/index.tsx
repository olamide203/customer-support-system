import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes as Switch,
} from 'react-router-dom';
import { Provider as ToastProvider } from '@radix-ui/react-toast';
import '../index.css';
import Root from '../routes/root';
import CreateUser from '../routes/create-user';
import ResetPassword from '../routes/reset-password';
import ForgotPassword from '../routes/forgot-password';
import LoginPage from '../routes/login';
import Dashboard from '../routes/dashboard';
import UpdateGeneralKnowledgeBase from '../routes/general/update-knowledge-base';
import KnowledgeBasePage from '../routes/KnowledgeBase/Page';
import KnowledgeBaseLayout from '../routes/KnowledgeBase/Layout';
import ComplaintsPage from '../routes/KnowledgeBase/complaints/page';
import SingleComplaint from '../routes/KnowledgeBase/complaints/[id]';
import NotificationsPage from '../routes/notifications';
import AdminDashboard from '../routes/admin/admin-dashboard';
import AdminNotification from '../routes/admin/admin-notification';
import PrivateRoutes from './PrivateRoutes';

const NotFound = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for could not be found.</p>
        </div>
    );
};

const Routes = () => {
    return (
        <Switch>
            <Route element={<PrivateRoutes />}>
                <Route element={<Root />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route
                        path="update-knowledge-base"
                        element={<UpdateGeneralKnowledgeBase />}
                    />
                    <Route
                        path="notifications"
                        element={<NotificationsPage />}
                    />

                    <Route
                        element={<KnowledgeBaseLayout />}
                        path="knowledge-base"
                    >
                        <Route
                            path="/knowledge-base"
                            element={<KnowledgeBasePage />}
                        >
                            <Route element={<ComplaintsPage />} index />
                            <Route
                                path="complaints"
                                element={<ComplaintsPage />}
                            />
                        </Route>
                        <Route
                            path="complaints/:id"
                            element={<SingleComplaint />}
                        />
                    </Route>
                </Route>

                <Route path="admin-dashboard" element={<AdminDashboard />} />
                <Route
                    path="admin-notification"
                    element={<AdminNotification />}
                />
                <Route path="create-user" element={<CreateUser />} />
            </Route>

            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="login" element={<LoginPage />} />

            <Route path="*" element={<NotFound />} />
        </Switch>
    );
};

export { Routes };

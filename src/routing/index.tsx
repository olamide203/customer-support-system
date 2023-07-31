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
import PrivateRoutes, { PrivateRoutesAdmin } from './PrivateRoutes';
import AddNewCategory from '../routes/general/add-new-category';
import ViewRequestDialog from '../routes/admin/view-request-dialog';
import AdminLayout from '../routes/admin/layout';
import AdminKnowledgeBaseLayout from '../routes/admin/knowledgeBase/layout';
import AdminRequest from '../routes/admin/admin-request';
import SingleEnquire from '../routes/KnowledgeBase/enquires/[id]';
import SingleRequest from '../routes/KnowledgeBase/requests/[id]';

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
            {/* element={<PrivateRoutes />} */}
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

                        <Route
                            path="enquires/:id"
                            element={<SingleEnquire />}
                        />
                        <Route
                            path="requests/:id"
                            element={<SingleRequest />}
                        />
                    </Route>

                    <Route
                        path="add-new-category"
                        element={<AddNewCategory />}
                    />
                </Route>

                <Route element={<PrivateRoutesAdmin />}>
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route path="dashboard" element={<AdminDashboard />} />
                        <Route
                            path="notifications"
                            element={<AdminNotification />}
                        />

                        <Route
                            element={<AdminKnowledgeBaseLayout />}
                            path="knowledge-base"
                        >
                            <Route path="" element={<KnowledgeBasePage />}>
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

                            <Route
                                path="enquires/:id"
                                element={<SingleEnquire />}
                            />
                            <Route
                                path="requests/:id"
                                element={<SingleRequest />}
                            />
                        </Route>

                        <Route
                            path="view-request-dialog"
                            element={<ViewRequestDialog />}
                        />
                        <Route path="request" element={<AdminRequest />} />
                    </Route>

                    <Route path="create-user" element={<CreateUser />} />
                </Route>
            </Route>

            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="login" element={<LoginPage />} />

            <Route path="*" element={<NotFound />} />
        </Switch>
    );
};

export { Routes };

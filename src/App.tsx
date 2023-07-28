import React, { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routing';
import { Provider as ToastProvider } from '@radix-ui/react-toast';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from './hooks/react-query/queryClient';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ToastProvider>
                    <Routes />
                    <ToastContainer />
                </ToastProvider>
            </BrowserRouter>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
};

export { App };

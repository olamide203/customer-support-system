import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 600000, // 10 minutes
            cacheTime: 900000, // 15 minutes
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
        },
    },
});

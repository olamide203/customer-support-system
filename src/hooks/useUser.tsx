import { AxiosResponse } from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { axiosInstance } from './constants/axiosInstance';

async function requestSignin(values: any): Promise<any | null> {
    const { data }: AxiosResponse<any> = await axiosInstance.post(
        `/api/authenticate`,
        values
    );
    return data;
}

interface UseUser {
    user: any | null;
    updateUser: (user: any) => void;
    clearUser: () => void;
    isLoading: any;
}

export function useRequestSignin(): any {
    return useMutation((value) => requestSignin(value), {
        onSuccess: (res) => {},
        onError: (err: any) => {},
    });
}

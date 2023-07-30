import { AxiosResponse } from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { axiosInstance } from './constants/axiosInstance';
import { ErrorToast } from '../helpers/Toast';

async function getRequest(values: any): Promise<any | null> {
    const { data }: AxiosResponse<any> = await axiosInstance.post(
        `/api/request/new`,
        values
    );
    return data;
}

async function acceptOrReject(values: any): Promise<any | null> {
    const { data }: AxiosResponse<any> = await axiosInstance.post(
        `/api/approve-issue`,
        values
    );
    return data;
}

export function useGetRequest(): any {
    return useMutation((value) => getRequest(value), {
        onSuccess: (res) => {},
        onError: (err: any) => {
            if (err?.response) {
                ErrorToast(err?.response?.data?.detail);
            } else {
                ErrorToast(err.message);
            }
        },
    });
}

export function useApproveReject(): any {
    return useMutation((value) => acceptOrReject(value), {
        onSuccess: (res) => {},
        onError: (err: any) => {
            if (err?.response) {
                ErrorToast(err?.response?.data?.detail);
            } else {
                ErrorToast(err.message);
            }
        },
    });
}

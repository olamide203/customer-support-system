import { AxiosResponse } from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { axiosInstance } from './constants/axiosInstance';
import { ErrorToast } from '../helpers/Toast';

async function requestSignin(values: any): Promise<any | null> {
    const { data }: AxiosResponse<any> = await axiosInstance.post(
        `/api/authenticate`,
        values
    );
    return data;
}

async function createUser(values: any): Promise<any | null> {
    const { data }: AxiosResponse<any> = await axiosInstance.post(
        `/api/admin/users`,
        values
    );
    return data;
}

async function createCategories(values: any): Promise<any | null> {
    const { data }: AxiosResponse<any> = await axiosInstance.post(
        `/api/categories/create`,
        values
    );
    return data;
}

async function getCategories(): Promise<any | null> {
    const { data }: AxiosResponse<any> = await axiosInstance.post(
        `/api/categories/all`
    );
    return data;
}

async function updateCategories(value: any): Promise<any | null> {
    const { data }: AxiosResponse<any> = await axiosInstance.post(
        `/api/categories/update`,
        value
    );
    return data;
}

async function getIssues(value: any): Promise<any | null> {
    const { data }: AxiosResponse<any> = await axiosInstance.post(
        `/api/issues/approved`,
        value
    );
    return data;
}

export function useRequestSignin(): any {
    return useMutation((value) => requestSignin(value), {
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

export function useCreateCategories(): any {
    return useMutation((value) => createCategories(value), {
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

export function useGetCategories(): any {
    return useMutation(() => getCategories(), {
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

export function useUpdateCategories(): any {
    return useMutation((values) => updateCategories(values), {
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

export function useCreateUser(): any {
    return useMutation((value) => createUser(value), {
        onSuccess: (res) => {},
        onError: (err: any) => {},
    });
}

export function useGetIssues(): any {
    return useMutation((value) => getIssues(value), {
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

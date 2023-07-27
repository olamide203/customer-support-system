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

async function createCategories(values: any): Promise<any | null> {
    const { data }: AxiosResponse<any> = await axiosInstance.post(
        `/api/categories/create`,
        values
    );
    return data;
}

async function getCategories(): Promise<any | null> {
    const { data }: AxiosResponse<any> = await axiosInstance.get(
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
export function useRequestSignin(): any {
    return useMutation((value) => requestSignin(value), {
        onSuccess: (res) => {},
        onError: (err: any) => {},
    });
}

export function useCreateCategories(): any {
    return useMutation((value) => createCategories(value), {
        onSuccess: (res) => {},
        onError: (err: any) => {},
    });
}

export function usegetCategories(): any {
    return useMutation(() => getCategories(), {
        onSuccess: (res) => {},
        onError: (err: any) => {},
    });
}

export function useUpdateCategories(): any {
    return useMutation((values) => updateCategories(values), {
        onSuccess: (res) => {},
        onError: (err: any) => {},
    });
}

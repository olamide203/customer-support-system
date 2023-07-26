const TOKEN_KEY = 'app_token';

import axios, { AxiosRequestConfig } from 'axios';
import { baseUrl } from './BaseUrl';

export const saveToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};

const token: string | null = localStorage.getItem('token');

const config: AxiosRequestConfig = { baseURL: baseUrl };
const axiosInstance = axios.create(config);

if (getToken()) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
}
axiosInstance.interceptors.response.use(
    (response) => {
        // Do something with the response data
        return response;
    },
    (error) => {
        // Handle response error
        //console.log(error, "updateeeeeeeeeeeeee");
        return Promise.reject(error);
        // console.log(error, "updateeeeeeeeeeeeee");
    }
);

export { axiosInstance };

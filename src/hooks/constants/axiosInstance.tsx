const TOKEN_KEY = 'app_token';
const USER_KEY = 'user_key';

import axios, { AxiosRequestConfig } from 'axios';
import { baseUrl } from './BaseUrl';

export const saveToken = (token: string, user: string) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, user);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

export const getUser = () => {
    return localStorage.getItem(USER_KEY);
};

export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
};

const token: string | null = localStorage.getItem('token');

const config: AxiosRequestConfig = { baseURL: baseUrl };
const axiosInstance = axios.create(config);

if (getToken()) {
    axiosInstance.defaults.headers.common[
        'Authorization'
    ] = `Bearer ${getToken()}`;
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

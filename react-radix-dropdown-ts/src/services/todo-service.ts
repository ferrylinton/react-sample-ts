import { axiosInstance } from "../config/axios";
import * as cookieService from './cookies-service';


export async function find() {
    const token = cookieService.getToken();
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    return await axiosInstance.get(`${process.env.REACT_APP_API_HOST}/api/todos`, config)
};

export async function findById(id: string) {
    const token = cookieService.getToken();
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    return await axiosInstance.get(`${process.env.REACT_APP_API_HOST}/api/todos/${id}`, config)
};

export async function create(task: string) {
    const token = cookieService.getToken();
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    const data = { task };

    return await axiosInstance.post(`${process.env.REACT_APP_API_HOST}/api/todos`, data, config)
};

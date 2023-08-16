import { axiosInstance } from "../config/axios"

export async function authenticate(username: string, password: string) {
    return await axiosInstance
        .post(`${process.env.REACT_APP_API_HOST}/api/authenticate`, {
            username,
            password,
        })
};

export async function revoke(token : string) {
    return await axiosInstance.post(`${process.env.REACT_APP_API_HOST}/api/revoke`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
};
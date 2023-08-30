import { AxiosResponse } from "axios"
import { axiosInstance } from "../config/axios"
import { getToken } from "./cookies-service"

export async function token(username: string, password: string): Promise<AxiosResponse<AuthenticatedUser>> {
    return await axiosInstance
        .post('/auth/token', {
            username,
            password,
        })
};

export async function revoke() {
    return await axiosInstance.post('/auth/revoke', getSecureConfig())
};

export function getSecureConfig() {
    return {
        headers: {
            'x-access-token': getToken()
        }
    }
}
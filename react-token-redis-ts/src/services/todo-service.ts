import { AxiosResponse } from "axios";
import { axiosInstance } from "../config/axios";
import { getSecureConfig } from "./auth-service";


export async function info(): Promise<AxiosResponse> {
    return await axiosInstance.get(`/`)
};

export async function find(): Promise<AxiosResponse<Todo[]>> {
    return await axiosInstance.get<Todo[]>(`/api/todoes`, getSecureConfig())
};

export async function findById(id: string) {
    return await axiosInstance.get(`/api/todoes/${id}`, getSecureConfig())
};

export async function create(task: string) {
    return await axiosInstance.post<Todo | ErrorResponse>(`/api/todoes`, { task }, getSecureConfig())
};

export async function update(id: string) {
    return await axiosInstance.put<Todo | ErrorResponse>(`/api/todoes/${id}`, { done: true }, getSecureConfig())
};

export async function deleteById(id: string) {
    return await axiosInstance.delete<Todo | ErrorResponse>(`/api/todoes/${id}`, getSecureConfig())
};

import { AxiosResponse } from "axios";
import { axiosInstance } from "../config/axios";



export async function find(): Promise<AxiosResponse<Todo[]>> {
    return await axiosInstance.get<Todo[]>(`/api/todoes`)
};

export async function findById(id: string) {
    return await axiosInstance.get(`/api/todoes/${id}`)
};

export async function create(task: string) {
    return await axiosInstance.post<Todo | ErrorResponse>(`/api/todoes`, { task })
};

export async function update(id: string) {
    return await axiosInstance.put<Todo | ErrorResponse>(`/api/todoes/${id}`, { done: true })
};

export async function deleteById(id: string) {
    return await axiosInstance.delete<Todo | ErrorResponse>(`/api/todoes/${id}`)
};

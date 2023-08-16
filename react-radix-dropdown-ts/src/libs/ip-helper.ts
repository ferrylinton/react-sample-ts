import { axiosInstance } from "../config/axios";


type IpResponse = {
    ip: string
}

export async function getIp() {
    const { data, status } = await axiosInstance.get<IpResponse>('https://api.ipify.org?format=json');

    if (status === 200) {
        return data.ip;
    } else {
        return '0.0.0.0';
    }
};
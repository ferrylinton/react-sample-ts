import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_TODO_API_HOST,
    //baseURL: 'http://localhost:5000',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 30000,
    timeoutErrorMessage: "Time out!",
});


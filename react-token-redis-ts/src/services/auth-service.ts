import Cookies from 'js-cookie';
import { axiosInstance } from "../config/axios";
import { AUTHENTICATED_USER_COOKIE } from '../config/constant';


export async function login(username: string, password: string){
    const result = await axiosInstance.post('/auth/token', { username, password, });

    if (result.status === 200) {
        const expires = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        Cookies.set(AUTHENTICATED_USER_COOKIE, JSON.stringify(result.data), { expires });
    }

    return result;
};

export async function logout(): Promise<AuthenticatedUser | Message> {
    try {
        await axiosInstance.post('/auth/revoke', getSecureConfig());
        Cookies.remove(AUTHENTICATED_USER_COOKIE);
        return { message: 'OK' }
    } catch (error: any) {
        return { message: error.message }
    }
};

export function getSecureConfig() {
    return {
        headers: {
            'x-access-token': tokenFromCookie()
        }
    }
}

export function authenticatedUserFromCookie(): AuthenticatedUser | null {
    const cookie = Cookies.get(AUTHENTICATED_USER_COOKIE);

    if (cookie) {
        return JSON.parse(cookie);
    } else {
        return null;
    }
}

export function tokenFromCookie(): string | null {
    const authenticatedUser = authenticatedUserFromCookie();

    if (authenticatedUser) {
        return authenticatedUser.token;
    } else {
        return null;
    }
}

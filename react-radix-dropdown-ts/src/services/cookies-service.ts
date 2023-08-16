import Cookies from 'js-cookie';
import { AUTHENTICATED_USER_COOKIE } from '../config/constant';

export function getAuthenticatedUser(): AuthenticatedUser | null {
    const cookie = Cookies.get(AUTHENTICATED_USER_COOKIE);

    if (cookie) {
        return JSON.parse(cookie);
    } else {
        return null;
    }
}

export function getToken(): string | null {
    const authenticatedUser = getAuthenticatedUser();

    if (authenticatedUser) {
        return authenticatedUser.token;
    } else {
        return null;
    }
}

export function setAuthenticatedUser(value: string) {
    var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
    Cookies.set(AUTHENTICATED_USER_COOKIE, value, {
        expires: inFifteenMinutes
    });
}

export function removeAuthenticatedUser() {
    Cookies.remove(AUTHENTICATED_USER_COOKIE)
}
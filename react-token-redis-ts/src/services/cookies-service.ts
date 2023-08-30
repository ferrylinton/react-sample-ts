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
        window.location.href = "/login";
        return null;
    }
}

export function setAuthenticatedUser(authenticatedUser: AuthenticatedUser) {
    var expires = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    Cookies.set(AUTHENTICATED_USER_COOKIE, JSON.stringify(authenticatedUser), { expires });
}

export function removeAuthenticatedUser() {
    Cookies.remove(AUTHENTICATED_USER_COOKIE)
}
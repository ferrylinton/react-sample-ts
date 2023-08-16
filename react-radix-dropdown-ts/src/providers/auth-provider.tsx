import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { revoke } from '../services/auth-service';
import * as cookiesService from "../services/cookies-service";


export const AuthContext = createContext<AuthContextProps>({
    user: null,
    setAuthenticatedUser: (_user: AuthenticatedUser | null) => null,
    getAuthenticatedUser: () => { return null },
    logout: async () => { },
});

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [user, setUser] = useState<AuthenticatedUser | null>(null);

    useEffect(() => {
        if (!user) {
            setAuthenticatedUser(cookiesService.getAuthenticatedUser());
        }

    }, [])

    const setAuthenticatedUser = (user: AuthenticatedUser | null) => {
        setUser(user);
    }

    const getAuthenticatedUser = (): AuthenticatedUser | null => {
        if (!user) {
            const authenticatedUser = cookiesService.getAuthenticatedUser();
            setAuthenticatedUser(authenticatedUser);

            return authenticatedUser;
        }

        return user;
    }

    const logout = async () => {
        try {
            cookiesService.removeAuthenticatedUser();
            const user = getAuthenticatedUser();

            if (user) {
                const response = await revoke(user.token);

                if (response.status === 200 && response.data) {
                    console.log('token is revoked');
                }
            }

        } catch (error) {
            console.log(error);
        }

        setUser(null);
    }

    const value: AuthContextProps = {
        user,
        setAuthenticatedUser,
        getAuthenticatedUser,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);
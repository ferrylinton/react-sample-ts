import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { revoke } from '../services/auth-service';
import * as cookiesService from "../services/cookies-service";


export const AuthContext = createContext<AuthContextProps>({
    getAuthenticatedUser: () => { return null },
    logout: async () => { },
});

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [authenticatedUser, setAuthenticatedUser] = useState<AuthenticatedUser | null>(null);

    const getAuthenticatedUser = (): AuthenticatedUser | null => {
        if (!authenticatedUser) {
            setAuthenticatedUser(cookiesService.getAuthenticatedUser());
        }

        return authenticatedUser;
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

        setAuthenticatedUser(null);
    }

    const value: AuthContextProps = {
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
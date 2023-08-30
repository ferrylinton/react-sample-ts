import { createContext, useContext } from 'react';


export const AuthContext = createContext<AuthContextProps>({
    user: null,
    setAuthenticatedUser: (_user: AuthenticatedUser | null) => null,
    getAuthenticatedUser: () => { return null },
    logout: async () => { },
});

export const useAuthContext = () => useContext(AuthContext);
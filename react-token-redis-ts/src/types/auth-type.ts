type AuthContextProps = {
    user: AuthenticatedUser | null,
    setAuthenticatedUser: (user: AuthenticatedUser | null) => void,
    getAuthenticatedUser: () => AuthenticatedUser | null,
    logout: () => Promise<void>,
}

type AuthenticatedUser = {
    username: string,
    token: string
}
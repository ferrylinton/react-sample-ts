type AuthContextProps = {
    getAuthenticatedUser: () => AuthenticatedUser | null,
    logout: () => Promise<void>,
}

type AuthenticatedUser = {
    username: string,
    token: string
}
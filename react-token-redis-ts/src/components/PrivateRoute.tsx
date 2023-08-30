import { Navigate, } from "react-router";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../providers/auth-context";


export default function PrivateRoute() {
    const { getAuthenticatedUser } = useAuthContext();

    if (!getAuthenticatedUser()) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />
}

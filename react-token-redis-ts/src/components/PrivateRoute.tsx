import { Navigate, } from "react-router";
import { Outlet } from "react-router-dom";
import { authenticatedUserFromCookie } from "../services/auth-service";



export default function PrivateRoute() {


    if (!authenticatedUserFromCookie()) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />
}

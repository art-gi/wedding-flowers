import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from './../../context/AuthContext.js';

function Guard() {
    const { user, isAuthentificated } = useContext(AuthContext);

    return (
        isAuthentificated(user)
            ? <Outlet />
            : < Navigate to="/login" />
    )

}
export default Guard;
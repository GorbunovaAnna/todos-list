import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUser } from "../../redux/selectors";

export const PrivateRoute = ({children}) => {
    const user = useSelector(getUser);

    return user ? children : <Navigate to="/" />
}
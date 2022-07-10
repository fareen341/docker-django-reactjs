import React from "react";
import { Redirect, useNavigate } from "react-router-dom";





function RequireAuth({ UserAccount }) {
    let x = true
    let navigate = useNavigate();
    if (!x) {
        return navigate('/login')
    }
    return <UserAccount />;
}

export default RequireAuth;
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import jwt_decode from "jwt-decode";
const PrivateRoute = ({ children, ...rest }) => {
    const token = sessionStorage.getItem('token')
    let user;
    if(token){
        user = jwt_decode(token);
    }
    

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;
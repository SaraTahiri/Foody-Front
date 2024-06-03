import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useContext(UserContext);

    return isAuthenticated ? element : <Navigate to="/" />;
};

export default PrivateRoute;

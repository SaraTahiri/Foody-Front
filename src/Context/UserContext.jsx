import React, { createContext, useState, useEffect } from 'react';
import { loginClient, getClientProfile } from '../Api/userApi';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const fetchClient = async () => {
            const token = localStorage.getItem('tokenAuth');
            if (token) {
                try {
                    const profile = await getClientProfile();
                    setUser(profile);
                    setIsAuthenticated(true);
                } catch (error) {
                    console.error('Failed to fetch user data: ', error);
                    setIsAuthenticated(false);
                }
            }
        };
        fetchClient();
    }, []);

    const login = async (body) => {
        try {
            const response = await loginClient(body);
            const { tokenAuth, user } = response.data;
            localStorage.setItem('tokenAuth', tokenAuth);
            setUser(user);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Failed to log in: ', error);
        }
    };

    const logout = () => {
        localStorage.removeItem('tokenAuth');
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <UserContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };

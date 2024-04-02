import React, { createContext, useState, useEffect } from "react";
import { getUser, getUsers, deleteUser } from "../api/user";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUser = async (_id) => {
        try {
            const response = await getUser(_id);
            setUser(response.data);
        } catch (error) {
            setError(error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await getUsers();
            setUsers(response.data.users); 
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []); // Solo se ejecutará al montar el componente

    const handleDeleteUser = async (_id) => {
        try {
            await deleteUser(_id);
            // Actualizar la lista de usuarios después de eliminar uno
            await fetchUsers();
        } catch (error) {
            console.error(error);
            // Manejar el error estableciendo el estado de error
            setError(error);
        }
    };

    const value = {
        users,
        loading,
        error,
        user,
        fetchUser,
        handleDeleteUser,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

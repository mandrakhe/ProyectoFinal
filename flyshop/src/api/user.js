import axios from './axios';

export const getUser = (id) => axios.get(`/user/${id}`);

export const getUsers = () => axios.get(`/users`);

export const editUser = (id, userData) => axios.put(`/editUser/${id}`, userData);

export const deleteUser = (id) => axios.delete(`/deleteUser/${id}`);
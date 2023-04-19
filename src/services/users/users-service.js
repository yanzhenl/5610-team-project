import axios from "axios";
const USERS_API_URL = "http://localhost:8000/api/users";

export const findAllUsers = async () => {
    const response = await axios.get(USERS_API_URL);
    return response.data;
};

export const findUserById = async (id) => {
    // return axios.get(`${USERS_API_URL}/${id}`).then((response) => response.data);
    const response = await axios.get(`${USERS_API_URL}/${id}`);
    return response.data;
};

export const createUser = (user) => {
    return axios.post(USERS_API_URL, user);
};

export const updateUser = async (newUser) => {
    const response = await axios.put(`${USERS_API_URL}/${newUser._id}`, newUser);
    return response.data;
};

export const deleteUser = (id) => {
    return axios.delete(`${USERS_API_URL}/${id}`);
};

export const login = (user) => {
    return axios.post(`${USERS_API_URL}/login`, user);
};

export const logout = () => {
    return axios.post(`${USERS_API_URL}/logout`);
};

export const register = (user) => {
    return axios.post(`${USERS_API_URL}/register`, user);
};

export const profile = async () => {
    return await axios.get(`${USERS_API_URL}/profile`);
    // console.log(response.data);
    // return response.data;
};

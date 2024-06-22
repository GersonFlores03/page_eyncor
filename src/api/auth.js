import axios from "../api/axios";

export const registerUser = (user) => axios.post(`api/v1/register` ,user)
export const loginUser = (user) => axios.post(`/api/v1/login` ,user)
export const verifyTokenRequest = async () => axios.get(`api/v1/verify `);
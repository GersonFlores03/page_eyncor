import axios from "../api/axios";

export const createCorreoRequest = (data) => axios.post(`api/v1/correo` , data)
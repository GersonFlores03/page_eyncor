import axios from "../api/axios";

export const DetalleOrdenRequest = () => axios.get(`api/v1/order`)
export const createOrdenRequest = (orden) => axios.post(`api/v1/order` ,orden)
export const createProductRequest = (producto) => axios.post(`api/v1/producto` ,producto)

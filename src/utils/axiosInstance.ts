import axios, {AxiosInstance} from 'axios';


export const axiosInstance:AxiosInstance = axios.create({
    baseURL:process.env.SERVER,
    withCredentials: true,
})
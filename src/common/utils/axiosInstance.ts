import axios, {AxiosInstance} from 'axios';


export const axiosInstance:AxiosInstance = axios.create({
    baseURL:process.env.NEXT_PUBLIC_SERVER_BASE_URL,
    withCredentials: true,
})
import { axiosInstance } from "@utils/axiosInstance";
import { AxiosResponse } from "axios";
import useSWR from 'swr'

export const useFetch = <T=any>(fetchURL:string) => { 
    const fetchData = async (url: string) => await axiosInstance.get(url).then((res:AxiosResponse<T>) => res.data);

    const { data, error, isLoading, mutate } = useSWR<T>(fetchURL, fetchData);
    return {data, isLoading, error, mutate}
}
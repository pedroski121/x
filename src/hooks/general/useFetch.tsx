import { axiosInstance } from "@utils/axiosInstance";
import useSWR from 'swr'

export const useFetch = (fetchURL:string) => { 
    const fetchData = async (url: string) => await axiosInstance.get(url).then((res) => res.data);

    const { data, error, isLoading } = useSWR(fetchURL, fetchData);
  
    return {data, error, isLoading}
}
import { axiosInstance } from "@utils/axiosInstance";
import useSWR from 'swr'

export const useFetch = (fetchURL:string) => { 
    const fetchCategories = async (url: string) => await axiosInstance.get(url).then((res) => res.data);

    const { data, error, isLoading } = useSWR(fetchURL, fetchCategories);
  
    return {data, error, isLoading}
}
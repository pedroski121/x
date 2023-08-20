import { AxiosResponse } from "axios";
import { axiosInstance } from "@utils/axiosInstance";
import { TResponse } from "@lib/types/response";
import useSWR from 'swr'

export const useFetchMultipleParams = <T=any>(baseURL:string,dataRouteParamArray:string[]) =>{
  const fetchProducts = async (url: string, routeParam: string) => await axiosInstance.get(`${url}/${routeParam}`)
      .then((fetchedObject: AxiosResponse) => {
          return {...fetchedObject.data}
      });
  
  const { isLoading, data, error} = useSWR<T[], TResponse[]>(dataRouteParamArray, (dataRouteParamArray) => Promise.all(dataRouteParamArray.map((routeParam:string) => fetchProducts(baseURL, routeParam))))
  return {data, isLoading, error}
  
}
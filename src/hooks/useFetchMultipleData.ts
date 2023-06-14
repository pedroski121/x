import { AxiosResponse } from "axios";
import { axiosInstance } from "@utils/axiosInstance";
import { ICategory } from "@lib/types/category";
import useSWR from 'swr'

export const useFetchMultipleData = (baseURL:string,dataRouteParamArray:string[]) =>{

  const fetchProducts = async (url: string, routeParam: string) => await axiosInstance.get(`${url}/${routeParam}`)
      .then((fetchedObject: AxiosResponse<ICategory[]>) => {
          return { data: fetchedObject.data}
      });
  
  const { isLoading, data } = useSWR(dataRouteParamArray, (dataRouteParamArray) => Promise.all(dataRouteParamArray.map((routeParam) => fetchProducts(baseURL, routeParam))))
  
  return {data, isLoading}
  
}
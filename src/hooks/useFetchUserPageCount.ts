import { AxiosResponse } from "axios";
import { axiosInstance } from "@utils/axiosInstance";
import { TUserCount } from "@lib/types/admin";
import useSWR from 'swr'

const useFetchUserPageCount = (limit:number) =>{

     const count = async (url: string) => await axiosInstance.get(url)
     .then((userNumbers: AxiosResponse<{ userCount: number }>): TUserCount => 
    {
         const { userCount } = userNumbers.data
         const pages = Math.ceil(userCount / limit)
         
         return {pages, userCount}
     })
     const {data} = useSWR('/api/user/count', count)

     return {data}
}

export {useFetchUserPageCount}
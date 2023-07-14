import { ICategory } from "@lib/types/category"
import useSWR from 'swr'
import { axiosInstance } from "@utils/axiosInstance"
import { AxiosResponse } from "axios"
export const CategorySelect = () =>{
    const fetchCategories = async (url:string) => await axiosInstance.get(url).then((response:AxiosResponse):ICategory[]=>response.data)
    const {data} = useSWR('api/category/all', fetchCategories)

    return <>
                    {
                        // Get all the available categories
                        data?.map((category)=>{
                            return <option key={category._id} value={category.name}>
                                {category.name} 
                            </option>
                        })
                    }
    </>
}
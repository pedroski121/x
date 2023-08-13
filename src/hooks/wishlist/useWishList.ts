import { useFetch } from "@hooks/general/useFetch"
import { useFetchMultipleParams } from "@hooks/general/useFetchMultipleParams"
import { IProductsData } from "@lib/types/product"
import { axiosInstance } from "@utils/axiosInstance"
import { useState} from "react"
import { TWishList } from "@lib/types/account/wishlist"
import { AxiosError } from "axios"
import {useRouter} from 'next/router'
export const useWishList = (userID:string) =>{
const router = useRouter()
const [deleting, setDeleting] = useState<boolean | undefined>(false)
const {data, isLoading, mutate} = useFetch<TWishList[]>(`/api/wishlist/${userID}`)

const generateProductURLs  = (data:TWishList[]):string[] => {
    const params = data.map((d:TWishList)=>{
        return d.productID
    })  
    return params
}
const {isLoading:loading, data:productData} =  useFetchMultipleParams<IProductsData>('/api/product', generateProductURLs(data || []))

const deleteWishList = async (productID:string) =>{
    setDeleting(true)
    const data = {productID}
    await axiosInstance.delete('/api/wishlist/delete',{withCredentials:true, data})
    .then(()=>{
        mutate()
        setDeleting(false)
    }).catch(()=>{
        setDeleting(undefined)
    })
}
const addToWishList = async (productID:string, userID:string) =>{
    await axiosInstance.post('/api/wishlist/add',{productID, userID}, {withCredentials:true})
    .then(()=>{
        mutate()
    }).catch((err:AxiosError)=>{
        console.log(err.response?.data)
    })
}
const changeWish = (productID:string, wishListData:TWishList[]) => {
    if(!userID){
        router.push('/account/sign-in')
    }
    else if(wishListData.map(wish => wish.productID).includes(productID)){
      deleteWishList(productID)
      
    } else {
      addToWishList(productID,userID)
    }
  }
return  {deleteWishList, loading, productData, isLoading, deleting, data, addToWishList, changeWish}
}


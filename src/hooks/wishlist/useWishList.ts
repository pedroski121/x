import { useFetch } from "@hooks/general/useFetch"
import { useFetchMultipleParams } from "@hooks/general/useFetchMultipleParams"
import { IProductsData } from "@lib/types/product"
import { axiosInstance } from "@utils/axiosInstance"
import { useState} from "react"
import { TWishList } from "@lib/types/account/wishlist"
import { AxiosError } from "axios"
import { useAuth } from "@clerk/nextjs"
import { useFetchSWR } from "@hooks/general/useFetchSWR"
export const useWishList = (userID:string) =>{
    const [changingWish, setChangingWish] = useState<string>('')

const {getToken} = useAuth()


const {data, isLoading, mutate, error} = useFetchSWR<TWishList[]>(`/api/wishlist`)
const generateProductURLs  = (data:TWishList[]):string[] => {
    const params = data.map((d:TWishList)=>{
        return d.productID
    })  
    return params
}
const {isLoading:loading, data:productData} =  useFetchMultipleParams<IProductsData>('/api/product', generateProductURLs(data || []))

const deleteWishList = async (productID:string) =>{
    setChangingWish(productID)
    const data = {productID}
    await axiosInstance.delete('/api/wishlist/delete',{headers:{Authorization:`Bearer ${await getToken()}`},withCredentials:true, data})
    .then(()=>{
        mutate().then(()=>{
            setChangingWish('')
        })
    }).catch(()=>{
        setChangingWish('')
    })
}
const addToWishList = async (productID:string, userID:string) =>{
    setChangingWish(productID)
    await axiosInstance.post('/api/wishlist/add',{productID, userID}, {headers:{Authorization:`Bearer ${await getToken()}`}, withCredentials:true})
    .then(()=>{
        mutate().then(()=>{
            setChangingWish('')
        })
    }).catch((err:AxiosError)=>{
        setChangingWish('')
    })
}
const changeWish = (productID:string, wishListData:TWishList[]) => {
   
    if(wishListData.map(wish => wish.productID).includes(productID)){
      deleteWishList(productID)
      
    } else {
      addToWishList(productID,userID)
    }
  }
return  {deleteWishList, loading, productData, isLoading, changingWish, data, addToWishList, changeWish, error}
}


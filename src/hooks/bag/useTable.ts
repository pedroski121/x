import { useState, useEffect} from "react"
import { IProductsData } from "@lib/types/product"
import { AxiosError } from "axios"
import { axiosInstance } from "@utils/axiosInstance"
import { TBag } from "@lib/types/bag"
import { TUseTable } from "@lib/types/bag"




export const useTable = (mutate:any, bagItems:TBag[], products:IProductsData[]):TUseTable =>{
    const [deleting, setDeleting] = useState<string>('')
    const [productSum, setProductSum] = useState<number>(0)

    async function removeItem(product: IProductsData) {
        setDeleting(product._id)

        const itemID = getItem(product)
        await axiosInstance.delete('/api/bag/delete', { withCredentials: true, data: { _id: itemID } })
            .then(() => {
                mutate()
            })
            .catch((err: AxiosError) => console.log(err.response?.data))
        setDeleting('')
    }

    const getItem = (product: IProductsData): TBag => {
        const item = bagItems.filter((item) => {
            return product._id === item.productID
        })

        return item[0]
    }

    useEffect(() => {
        setProductSum(products.reduce((acc, obj) => {
            return acc + obj.price
        }, 0))
    }, [products])

    return {deleting, getItem, removeItem, productSum}
}
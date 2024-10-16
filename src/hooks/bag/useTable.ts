import { useState, useEffect} from "react"
import { IProductsData } from "@lib/types/product"
import { AxiosError } from "axios"
import { axiosInstance } from "@utils/axiosInstance"
import { TBag } from "@lib/types/bag"
import { TUseTable } from "@lib/types/bag"
import { useAuth } from "@clerk/nextjs"
import { useMemo } from "react"


export const useTable = (mutate:any, bagItems:TBag[], products:IProductsData[]):TUseTable =>{
    const [deleting, setDeleting] = useState<string>('')
    const [productSum, setProductSum] = useState<number>(0)
    const {getToken} = useAuth()

    async function removeItem(product: IProductsData) {
        setDeleting(product._id)

        const itemID = getItem(product)
        const token = await getToken()
        await axiosInstance.delete('/api/bag/delete', { headers:{Authorization: `Bearer ${token}`},withCredentials: true, data: { _id: itemID } })
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
    const itemQuantityPrice = useMemo(() =>
        products.map(product => ({
            itemID: product._id,
            quantity: getItem(product)?.quantity ?? 0,
            totalPrice: (getItem(product)?.quantity ?? 0) * product.price
        })),
        [products, getItem]
    );
    useEffect(() => {
        setProductSum(itemQuantityPrice.reduce((sum, item)=> item.totalPrice + sum, 0))
    }, [products])




    return {deleting, getItem, removeItem, productSum}
}
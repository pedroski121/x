import { IModalDetails, TBag } from "@lib/types/bag"
import { FC, useState } from "react"
import { axiosInstance } from "@utils/axiosInstance"
import { mutate } from "swr"
import { AxiosResponse } from "axios"


export const useBagModal = ({ itemInBag, addItemToBag, product }:IModalDetails) => {

    const [size, setSize] = useState<string>(product && product.sizes && product.sizes[0] || '')
    const [amountOfItemsToBeBought, setAmountOfItemsToBeBought] = useState<number>(1)

    const addToBag = async (): Promise<void> => {
        addItemToBag && addItemToBag(product._id)
        const newItemInBag = await axiosInstance.post('/api/bag/add', { productID: product._id, size, quantity: amountOfItemsToBeBought },
            { withCredentials: true })
            .then((response: AxiosResponse<TBag>) => {
                return response.data
            })
            .catch((err) => console.log(err))
        if (newItemInBag) {
            addItemToBag && await mutate('/api/bag/all').then(() => addItemToBag(''))
        }

    }
    const changeAmountOfItemsToBeBought = (action: string): void => {
        switch (action) {
            case 'minus':
                setAmountOfItemsToBeBought(prevValue => {
                    // ensure the user does not select a negative number
                    if (prevValue > 1) {
                        return prevValue - 1
                    }
                    return prevValue
                })
                break
            case 'plus':
                setAmountOfItemsToBeBought(prevValue => {
                    // ensure the user does not select more than the availble quantity
                    if (prevValue < product.quantity) {
                        return prevValue + 1
                    }
                    return prevValue
                })
                break
            default:

        }

    }

    const removeFromBag = async (): Promise<void> => {
        addItemToBag && addItemToBag(product._id)
        itemInBag && await axiosInstance.delete('/api/bag/delete', {
            withCredentials: true,
            data: { _id: itemInBag[0]._id }
        })
        addItemToBag && await mutate('/api/bag/all').then(() => addItemToBag(''))
    }
    return {changeAmountOfItemsToBeBought, amountOfItemsToBeBought, removeFromBag, addToBag, setSize, size}
}
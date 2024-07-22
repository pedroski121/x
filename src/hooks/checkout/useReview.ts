import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { useBag } from "@hooks/bag/useBag"
import { useCurrentUser } from "@hooks/account/auth/useCurrentUser"
import { useFetch } from "@hooks/general/useFetch"
import { bagDefault } from "@lib/types/bag"
import { useTable } from "@hooks/bag/useTable"
import { ProductDefaultValues } from "@lib/types/product"
import { IPickUpStation } from "@lib/types/checkout"
import { axiosInstance } from "@utils/axiosInstance"
import { AxiosResponse } from "axios"
import { IOrderProductDetails } from "@lib/types/checkout"
const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }; 
const useReview = () =>{
    const router = useRouter()
    const [pickUpStationId, setPickUpStationId] = useState<string>('')
    let { productsInBag, bagItems, mutate } = useBag()
    const [missingDetails, setMissingDetails] = useState<boolean>(false)
    const [orderPlaced, setOrderPlaced] = useState<boolean>(false)
    const currentUser = useCurrentUser()

    const { data: pickUpStation, isLoading, error } = useFetch<IPickUpStation>(`/api/pick-up-station/${pickUpStationId}`)
    if (bagItems === undefined) {
        bagItems = [bagDefault]
    }
    if (productsInBag === undefined) {
        productsInBag = [ProductDefaultValues]
    }
    const { productSum, getItem } = useTable(mutate, bagItems, productsInBag)

    useEffect(() => {
        const pickUpId = window.sessionStorage.getItem('pick_up_station_id')
        pickUpId !== null && setPickUpStationId(pickUpId)
    }, [])

    const checkImportantDetails = (): boolean => {
        if (currentUser?.phoneNumber && currentUser?.email) {
            setMissingDetails(false)
            return false
        }
        else {
            setMissingDetails(true)
            return true
        }
    }
    const onPaymentSuccess = async (reference: any) => {
        const referenceID = reference.reference
        setOrderPlaced(true)
        scrollToTop()
        const date = new Date()

        const dateLocaleString = date.toLocaleDateString()
        const productDetails: IOrderProductDetails[] = [];
        bagItems?.map((item) => {
            productsInBag?.map((product) => {
                if (product._id === item.productID) {
                    productDetails.push({ productID: item.productID, quantity: item.quantity, pendingDate:dateLocaleString.toString(), size: item.size, amountPaid: product.price, currentStatus:"pending" })
                }
            })
        })
    
        await axiosInstance.post('/api/order/add', {
            userID: currentUser?._id,
            pickUpStationID: pickUpStation?._id,
            orderInitiationTime: date.getTime().toString(),
            productDetails: productDetails,
            totalAmountPaid: productSum,
            createdAt:dateLocaleString,
            referenceID
        })
        .then(async (res: AxiosResponse<{ message: string; success: boolean }>) => {
            if (res.data.success === true) {
                await axiosInstance.delete('/api/bag/empty-bag')
                .then(() => router.push('/account/orders')
                .then(() => {
                    setOrderPlaced(false)
                    router.reload()
                }))
            }
        })
        .catch((err) => {
            console.log(console.log(err))
        })

    }
    const onPaymentClose = (reference: any) => {
        console.log(reference)
    }
    return {checkImportantDetails,productSum, getItem, pickUpStation, isLoading, error,  missingDetails,currentUser,productsInBag, router, bagItems, onPaymentSuccess, onPaymentClose, orderPlaced}
}

export {useReview}
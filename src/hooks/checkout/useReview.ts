import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { useBag } from "@hooks/bag/useBag"
import { useCurrentUser } from "@hooks/account/auth/useCurrentUser"
import { useFetch } from "@hooks/general/useFetch"
import { bagDefault } from "@lib/types/bag"
import { useTable } from "@hooks/bag/useTable"
import { ProductDefaultValues } from "@lib/types/product"
import { IPickUpStation } from "@lib/types/checkout"
const useReview = () =>{
    const router = useRouter()
    const [pickUpStationId, setPickUpStationId] = useState<string>('')
    let { productsInBag, bagItems, mutate } = useBag()
    const [missingDetails, setMissingDetails] = useState<boolean>(false)

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
    return {checkImportantDetails,productSum, getItem, pickUpStation, isLoading, error, missingDetails,currentUser,productsInBag, router, bagItems}
}

export {useReview}
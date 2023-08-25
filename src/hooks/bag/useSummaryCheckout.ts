import { useState } from "react"
import { axiosInstance } from "@utils/axiosInstance"
export const useSummaryCheckout = (mutate:any) =>{
    const [loading, setLoading] = useState<boolean>(false)
    const emptyBag = async () => {
        setLoading(true)
        await axiosInstance.delete('/api/bag/empty-bag', { withCredentials: true })
            .then(() => {
                mutate().then(() => {
                    setLoading(false)
                })

            })
            .catch(() => {
                setLoading(false)
            })

    }
    return {loading, emptyBag}
}
import { useState } from "react"
import { axiosInstance } from "@utils/axiosInstance"
import { useAuth } from "@clerk/nextjs"
export const useSummaryCheckout = (mutate:any) =>{
    
    const [loading, setLoading] = useState<boolean>(false)
    const {getToken} = useAuth()
    const emptyBag = async () => {
        setLoading(true)
        const token = await getToken()
        await axiosInstance.delete('/api/bag/empty-bag', {headers:{Authorization:`Bearer ${token}`}, withCredentials: true })
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
import { NavBar } from "@general-components/navbar"
import { useEffect } from "react"


const Cart = () => {
    useEffect(() => {
        const cart = localStorage.getItem('cart')
    }, [])

    return (
        <>
            <NavBar />

        </>
    )
}

export default Cart
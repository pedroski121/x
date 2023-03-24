import { NavBar } from "@components/navbar"
import { NextPage } from "next"
import { ProductDetails } from "@components/product-details"
const Product: NextPage = () => {
    return (
        <>
            <NavBar />
            <ProductDetails />
        </>
    )
}

export default Product
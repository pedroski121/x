import { NavBar } from "@general-components/navbar"
import { NextPage } from "next"
import { ProductDetails } from "@components/product-details"
import { ProductProvider } from "@contexts/ProductContext"

const Product: NextPage = () => {

    return (
        <>
            <NavBar />
            <ProductProvider>
                <ProductDetails />
            </ProductProvider>

        </>
    )
}

export default Product
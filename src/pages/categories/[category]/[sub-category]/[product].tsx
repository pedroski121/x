import { NavBar } from "@general-components/navbar"
import { NextPage } from "next"
import { ProductDetails } from "@components/product-details"
import { ProductProvider } from "src/contexts/ProductContext"

const Product: NextPage = () => {

    return (
        <>
            <ProductProvider>
                <ProductDetails />
            </ProductProvider>

        </>
    )
}

export default Product
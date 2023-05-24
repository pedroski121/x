import { NavBar } from "@components/navbar"
import { NextPage } from "next"
import useSWR from 'swr'
import { AxiosResponse } from "axios"
import { GrowingSpinner } from "@components/spinner"
import { IProductsData } from "@lib/types/products-data-type"
import { ProductDetails } from "@components/product-details"
import { useDynamicPath } from "@hooks/useDynamicPath"
import { axiosInstance } from "@utils/axiosInstance"

const Product: NextPage = () => {
    // get the paths to this current page 
    const activePaths = useDynamicPath();

    // get the product ID for the current page
    const productIdAndName = activePaths[activePaths.length - 1].split('-');
    const productId = productIdAndName[productIdAndName.length - 1];


    const fetchProductDetails = async (url: string) => await axiosInstance.get(url).then((productDetails: AxiosResponse<IProductsData>) => productDetails.data);
    const { data, error, isLoading } = useSWR(`/api/product/${productId}`, fetchProductDetails);
    if (isLoading) return <GrowingSpinner />
    if (error || !data) {
        return <p>An Error has occcured</p>
    }
    return (
        <>
            <NavBar />
            <ProductDetails {...data} activePaths={activePaths} />
        </>
    )
}

export default Product
import { ReactNode, createContext } from 'react'
import useSWR from 'swr'
import { AxiosResponse } from "axios"
import { useDynamicPath } from "@hooks/useDynamicPath"
import { axiosInstance } from "@utils/axiosInstance"
import { GrowingSpinner } from "@general-components/spinner"
import Custom404 from "src/pages/404"
import { IProductContext, ProductDefaultValues, IProductsData } from '@lib/types/product'




export const ProductContext = createContext<IProductContext>({
    data: ProductDefaultValues
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    // get the paths to this current page 
    const activePaths = useDynamicPath();

    // get the product ID for the current page
    const productIdAndName = activePaths[activePaths.length - 1].split('-');
    const productId = productIdAndName[productIdAndName.length - 1];


    const fetchProductDetails = async (url: string) => await axiosInstance.get(url).then((productDetails: AxiosResponse<IProductsData>) => productDetails.data);
    const { data, error, isLoading } = useSWR(`/api/product/${productId}`, fetchProductDetails);
    if (isLoading) return <GrowingSpinner />
    if (error || !data) {
        return <Custom404 />
    }
    data["activePaths"] = activePaths
    return (
        <ProductContext.Provider value={{ data }}>
            {children}
        </ProductContext.Provider>
    )
}
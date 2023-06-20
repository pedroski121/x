import { ReactNode, createContext, FC, useState } from 'react'
import useSWR from 'swr'
import { AxiosResponse } from "axios";
import { axiosInstance } from "@utils/axiosInstance";
import { ProductDefaultValues, IProductsData } from '@lib/types/product'
import { GrowingSpinner } from '@components/general/spinners';
import Custom404 from 'src/pages/404';

interface IProductsBasedOnCategoryContext {
    data: IProductsData[],
    category?: string
}

export const ProductsBasedOnCategoryContext = createContext<IProductsBasedOnCategoryContext>({ data: [ProductDefaultValues] })

type TProductsBasedOnCategory = {
    children: ReactNode
}

export const ProductsBasedOnCategoryProvider: FC<TProductsBasedOnCategory> = ({ children }: { children: ReactNode }) => {
    const [category, setCategory] = useState<string>('')

    const fetchProducts = async (url: string) => await axiosInstance.get(url, { params: { category } }).then((product: AxiosResponse<IProductsData[]>) => product.data);
    const { data, error, isLoading } = useSWR(`/api/product`, fetchProducts);
    if (isLoading) return <GrowingSpinner />
    if (error || !data) return <Custom404 />;

    // filter to get the data for the active page category your on
    // const currentPageProductData = data?.filter((receivedPageData) => receivedPageData.category == activePaths[0] && receivedPageData.subCategory == activePaths[1]);
    return <>
        <ProductsBasedOnCategoryContext.Provider value={{ data }} >
            {children}
        </ProductsBasedOnCategoryContext.Provider>
    </>
}

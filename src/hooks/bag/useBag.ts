import { useState} from "react"
import { useFetchMultipleParams } from "@hooks/general/useFetchMultipleParams"
import { useEffect } from "react"
import { IProductsData } from "@lib/types/product"
import { TBag , TUseBag} from "@lib/types/bag"
import { useFetchSWR } from "@hooks/general/useFetchSWR"



export const useBag = ():TUseBag =>{
  const [ids, setIDs] = useState<string[]>([])
    const { data: bagItems, isLoading: fetchingBagItems, mutate } = useFetchSWR<TBag[]>('/api/bag/all')
    const getProductIDs = (bagItems: TBag[]): string[] => {
        const productIDs: string[] = []
        if (bagItems && bagItems.length !== 0) {
            bagItems.map((item) => {
                if (!productIDs.includes(item.productID)) {
                    productIDs.push(item.productID)
                }
            })
        }
        return productIDs
    }


    const { data: productsInBag, isLoading: fetchingProducts } = useFetchMultipleParams<IProductsData>('/api/product', ids)

    useEffect(() => {
        bagItems && setIDs(getProductIDs(bagItems))
        
    }, [bagItems])

    return  {productsInBag, fetchingProducts, mutate, fetchingBagItems, bagItems}
}
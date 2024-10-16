import { IProductsData } from "@lib/types/product"

export type TBag = {
    userID: string,
    productID: string,
    quantity: number,
    size: string,
    _id: string,
}

export type TTable = {
    bagItems: TBag[],
    products: IProductsData[],
    mutate: any,
    fetchingProducts: boolean,
    fetchingBagItems: boolean


}

export type TUseTable = {
    deleting:string,
     getItem:(product:IProductsData)=>TBag, 
    removeItem:(product:IProductsData)=>void,
     productSum:number,
    // //  itemQuantityPrice:{
    // //     itemID: string,
    // //     quantity: number,
    // //     totalPrice: number
    // // }[]
    // totalProductPrice:number

}

export type TUseBag = {
    productsInBag:IProductsData[] | undefined,
     fetchingProducts:boolean,
     mutate:any,
     fetchingBagItems:boolean,
     bagItems:TBag[]|undefined

}
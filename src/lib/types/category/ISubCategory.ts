import { TWishList } from "@lib/types/account/wishlist";
import { IProductsData } from "@lib/types/product";

export interface ISubCategory {
    _id: string; 
    name: string; 
    imgURL: string;
    altText?:string;
    categoryName?:string;
    altImgText?:string;
}

export type TSubCategoryCard = {
    productsData:IProductsData, 
    wishListData: TWishList[], 
    activePaths:string[], 
    changeWish: (productID:string, wishListData:TWishList[]) => void
  }
import { TWishList } from "@lib/types/account/wishlist";
import { IProductsData } from "@lib/types/product";
import { TBag } from "../bag";
import { IUser } from "../current-user";

export interface ISubCategory {
    _id: string; 
    name: string; 
    imgURL: string;
    altText?:string;
    categoryName?:string;
    altImgText?:string;
}
export type TSubCategoriesForCategory = {
    categoryName:string,
    subCategories:ISubCategory[]
}

export type TSubCategoryCard = {
    productsData:IProductsData, 
    wishListData: TWishList[], 
    bagItems:TBag[] | undefined,
    activePaths:string[], 
    changingWish:string,
    changeWish: (productID:string, wishListData:TWishList[]) => void
    currentUser?:IUser | undefined
  }
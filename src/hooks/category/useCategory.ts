import { useDynamicPath } from "@hooks/general/useDynamicPath";
import { useRef, useContext } from "react";
import { CurrentUserContext } from "@contexts/CurrentUserContext";
import { useWishList } from "@hooks/wishlist/useWishList";
import { useFetch } from "@hooks/general/useFetch";
import { TSubCategoriesForCategory } from "@lib/types/category";


export const useCategory = () => {
 // Get  the exact page your on
 const { pages } = useDynamicPath();
 const subCategories = useRef<string[]>([])
 const { userState } = useContext(CurrentUserContext)
 const { data: wishListData, changeWish, changingWish , error:wishListError} = useWishList(userState._id)

 if(wishListError){
  console.log(wishListError.response.data)
 }


 const currentPageName = pages[pages.length - 1];
 const { data: subCategoriesData, error: subCategoriesError, isLoading: subCategoriesLoading } = useFetch<TSubCategoriesForCategory>(`/api/sub-category/${currentPageName}`)

 if (subCategoriesData) {
   subCategoriesData.subCategories.map((subCategory) => {
     if (!subCategories.current.includes(subCategory.name) && subCategory) {
       subCategories.current.push(subCategory.name)
     }
   })
 }
 return {subCategoriesLoading,subCategories,  currentPageName, changeWish, changingWish, subCategoriesError, pages, wishListData}
}
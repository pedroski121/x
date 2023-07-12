import { FC } from "react"
import { ICategory } from "@lib/types/category"

type ISubCategorySelect = {
    data: ICategory[],
    categoryName:string
} 

export const SubCategorySelect:FC<ISubCategorySelect> = ({data,categoryName}) =>{
    return <>
{
                // sort through the chosen category based on state to get all the available the subcategory
                data?.map((categories)=>{
                    if(categories.name === categoryName) {
                        return categories.subCategories.map((subCategory)=>{
                            return <option key={subCategory._id} value={subCategory.name}>{subCategory.name}</option>
                        })
                    }
                })
              } 
    </>
}
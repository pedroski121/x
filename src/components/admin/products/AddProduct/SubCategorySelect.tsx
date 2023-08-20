import { FC } from "react"
import { TSubCategoriesForCategory } from "@lib/types/category"
import { useFetch } from "@hooks/general/useFetch"


export const SubCategorySelect: FC<{ categoryName: string }> = ({ categoryName }) => {
    const { data } = useFetch<TSubCategoriesForCategory>(`/api/sub-category/${categoryName}`)
    return <>
        {
            // sort through the chosen category based on state to get all the available the subcategory
            data?.subCategories.map((subCategory) => {
                return <option key={subCategory._id} value={subCategory.name}>
                    {subCategory.name}
                </option>
            })

        }
    </>
}


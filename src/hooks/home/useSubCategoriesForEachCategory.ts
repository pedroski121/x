import { useRef } from "react"
import { useFetch } from "@hooks/general/useFetch"
import { useFetchMultipleParams } from "@hooks/general/useFetchMultipleParams"
import { TSubCategoriesForCategory, ICategory } from "@lib/types/category"

export const useSubCategoryForEachCategory = () => {
    const categories = useRef<string[]>([])
    const { data: categoriesData, error: categoriesError, isLoading: categoriesLoading } = useFetch<ICategory[]>('/api/category/all')
    if (categoriesData) {
        categoriesData.map((category) => {
            if (!categories.current.includes(category.name)) {
                categories.current.push(category.name)
            }
        })
    }
    const { data, isLoading, error } = useFetchMultipleParams<TSubCategoriesForCategory>('/api/sub-category', categories.current)

    return {isLoading, data,error, categoriesError, categoriesLoading}

}
import HomeCss from '../Home.module.css'
import { ISubCategory } from "@lib/types/category";
import { CategoryCard } from "@components/category";
import { useFetchMultipleParams } from "@hooks/general/useFetchMultipleParams";
import { BorderSpinner } from "@components/general/spinners";
import { BodySectionHeader } from "./BodySectionHeader";
import { FC, useRef } from "react";
import { useFetch } from '@hooks/general/useFetch';

type TCategory = {
    _id: string,
    name: string,
    imgURL: string,
}

type TFetchMultipleSubCategories = {
    categoryName: string,
    subCategories: ISubCategory[]
}

export const ProductsForEachCategory: FC = () => {
    const categories = useRef<string[]>([])

    const { data: categoriesData, error: categoriesError, isLoading: categoriesLoading } = useFetch<TCategory[]>('/api/category/all')
    if (categoriesData) {
        categoriesData.map((category) => {
            if (!categories.current.includes(category.name)) {
                categories.current.push(category.name)
            }
        })
    }
    const { data, isLoading, error } = useFetchMultipleParams<TFetchMultipleSubCategories>('/api/sub-category', categories.current)

    if (isLoading || categoriesLoading) return <div className='mt-5'><BorderSpinner size={false} /></div>
    if (categoriesError || error) return <p>An error occured loading the data</p>
    return <>
        {
            data?.map((categories, key) => {
                if (categories.subCategories.length !== 0) {
                    return <div key={key} className={`row px-2 mt-3 gx-3 gx-md-4 gy-2 m-2`}>
                        <BodySectionHeader text={categories.categoryName} navigateTo={`/categories/${categories.categoryName}`} />
                        <div className={`overflow-auto ${HomeCss.category_row} d-flex flex-row`}>
                            {
                                categories.subCategories.map((subCategory, key) => {
                                    if (key > 10) {
                                        return <></>
                                    }
                                    return <CategoryCard {...subCategory} key={subCategory._id} />
                                })
                            }
                        </div>
                    </div>
                }

            })
        }

    </>
}
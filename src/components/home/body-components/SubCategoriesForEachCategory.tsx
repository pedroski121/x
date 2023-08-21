import HomeCss from '../Home.module.css'
import { CategoryCard } from "@components/category";
import { BorderSpinner } from "@components/general/spinners";
import { BodySectionHeader } from "./BodySectionHeader";
import { FC } from "react";
import { useSubCategoryForEachCategory } from '@hooks/home/useSubCategoriesForEachCategory';

export const SubCategoriesForEachCategory: FC = () => {
    const { isLoading, categoriesLoading, error, categoriesError, data } = useSubCategoryForEachCategory()
    if (isLoading || categoriesLoading) return <div className='mt-5'><BorderSpinner size={false} /></div>
    if (categoriesError || error) return <p className='text-center mt-3'>Error fetching categories and sub-categories</p>

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
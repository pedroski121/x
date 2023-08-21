import HomeCss from '../Home.module.css'
import { CategoryCard } from "@components/category";
import { BorderSpinner } from "@components/general/spinners";
import { BodySectionHeader } from "./BodySectionHeader";
import { FC } from "react";
import { useSubCategoryForEachCategory } from '@hooks/home/useSubCategoriesForEachCategory';
import { v4 as uuidv4 } from 'uuid'
export const SubCategoriesForEachCategory: FC = () => {
    const { isLoading, categoriesLoading, error, categoriesError, data } = useSubCategoryForEachCategory()
    if (isLoading || categoriesLoading) return <div className='mt-5'><BorderSpinner size={false} /></div>
    if (categoriesError || error) return <p className='text-center mt-3'>Error fetching categories and sub-categories</p>

    return <>
        {
            data?.map((categories) => {
                if (categories.subCategories.length !== 0) {

                    const categoryKey = uuidv4() + categories.categoryName

                    return <div key={categoryKey} className={`row mt-3 mx-3`}>
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
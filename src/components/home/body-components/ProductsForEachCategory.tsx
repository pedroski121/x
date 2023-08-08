import HomeCss from '../Home.module.css'
import { ISubCategory } from "@lib/types/category";
import { CategoryCard } from "@components/category";
import { useFetchMultipleData } from "@hooks/general/useFetchMultipleData";
import { BorderSpinner } from "@components/general/spinners";
import { BodySectionHeader } from "./BodySectionHeader";
import { FC } from "react";


export const ProductsForEachCategory: FC = () => {
    const categories = ['men', 'women']

    const { data, isLoading } = useFetchMultipleData('/api/category', categories)
    if (isLoading) return <BorderSpinner />
    return <>
        {data?.map((dataItem) => {
            return dataItem.data.map((categoryItem) => {

                return <div key={categoryItem._id} className={`row px-2 mt-3 gx-3 gx-md-4 gy-2 m-2`}>
                    <BodySectionHeader text={categoryItem.name} />
                    <div className={`overflow-auto ${HomeCss.category_row} d-flex flex-row`}>
                        {categoryItem.subCategories.map((subCategoryItem: ISubCategory, key: number) => {
                            if (key >= 5) {
                                return <></>
                            }
                            subCategoryItem['categoryName'] = categoryItem.name
                            return <CategoryCard {...subCategoryItem} key={subCategoryItem._id} />
                        })}</div>
                </div>
            })

        })}
    </>
}
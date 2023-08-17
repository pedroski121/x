import HomeCss from '../Home.module.css'
import { ISubCategory } from "@lib/types/category";
import { CategoryCard } from "@components/category";
import { useFetchMultipleParams } from "@hooks/general/useFetchMultipleParams";
import { BorderSpinner } from "@components/general/spinners";
import { BodySectionHeader } from "./BodySectionHeader";
import { FC } from "react";


export const ProductsForEachCategory: FC = () => {
    const categories = ['men', 'women']

    const { data, isLoading } = useFetchMultipleParams('/api/category', categories)
    if (isLoading) return <div className='mt-5'><BorderSpinner size={false} /></div>
    return <>
        {data?.map((categoryItem: any) => {


            return <div key={categoryItem['0']._id} className={`row px-2 mt-3 gx-3 gx-md-4 gy-2 m-2`}>
                <BodySectionHeader text={categoryItem['0'].name} />
                <div className={`overflow-auto ${HomeCss.category_row} d-flex flex-row`}>
                    {categoryItem['0'].subCategories.map((subCategoryItem: ISubCategory, key: number) => {
                        if (key >= 5) {
                            return <></>
                        }
                        subCategoryItem['categoryName'] = categoryItem['0'].name
                        return <CategoryCard {...subCategoryItem} key={subCategoryItem._id} />
                    })}</div>
            </div>


        })}
    </>
}

import Link from "next/link";
import { TiltPrism } from "@utils/font";
import HomeCss from '../Home.module.css'
import { ISubCategory } from "@lib/types/category";
import { CategoryCard } from "@components/category";
import { useFetchMultipleData } from "@hooks/useFetchMultipleData";
import { BorderSpinner } from "@components/general/spinners";


export const ProductsForEachCategory = () => {
    const categories = ['men', 'women']

    const { data, isLoading } = useFetchMultipleData('/api/category', categories)
    if (isLoading) return <BorderSpinner />
    return <>
        {data?.map((dataItem, key) => {
            return dataItem.data.map((categoryItem) => {

                return <div key={key} className={`row px-2 mt-3 gx-3 gx-md-4 gy-2 m-2`}>
                    <div className="d-flex flex-row justify-content-between border border-secondary rounded-2 pe-4">
                        <h1 className={`${TiltPrism.className} fw-bold`}>{categoryItem.name}</h1>
                        <Link href={`#`} className="link-dark fw-bold mt-2 mt-md-3">More</Link>
                    </div>
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
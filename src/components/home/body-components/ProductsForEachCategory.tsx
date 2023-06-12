import { AxiosResponse } from "axios";
import { IProductsData } from "@lib/types/product";
import { axiosInstance } from "@utils/axiosInstance";
import useSWR from "swr";
import Link from "next/link";
import { TiltPrism } from "@utils/font";
import { SubCategoryCard } from "@components/subcategory-card";
import HomeCss from '../Home.module.css'

export const ProductsForEachCategory = () => {
    const categories = ['men', 'women']

    const fetchProducts = async (url: string, category: string) => await axiosInstance.get(url, { params: { category } })
        .then((product: AxiosResponse<IProductsData[]>) => {
            return { category: category, data: product.data }
        });


    const { data } = useSWR(categories, (categories) => Promise.all(categories.map((category) => fetchProducts('/api/product', category))))
    return <>
        {data?.map((dataItem, key) => {
            return <div key={key} className={`row px-2 mt-3 gx-3 gx-md-4 gy-2 m-2`}>
                <div className="d-flex flex-row justify-content-between border border-secondary rounded-2 pe-4">
                    <h1 className={`${TiltPrism.className} fw-bold`}>{dataItem.category}</h1>
                    <Link href={`#`} className="link-dark fw-bold mt-2 mt-md-3">More</Link>
                </div>
                <div className={`overflow-auto ${HomeCss.category_row} d-flex flex-row`}>
                    {dataItem.data?.map((item: IProductsData, key: number) => {
                        if (key >= 5) {
                            return <></>
                        }
                        let activePaths = [item.category, item.subCategory]
                        item['activePaths'] = activePaths;
                        console.log(activePaths)
                        return <SubCategoryCard  {...item} key={key} />
                    })}</div>
            </div>
        })}
    </>
}
import HomeCss from '../Home.module.css'
import { CategoryCard } from "@components/category";
import { BorderSpinner } from "@components/general/spinners";
import { BodySectionHeader } from "./BodySectionHeader";
import { FC } from "react";
import { useSubCategoryForEachCategory } from '@hooks/home/useSubCategoriesForEachCategory';
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const SubCategoriesForEachCategory: FC = () => {
    const { isLoading, categoriesLoading, error, categoriesError, data } = useSubCategoryForEachCategory()
    const router = useRouter()
    if (isLoading || categoriesLoading) return <div className='mt-5'><BorderSpinner size={false} /></div>
    if (categoriesError || error) return <p className='text-center mt-3'>Error fetching categories and sub-categories</p>


    return <>
        <div className='container mt-3'>
            {
                data?.map((categories) => {
                    if (categories.subCategories.length !== 0) {
                        const categoryName = categories.categoryName
                        const categoryKey = uuidv4() + categories.categoryName
                        // @ts-ignore
                        if (categoryName === 'men' || categoryName === 'women') {

                            return (
                                <div key={categoryKey} className='mt-2'>
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button className={`nav-link ${HomeCss.nav_link_tab} text-capitalize active`} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">{categoryName}</button>

                                        </div>
                                    </nav>
                                    <div className="tab-content m-0" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                            <div className={`overflow-auto ${HomeCss.category_row} d-flex flex-row`}>
                                                {
                                                    categories?.subCategories.map((subCategory, key) => {
                                                        if (key > 10) {
                                                            return <></>
                                                        }
                                                        // return <CategoryCard {...subCategory} key={subCategory._id} />
                                                        return <div className="col-6 col-md-3 pe-1" key={categoryKey + key} onClick={() => router.push(`/categories/${categories.categoryName}/${subCategory.name}`)}>

                                                            <div className="card mt-1 rounded-0">
                                                                <Image src={`${subCategory?.imgURL}`} className="rounded-0 card-img" alt={''} width={300} height={200} style={{ objectFit: 'cover' }} />
                                                                <div className="card-body p-2">
                                                                    <Link href={{ pathname: `/categories/${categories.categoryName}/${subCategory.name}` }} className="stretched-link text-decoration-none text-dark">
                                                                        <p className="card-text text-capitalize fw-bold">{subCategory.name}</p>
                                                                    </Link>
                                                                </div>

                                                            </div>


                                                        </div>
                                                    })
                                                }


                                            </div>

                                        </div>



                                    </div>
                                </div>
                            )
                        }
                        return <></>

                        // return <div key={categoryKey} className={`row mt-3 mx-3`}>
                        //     <BodySectionHeader text={categories.categoryName} navigateTo={`/categories/${categories.categoryName}`} />
                        //     <div className={`overflow-auto ${HomeCss.category_row} d-flex flex-row`}>
                        //         {
                        //             categories.subCategories.map((subCategory, key) => {
                        //                 if (key > 10) {
                        //                     return <></>
                        //                 }
                        //                 return <CategoryCard {...subCategory} key={subCategory._id} />
                        //             })
                        //         }
                        //     </div>
                        // </div>
                    }

                })
            }
        </div>



    </>
}
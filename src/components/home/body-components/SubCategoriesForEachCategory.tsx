import HomeCss from '../Home.module.css'
import { CategoryCard } from "@components/category";
import { BorderSpinner } from "@components/general/spinners";
import { BodySectionHeader } from "./BodySectionHeader";
import { FC } from "react";
import { useSubCategoryForEachCategory } from '@hooks/home/useSubCategoriesForEachCategory';
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image';
import Link from 'next/link';

export const SubCategoriesForEachCategory: FC = () => {
    // const { isLoading, categoriesLoading, error, categoriesError, data } = useSubCategoryForEachCategory()
    // if (isLoading || categoriesLoading) return <div className='mt-5'><BorderSpinner size={false} /></div>
    // if (categoriesError || error) return <p className='text-center mt-3'>Error fetching categories and sub-categories</p>

    return <>
        {/* {
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
        } */}


        <div className='container mt-2'>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className={`nav-link ${HomeCss.nav_link_tab} active`} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Men</button>
                    <button className={`nav-link ${HomeCss.nav_link_tab}`} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Senators</button>
                    <button className={`nav-link ${HomeCss.nav_link_tab}`} id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Kaftans</button>
                    <button className={`nav-link ${HomeCss.nav_link_tab}`} id="nav-agbada-tab" data-bs-toggle="tab" data-bs-target="#nav-agbada" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Agbada</button>

                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className='row'>
                        {/* <div className='col-6 col-md-3'>

                            <div className="card mt-1 rounded-2" >
                                <Image src="/red-dress.jpg" className="card-img-top" alt="..." />
                                <div className="card-body p-0 ms-2">
                                    <p className="card-text">Dark Agbada</p>
                                </div>
                                <div className='card-footer d-flex justify-content-between p-0 bg-white border-0 ms-2 me-2'>
                                    <span className='bi-bag-check-fill text-dark'></span>
                                    <span className='bi-heart text-dark'> </span>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-6 col-md-3">
                            <div className="card mt-1">
                                <Image src={'/red-dress.jpg'} alt={''} width={300} height={200} style={{ objectFit: 'cover' }} className="card-img" />
                                <div className="card-body p-2">
                                    <Link href={{ pathname: `` }} className="stretched-link text-decoration-none text-dark">
                                        <p className="card-text text-capitalize fw-bold">XXX</p>
                                    </Link>
                                </div>
                                <div className='card-footer d-flex justify-content-between p-0 bg-white border-0 ms-2 me-2'>
                                    <span className='bi-bag-check-fill text-dark'></span>
                                    <span className='bi-heart text-dark'> </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="card mt-1">
                                <Image src={'/red-dress.jpg'} alt={''} width={300} height={200} style={{ objectFit: 'cover' }} className="card-img" />
                                <div className="card-body p-2">
                                    <Link href={{ pathname: `` }} className="stretched-link text-decoration-none text-dark">
                                        <p className="card-text text-capitalize fw-bold">XXX</p>
                                    </Link>
                                </div>
                                <div className='card-footer d-flex justify-content-between p-0 bg-white border-0 ms-2 me-2'>
                                    <span className='bi-bag-check-fill text-dark'></span>
                                    <span className='bi-heart text-dark'> </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="card mt-1">
                                <Image src={'/red-dress.jpg'} alt={''} width={300} height={200} style={{ objectFit: 'cover' }} className="card-img" />
                                <div className="card-body p-2">
                                    <Link href={{ pathname: `` }} className="stretched-link text-decoration-none text-dark">
                                        <p className="card-text text-capitalize fw-bold">XXX</p>
                                    </Link>
                                </div>
                                <div className='card-footer d-flex justify-content-between p-0 bg-white border-0 ms-2 me-2'>
                                    <span className='bi-bag-check-fill text-dark'></span>
                                    <span className='bi-heart text-dark'> </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="card mt-1">
                                <Image src={'/red-dress.jpg'} alt={''} width={300} height={200} style={{ objectFit: 'cover' }} className="card-img" />
                                <div className="card-body p-2">
                                    <Link href={{ pathname: `` }} className="stretched-link text-decoration-none text-dark">
                                        <p className="card-text text-capitalize fw-bold">XXX</p>
                                    </Link>
                                </div>
                                <div className='card-footer d-flex justify-content-between p-0 bg-white border-0 ms-2 me-2'>
                                    <span className='bi-bag-check-fill text-dark'></span>
                                    <span className='bi-heart text-dark'> </span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    b
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    c
                </div>
                <div className="tab-pane fade" id="nav-agbada" role="tabpanel" aria-labelledby="nav-contact-tab">
                    d
                </div>

            </div>
        </div>
    </>
}
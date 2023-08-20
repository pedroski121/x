import { NextPage } from "next";
import { Footer } from "@general-components/footer";
import { CategoryCard } from "@components/category";
import { BreadCrumbNav } from "@general-components/BreadCrumbNav";
import { useDynamicPath } from "@hooks/general/useDynamicPath";
import { GrowingSpinner } from "@components/general/spinners";
import Custom404 from "../404";
import { ICategory, IPath } from "@lib/types/category";
import { useFetch } from "@hooks/general/useFetch";
import { BodySectionHeader } from "@components/home/body-components";
import { ISubCategory, TSubCategoriesForCategory } from "@lib/types/category";
import { useRef } from "react";
import { useFetchMultipleParams } from "@hooks/general/useFetchMultipleParams";
import { BorderSpinner } from "@components/general/spinners";
import { IProductsData } from "@lib/types/product";
import { SubCategoryCard } from "@components/subcategory-card";
import { useContext } from "react";
import { CurrentUserContext } from "@contexts/CurrentUserContext";
import { useWishList } from "@hooks/wishlist/useWishList";

type TCategory = {
  name: string,
  imgURL: string,
  id: string
}

const Category: NextPage = () => {
  // Get  the exact page your on
  const { pages } = useDynamicPath();
  // const { data, error, isLoading } = useFetch<TCategory[]>(`/api/category/all`)
  const subCategories = useRef<string[]>([])
  const { userState } = useContext(CurrentUserContext)
  const { data: wishListData, changeWish, changingWish } = useWishList(userState._id)



  const currentPageName = pages[pages.length - 1];
  const { data: subCategoriesData, error: subCategoriesError, isLoading: subCategoriesLoading } = useFetch<TSubCategoriesForCategory>(`/api/sub-category/${currentPageName}`)

  if (subCategoriesData) {
    subCategoriesData.subCategories.map((subCategory) => {
      if (!subCategories.current.includes(subCategory.name) && subCategory) {
        subCategories.current.push(subCategory.name)
      }
    })
  }
  const { data, isLoading, error } = useFetchMultipleParams(`/api/product/${currentPageName}`, subCategories.current)

  if (isLoading || subCategoriesLoading) return <div className='d-flex justify-content-center align-items-center'>
    <GrowingSpinner />
  </div>
  if (subCategoriesError || error) return <p>An error occured loading the data</p>




  return (
    <>
      <div className="container-fluid">
        <BreadCrumbNav pages={pages} />
        {
          data?.map((subCategory, key) => {
            if (subCategory.products.length === 0) {
              return <></>
            }
            return <div className="row m-md-2 mt-3" key={key}>
              <BodySectionHeader text={subCategory.subCategory} page='category' navigateTo={`/categories/${currentPageName}/${subCategory.subCategory}`} />
              <div className="d-flex flex-row gap-4 overflow-auto" style={{ width: '100%' }}>
                {

                  subCategory.products.map((subCategoryItem: IProductsData) => {
                    return <SubCategoryCard productsData={subCategoryItem}
                      wishListData={wishListData || [{ _id: '', productID: '' }]} changingWish={changingWish} changeWish={changeWish} activePaths={[...pages, subCategoryItem.subCategory]} key={subCategoryItem._id} />
                  })
                }
              </div>
            </div>

          })
        }
      </div>
      <Footer />
    </>
  );
};

export default Category;

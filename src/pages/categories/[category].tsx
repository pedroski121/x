import { NextPage } from "next";
import { Footer } from "@general-components/footer";
import { BreadCrumbNav } from "@general-components/BreadCrumbNav";
import { GrowingSpinner } from "@components/general/spinners";
import { BodySectionHeader } from "@components/home/body-components";
import { useFetchMultipleParams } from "@hooks/general/useFetchMultipleParams";
import { IProductsData } from "@lib/types/product";
import { SubCategoryCard } from "@components/subcategory-card";
import { v4 as uuidv4 } from 'uuid'


import { useCategory } from "@hooks/category/useCategory";


type TProductsForEachSubCategory = {
  subCategory: string,
  products: IProductsData[]
}

const Category: NextPage = () => {
  const { subCategoriesLoading, changeWish, currentPageName, changingWish, subCategories, subCategoriesError, pages, wishListData } = useCategory();

  const { data, isLoading, error } = useFetchMultipleParams<TProductsForEachSubCategory>(`/api/product/${currentPageName}`, subCategories.current)
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
            const subCategoryKey = uuidv4()

            if (subCategory.products.length === 0) {
              return <div key={subCategoryKey}></div>
            }
            return <div className="row m-1 mt-3" key={subCategoryKey + subCategory.subCategory}>
              <BodySectionHeader text={subCategory.subCategory} page='category' navigateTo={`/categories/${currentPageName}/${subCategory.subCategory}`} />
              <div className="d-flex flex-row  overflow-auto" style={{ width: '100%' }}>
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

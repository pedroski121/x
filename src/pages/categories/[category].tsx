import { NextPage } from "next";
import { Footer } from "@general-components/footer";
import { BreadCrumbNav } from "@general-components/BreadCrumbNav";
import { GrowingSpinner } from "@components/general/spinners";
import { BodySectionHeader } from "@components/home/body-components";
import { useFetchMultipleParams } from "@hooks/general/useFetchMultipleParams";
import { IProductsData } from "@lib/types/product";
import { SubCategoryCard } from "@components/subcategory-card";

import { useCategory } from "@hooks/category/useCategory";

const Category: NextPage = () => {
  const { subCategoriesLoading, changeWish, currentPageName, changingWish, subCategories, subCategoriesError, pages, wishListData } = useCategory();

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

import useSWR from 'swr'
import { AxiosResponse } from "axios";
import { IProductsData } from '@lib/types/product'
import { useDynamicPath } from "@hooks/general/useDynamicPath";
import { axiosInstance } from "@utils/axiosInstance";
import { SubCategoryCard } from "@components/subcategory-card";
import { GrowingSpinner } from "@components/general/spinners";
import { BreadCrumbNav } from "@general-components/BreadCrumbNav";
import { Footer } from "@general-components/footer";
import Custom404 from "src/pages/404";
import { useContext } from 'react';
import { CurrentUserContext } from '@contexts/CurrentUserContext';
import { useWishList } from '@hooks/wishlist/useWishList';
import { useFetch } from '@hooks/general/useFetch';

const SubCategoryProducts = () => {
  const { pages } = useDynamicPath();
  const { userState } = useContext(CurrentUserContext)
  const { data: wishListData, changeWish, changingWish } = useWishList(userState._id)

  const { data, error, isLoading } = useFetch<{ subCategory: string, products: IProductsData[] }>(`/api/product/${pages[0]}/${pages[1]}`);

  if (isLoading) return <GrowingSpinner />
  if (error) return <Custom404 />;
  return (
    <>

      <div className="container-fluid ">
        <BreadCrumbNav pages={pages} />
        <div className="row m-0 m-md-3 justify-content-between">
          {
            data?.products.map(product => <SubCategoryCard productsData={product}
              wishListData={wishListData || [{ _id: '', productID: '' }]} changingWish={changingWish} changeWish={changeWish} activePaths={pages} key={product._id} />)
          }
        </div>

      </div>
      <Footer />
    </>
  )
}
export default SubCategoryProducts
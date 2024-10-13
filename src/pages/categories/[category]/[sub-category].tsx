import { IProductsData } from '@lib/types/product'
import { useDynamicPath } from "@hooks/general/useDynamicPath";
import { SubCategoryCard } from "@components/subcategory-card";
import { GrowingSpinner } from "@components/general/spinners";
import { BreadCrumbNav } from "@general-components/BreadCrumbNav";
import { Footer } from "@general-components/footer";
import Custom404 from "src/pages/404";
// import { useContext } from 'react';
// import { CurrentUserContext } from '@contexts/CurrentUserContext';
import { useWishList } from '@hooks/wishlist/useWishList';
import { useFetch } from '@hooks/general/useFetch';
import { useBag } from '@hooks/bag/useBag';
import { useUser } from '@clerk/nextjs';

const SubCategoryProducts = () => {
  const { pages } = useDynamicPath();
  // const { userState } = useContext(CurrentUserContext)
  const { user } = useUser();

  const { data: wishListData, changeWish, changingWish } = useWishList(user?.id || '')

  const { data, error, isLoading } = useFetch<{ subCategory: string, products: IProductsData[] }>(`/api/product/${pages[0]}/${pages[1]}`);
  const { bagItems } = useBag()

  if (isLoading) return <GrowingSpinner />
  if (error) return <Custom404 />;

  return (
    <>

      <div className="container-fluid ">
        <BreadCrumbNav pages={pages} />
        <div className="row ">
          {
            data?.products.map(product => (
              <SubCategoryCard productsData={product}
                wishListData={wishListData || [{ _id: '', productID: '' }]}
                bagItems={bagItems} changingWish={changingWish} changeWish={changeWish}
                activePaths={pages} key={product._id} />
            ))
          }
        </div>

      </div>
      <Footer />
    </>
  )
}
export default SubCategoryProducts
import useSWR from 'swr'
import { AxiosResponse } from "axios";
import { IProductsData } from '@lib/types/product'
import { useDynamicPath } from "@hooks/useDynamicPath";
import { axiosInstance } from "@utils/axiosInstance";
import { SubCategoryCard } from "@components/subcategory-card";
import { GrowingSpinner } from "@general-components/spinner";
import { NavBar } from "@general-components/navbar";
import { BreadCrumbNav } from "@general-components/BreadCrumbNav";
import { Footer } from "@general-components/footer";
import Custom404 from "src/pages/404";

const CategoryProducts = () => {
  const activePaths = useDynamicPath();
  const fetchProducts = async (url: string) => await axiosInstance.get(url).then((product: AxiosResponse<IProductsData[]>) => product.data);
  const { data, error, isLoading } = useSWR(`/api/product/all`, fetchProducts);
  if (isLoading) return <GrowingSpinner />
  if (error) return <Custom404 />;

  // filter to get the data for the active page category your on
  const currentPageProductData = data?.filter((receivedPageData) => receivedPageData.category == activePaths[0] && receivedPageData.subCategory == activePaths[1]);
  return (
    <>

      <NavBar />
      <div className="container-fluid ">
        <BreadCrumbNav pages={activePaths} />
        <div className="row mt-3">
          {
            currentPageProductData?.map(product => <SubCategoryCard {...product} activePaths={activePaths} key={product._id} />)
          }
        </div>

      </div>
      <Footer />
    </>
  )
}
export default CategoryProducts
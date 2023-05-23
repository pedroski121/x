import { NavBar } from "@components/navbar";
import { BreadCrumbNav } from "@components/BreadCrumbNav";
import useSWR from 'swr'
import { ProductCard } from "@components/product-card";
import { useDynamicPath } from "@hooks/useDynamicPath";
import { Footer } from "@components/footer";
import axios, { AxiosResponse } from "axios";
import { GrowingSpinner } from "@components/spinner";
import { IProductsData } from "@lib/types/products-data-type";

const CategoryProducts = () => {
  const activePaths = useDynamicPath();
  const fetchProducts = async (url: string) => await axios.get(url).then((product: AxiosResponse<IProductsData[]>) => product.data);
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/product/all`, fetchProducts);
  if (isLoading) return <GrowingSpinner />
  if (error) return <p>An Error has occured</p>;

  // filter to get the data for the current page category your page is on
  const currentPageProductData = data?.filter((receivedPageData) => receivedPageData.category == activePaths[0] && receivedPageData.subCategory == activePaths[1]);
  return (
    <>

      <NavBar />
      <div className="container-fluid ">
        <BreadCrumbNav pages={activePaths} />
        <div className="row mt-3">
          {
            currentPageProductData?.map(product => <ProductCard {...product} />)
          }
        </div>

      </div>
      <Footer />
    </>
  )
}
export default CategoryProducts
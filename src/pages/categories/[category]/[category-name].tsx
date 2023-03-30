import { NavBar } from "@components/navbar";
import { BreadCrumbNav } from "@components/BreadCrumbNav";
import { ProductCard } from "@components/product-card";
import { useDynamicPath } from "@hooks/useDynamicPath";
import { Footer } from "@components/footer";

const CategoryProducts = () => {
  const paths = useDynamicPath()
  return (
    <>

      <NavBar />
      <div className="container-fluid ">
        <BreadCrumbNav pages={paths} />
        <div className="row mt-3">
          <ProductCard id='1' title="Brown Shoe" price={4000} imgURL="/men/shoes.jpg" />

        </div>

      </div>
      <Footer />
    </>
  )
}
export default CategoryProducts
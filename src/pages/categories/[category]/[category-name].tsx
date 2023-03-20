import { NavBar } from "@components/navbar";
import { BreadCrumbNav } from "@components/category";
import { ProductCard } from "@components/product-card";
import { useDynamicPath } from "@hooks/useDynamicPath";

const CategoryProducts = () => {
  const paths = useDynamicPath()
    return (
        <>

          <NavBar/>
          <div className="container-fluid">
          <BreadCrumbNav pages={paths}/>
          <div className="row">
          <ProductCard/></div>

</div>
  </>
    )
}
export default CategoryProducts
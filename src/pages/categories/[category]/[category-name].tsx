import { NavBar } from "@components/navbar";
import { BreadCrumbNav } from "@components/category";
import { useDynamicPath } from "@hooks/useDynamicPath";

const CategoryProducts = () => {
  const paths = useDynamicPath()
    return (
        <>

          <NavBar/>
          <div className="container-fluid">
          <BreadCrumbNav pages={paths}/>
</div>
        </>
    )
}
export default CategoryProducts
import { NavBar } from "@components/navbar";
import { BreadCrumbNav } from "@components/category";
import { useDynamicPath } from "@hooks/useDynamicPath";

const CategoryProducts = () => {
  const paths = useDynamicPath()
    return (
        <>
          <NavBar/>
          <BreadCrumbNav pages={paths}/>

        </>
    )
}
export default CategoryProducts
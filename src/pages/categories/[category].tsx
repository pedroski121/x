import { NavBar } from "@components/navbar";
import { Footer } from "@components/footer";
import { BreadCrumbNav, CategoryCard} from "@components/category";
import { usePath } from "@hooks/usePath";


const Category = () => { 
const currentPage = usePath()


    return (
        <>
          <NavBar/>
          <div className="container-fluid">
            <BreadCrumbNav currentpage={currentPage}/>
            <div className="row ">
                <CategoryCard/>
            </div>
          </div>
          <Footer/>
        </>
    )
}
export default Category
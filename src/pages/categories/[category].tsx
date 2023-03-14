import { NavBar } from "@components/navbar";
import { Footer } from "@components/footer";
import { BreadCrumbNav, CategoryCard} from "@components/category";
import { useDynamicPath } from "@hooks/useDynamicPath";


const Category = () => { 
const currentPage = useDynamicPath()
    return (
        <>
          <NavBar/>
          <div className="container-fluid">
            <BreadCrumbNav currentpage={currentPage}/>
            <div className="row mt-1 mb-4">
                <CategoryCard ImgSrc="/men/all.jpg" QueryString="all" SubCategoryName="All" CategoryName={currentPage}/>
                <CategoryCard ImgSrc="/men/suit.jpg" QueryString="suits" SubCategoryName="Suits" CategoryName={currentPage}/>
                <CategoryCard ImgSrc="/men/senator.jpg" QueryString="senators" SubCategoryName="Senators" CategoryName={currentPage}/>
                <CategoryCard ImgSrc="/men/shoes.jpg" QueryString="shoes" SubCategoryName="Shoes" CategoryName={currentPage}/>   
                <CategoryCard ImgSrc="/men/watches.jpg" QueryString="watches" SubCategoryName="Watches" CategoryName={currentPage}/>
                <CategoryCard ImgSrc="/men/perfumes.jpg" QueryString="perfumes" SubCategoryName="Perfumes" CategoryName={currentPage}/>
            </div>
          </div>
          <Footer/>
        </>
    )
}
export default Category
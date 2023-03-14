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
            <BreadCrumbNav pages={currentPage}/>
            <div className="row mt-1 mb-4">
                <CategoryCard ImgSrc="/men/all.jpg" QueryString="all" SubCategoryName="All" CategoryName={currentPage[currentPage.length-1]}/>
                <CategoryCard ImgSrc="/men/suit.jpg" QueryString="suits" SubCategoryName="Suits" CategoryName={currentPage[currentPage.length-1]}/>
                <CategoryCard ImgSrc="/men/senator.jpg" QueryString="senators" SubCategoryName="Senators" CategoryName={currentPage[currentPage.length-1]}/>
                <CategoryCard ImgSrc="/men/shoes.jpg" QueryString="shoes" SubCategoryName="Shoes" CategoryName={currentPage[currentPage.length-1]}/>   
                <CategoryCard ImgSrc="/men/watches.jpg" QueryString="watches" SubCategoryName="Watches" CategoryName={currentPage[currentPage.length-1]}/>
                <CategoryCard ImgSrc="/men/perfumes.jpg" QueryString="perfumes" SubCategoryName="Perfumes" CategoryName={currentPage[currentPage.length-1]}/>
            </div>
          </div>
          <Footer/>
        </>
    )
}
export default Category
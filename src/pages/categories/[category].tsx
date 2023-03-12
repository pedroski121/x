import { useRouter } from "next/router"
import { NavBar } from "@components/navbar";
import { Footer } from "@components/footer";
import { CategoryCard } from "@components/category-card";

const Category = () => { 
    const router = useRouter();

    const {category} = router.query;
  
    return (
        <>
            <NavBar/>

            <div className="container-fluid">
            <header className="d-flex flex-wrap justify-content-center py-3  border-bottom">
           <div className=" mb-1 mb-md-0 me-md-auto text-dark text-decoration-none">
           <nav style={{['--bs-breadcrumb-divider' as any]: '>'}} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home </a></li>
    <li className="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>
      </div>

    </header>
                <div className="row ">
                <CategoryCard/>

                </div>
                </div>
            <Footer/>
        </>
    )
}
export default Category
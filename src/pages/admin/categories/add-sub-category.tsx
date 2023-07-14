import { NavBar } from "@components/general/navbar"
import { Footer } from "@components/general/footer"
import { Header } from "@components/admin"
import { AddSubCategoryForm } from "@components/admin"

const AddCategory = () => {
    return <>
        <NavBar/>
        <div className="container mt-3">
        <Header pageName="New Sub Category"/>
        <AddSubCategoryForm/>
        
        </div>
        <Footer/>
    </>
}

export default AddCategory
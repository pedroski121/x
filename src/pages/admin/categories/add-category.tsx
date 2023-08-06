import { Footer } from "@components/general/footer"
import { Header } from "@components/admin"
import { AddCategoryForm } from "@components/admin"

const AddCategory = () => {

    return <>
        <div className="container mt-3">
        <Header pageName="New Category"/>
        <AddCategoryForm/>
        </div>
        <Footer/>
    </>
}

export default AddCategory
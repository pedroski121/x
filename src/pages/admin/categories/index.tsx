import { NextPage } from "next"
import { Footer } from "@components/general/footer"
import { Header } from "@components/admin"
import { CategoriesAction, CategoryTables } from "@components/admin"

const Categories:NextPage = () => {
    
    return (<>
        <div className="container">
        <Header pageName="Categories" />
        <CategoriesAction/>
        <CategoryTables/>
        </div>
        <Footer />
    </>
    )
}

export default Categories
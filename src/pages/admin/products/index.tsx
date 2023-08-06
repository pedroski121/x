import { ActionRow, Header, AllProducts} from "@components/admin"
import { Footer } from "@components/general/footer"
import { NextPage } from "next"

const Products:NextPage = () => {


    return (<>
        <div className="container">
            <Header pageName="Manage Products"/>
            <ActionRow/>
            <AllProducts/>

        </div>
        <Footer/>
    </>
    )
}

export default Products
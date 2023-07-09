import { ActionRow, Header} from "@components/admin"
import { Footer } from "@components/general/footer"
import { NavBar } from "@components/general/navbar"
import { NextPage } from "next"

const Products:NextPage = () => {


    return (<>
        <NavBar />
        <div className="container">
            <Header pageName="Manage Products"/>
            <ActionRow/>
        </div>
        <Footer/>
    </>
    )
}

export default Products
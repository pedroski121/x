import { SummarySection } from "@components/admin"
import { Footer } from "@components/general/footer"
import { NavBar } from "@components/general/navbar"
import { Header } from "@components/admin"
import { NextPage } from "next"


const Admin:NextPage = () => {
    return (<>
        <NavBar />
        <div className="container">
            <Header pageName="Statistics" />
            <SummarySection />
        </div>
        <Footer />
    </>
    )
}

export default Admin
import { SummarySection } from "@components/admin"
import { Footer } from "@components/general/footer"
import { Header } from "@components/admin"
import { NextPage } from "next"


const Admin:NextPage = () => {
    return (<>
        <div className="container">
            <Header pageName="Statistics" />
            <SummarySection />
        </div>
        <Footer />
    </>
    )
}

export default Admin
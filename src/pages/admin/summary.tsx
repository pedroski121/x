import { SummarySection } from "@components/admin"
import { Footer } from "@components/general/footer"
import { NavBar } from "@components/general/navbar"
import { Header } from "@components/admin"



const Admin = () => {
    return (<>
        <NavBar />
        <div className="container">
            <Header />
            <SummarySection />
        </div>
        <Footer />
    </>
    )
}

export default Admin
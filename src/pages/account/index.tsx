import { Footer } from "@components/general/footer"
import { NavBar } from "@components/general/navbar"
import { AccountBody } from "@components/account"
import { AccountOverviewDetails } from "@components/account"
const AccountOverview = () =>{
    return <>
        <NavBar/>
        <AccountBody sectionHeading="Account Overview">
            <AccountOverviewDetails/>
        </AccountBody>
        <Footer/>
   </>
}

export default AccountOverview
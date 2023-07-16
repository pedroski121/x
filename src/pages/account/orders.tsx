import { NavBar } from "@components/general/navbar"
import { Footer } from "@components/general/footer"
import { AccountBody } from "@components/account"
import { OrderList } from "@components/account"
const Orders = () =>{
    return (
        <>
            <NavBar/>
            <AccountBody sectionHeading="Orders">
                <OrderList/>
            </AccountBody>
            <Footer/>
        </>
    )
}

export default Orders
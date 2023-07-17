import { NavBar } from "@components/general/navbar"
import { AccountBody, WishListItems } from "@components/account"
import { Footer } from "@components/general/footer"

const WishList = () =>{
    return <>
        <NavBar/>
        <AccountBody sectionHeading="WishList">
            <WishListItems/>
        </AccountBody>
        <Footer/>
    </>
}

export default WishList
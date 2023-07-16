import { NavBar } from "@components/general/navbar"
import { AccountBody } from "@components/account"
import { WishListItems } from "@components/account"
const WishList = () =>{
    return <>
        <NavBar/>
        <AccountBody sectionHeading="WishList">
            <WishListItems/>
        </AccountBody>
    </>
}

export default WishList
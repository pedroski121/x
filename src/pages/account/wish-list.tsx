import { AccountBody, WishListItems } from "@components/account"
import { Footer } from "@components/general/footer"
import { getServerSideProps } from "@utils/user-session"
import { TAccountPageProps } from "@lib/types/account"
import { NextPage } from "next/types"

const WishList:NextPage<TAccountPageProps>= (session) =>{
    return <>
        <AccountBody sectionHeading="WishList">
            <WishListItems/>
        </AccountBody>
        <Footer/>
    </>
}

export {getServerSideProps}
export default WishList
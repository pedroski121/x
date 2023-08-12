import { AccountBody, WishListItems } from "@components/account"
import { Footer } from "@components/general/footer"
import { TUserSession } from "@lib/types/current-user"
import { getServerSideProps } from "@utils/user-session"
import { NextPage } from "next/types"

const WishList:NextPage<{session:TUserSession}>= (session) =>{
    const {currentUser} = session.session[0]
    return <>
        <AccountBody sectionHeading="WishList">
            <WishListItems currentUserId={`${currentUser._id}`}/>
        </AccountBody>
        <Footer/>
    </>
}

export {getServerSideProps}
export default WishList
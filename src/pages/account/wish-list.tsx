import { AccountBody, WishListItems } from "@components/account"
import { Footer } from "@components/general/footer"
import { TUserSession } from "@lib/types/current-user"
import { getServerSideProps } from "@utils/user-session"
import { NextPage } from "next/types"
import { SignedOut, SignedIn } from "@clerk/nextjs"

const WishList: NextPage<{ session: TUserSession }> = (session) => {
    const { currentUser } = session.session[0]
    return <>
        <SignedOut>
            <div className="container vh-100">
                <div className="d-flex align-items-center justify-content-center h-100">
                    Please sign in
                </div>
            </div>
        </SignedOut>
        <SignedIn>
            <AccountBody sectionHeading="WishList">
                <WishListItems currentUserId={`${currentUser._id}`} />
            </AccountBody>

        </SignedIn>
        <Footer />


    </>
}

export { getServerSideProps }
export default WishList
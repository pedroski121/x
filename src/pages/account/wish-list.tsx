import { AccountBody, WishListItems } from "@components/account"
import { Footer } from "@components/general/footer"
import { TUserSession } from "@lib/types/current-user"
import { NextPage } from "next/types"
import { SignedOut, SignedIn } from "@clerk/nextjs"

const WishList: NextPage<{ session: TUserSession }> = () => {
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
                <WishListItems />
            </AccountBody>

        </SignedIn>
        <Footer />


    </>
}

export default WishList
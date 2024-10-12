import { UserProfile } from "@clerk/nextjs"
import { Footer } from "@components/general/footer"
import { AccountBody } from "@components/account"
import { SignedOut, SignedIn } from "@clerk/nextjs"
const ManageAccount = () => {

    return <>
        <SignedOut>
            <div className="container vh-100">
                <div className="d-flex align-items-center justify-content-center h-100">
                    Please sign in
                </div>
            </div>
        </SignedOut>
        <SignedIn>
            <AccountBody sectionHeading="Manage Profile">

                <UserProfile />
            </AccountBody>

        </SignedIn >
        <Footer />

    </>
}

export default ManageAccount
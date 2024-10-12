import { NextPage } from 'next'
import { Footer } from "@components/general/footer"
import { AccountBody } from "@components/account"
import { AccountOverviewDetails } from "@components/account"

import { SignedIn, SignedOut } from '@clerk/nextjs'

const AccountOverview: NextPage = () => {
    return (
        <>
            <SignedOut>
                <div className="container vh-100">
                    <div className="d-flex align-items-center justify-content-center h-100">
                        Please sign in
                    </div>
                </div>
            </SignedOut>
            <SignedIn>
                <AccountBody sectionHeading="Account Overview">
                    <AccountOverviewDetails />
                </AccountBody>

            </SignedIn>
            <Footer />
        </>
    )
}



export default AccountOverview;

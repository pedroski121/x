import { NextPage } from "next/types"

import { Footer } from "@components/general/footer"
import { AccountBody } from "@components/account"
import { OrderList } from "@components/account"
import { getServerSideProps } from "@utils/user-session"
import { TAccountPageProps } from "@lib/types/account"
import { SignedIn, SignedOut } from "@clerk/nextjs"

const Orders: NextPage<TAccountPageProps> = () => {
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
                <AccountBody sectionHeading="Orders">
                    <OrderList />
                </AccountBody>

            </SignedIn>
            <Footer />
        </>
    )
}

export default Orders
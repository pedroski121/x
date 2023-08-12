import {NextPage } from 'next'
import { Footer } from "@components/general/footer"
import { AccountBody } from "@components/account"
import { AccountOverviewDetails } from "@components/account"
import { getServerSideProps } from "@utils/user-session"
import { TUserSession } from "@lib/types/current-user"


const AccountOverview: NextPage<{session:TUserSession}> = (session) => {
        const {currentUser} = session.session[0]
        return (
            <>
            <AccountBody sectionHeading="Account Overview">
                <AccountOverviewDetails _id={currentUser._id} /> 
            </AccountBody>
            <Footer />
        </>
        )
    }


export {getServerSideProps}

export default AccountOverview;

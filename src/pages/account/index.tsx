import {NextPage } from 'next'
import { Footer } from "@components/general/footer"
import { NavBar } from "@components/general/navbar"
import { AccountBody } from "@components/account"
import { AccountOverviewDetails } from "@components/account"
import { getServerSideProps } from "@utils/user-session"
import { TUserSession } from "@lib/types/current-user"
import { useFetch } from "@hooks/useFetch"
import { TAccountData } from '@components/account/overview/AccountOverviewDetails'

const AccountOverview: NextPage<{session:TUserSession}> = (session) => {
        const {currentUser} = session.session[0]
        const {data}:{data:TAccountData} = useFetch(`/api/user/${currentUser._id}`)
        return (
            <>
            <NavBar firstName={data?.firstName}/>
            <AccountBody sectionHeading="Account Overview">
                <AccountOverviewDetails data={data} /> 
            </AccountBody>
            <Footer />
        </>
        )
    }


export {getServerSideProps}

export default AccountOverview;

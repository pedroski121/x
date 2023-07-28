import { useEffect, useState } from "react"
import {NextPage } from 'next'
import { Footer } from "@components/general/footer"
import { NavBar } from "@components/general/navbar"
import { AccountBody } from "@components/account"
import { AccountOverviewDetails } from "@components/account"
import { TAccountPageProps } from "@lib/types/account"
import { shouldRender } from "@utils/should-render"
import { getServerSideProps } from "@utils/user-session"

const AccountOverview: NextPage<TAccountPageProps> = ( session ) => {
    const [render, setRender] = useState<boolean>(false);
    useEffect(()=>{
        setRender(()=>shouldRender(session))
    }, [])

    if(render){
        return (
            <>
            <NavBar userId={ //@ts-ignore
             session.userSession._id }/>
            <AccountBody sectionHeading="Account Overview">
                <AccountOverviewDetails /> 
            </AccountBody>
            <Footer />
        </>
        )
    } return (<><NavBar/><p>Not Authorized</p></>);
}


export {getServerSideProps}

export default AccountOverview;

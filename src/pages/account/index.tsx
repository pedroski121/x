import { useEffect, useState } from "react"
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { Footer } from "@components/general/footer"
import { NavBar } from "@components/general/navbar"
import { AccountBody } from "@components/account"
import { AccountOverviewDetails } from "@components/account"
import { fetchUserSessionData } from "@utils/user-session"
import { TAccountPageProps } from "@lib/types/account"
import { shouldRender } from "@utils/should-render"


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


export const getServerSideProps: GetServerSideProps<TAccountPageProps> = async (context: GetServerSidePropsContext) => {
    const userSession = await fetchUserSessionData(context);
    if(!userSession[0].success){
        return {
            redirect:{
                destination:'/account/sign-in', 
                permanent:false
            }
        }
    }
    return { props: { userSession } };
}

export default AccountOverview;

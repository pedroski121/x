import {GetServerSidePropsContext, GetServerSideProps} from 'next'
import { axiosInstance } from "@utils/axiosInstance"
import { TCurrentUser } from '@lib/types/current-user'
import { TAccountPageProps } from '@lib/types/account'

export const fetchUserSessionData =async (context:GetServerSidePropsContext):Promise<TCurrentUser[] | [{message:string, success:boolean}]> =>{
    try {
        const userSession = await axiosInstance.get('/api/auth/current-user', {
            withCredentials: true,
            headers: {
                Cookie: context.req.headers.cookie || '', // Ensure Cookie header is provided even if it's undefined
            },
        }); 
        return  userSession.data
    } catch (err:any) {
        // If an error occurs or the user is not authenticated, return an empty userSession
        const errorData = err.response?.data
        if(errorData){
            return errorData
        }
        return [{ message: 'User not authenticated', success: false }] ;
    }
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
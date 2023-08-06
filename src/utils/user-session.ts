import {GetServerSidePropsContext, GetServerSideProps, GetServerSidePropsResult} from 'next'
import { axiosInstance } from "@utils/axiosInstance"
import { TUserSession } from '@lib/types/current-user'

export function isCurrentUser(user: any):user is TUserSession {
     let userSession = user[0].currentUser
     if(userSession) {
        return '_id' in userSession
     }
     return false
}

export const fetchUserSessionData = async (context:GetServerSidePropsContext):Promise<TUserSession | [{message:string, success:boolean}]> => {
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



export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext):Promise<GetServerSidePropsResult<{session:TUserSession}>> => {
    const userSession = await fetchUserSessionData(context);
    if(isCurrentUser(userSession)) {
        return {props: {session:userSession}}
    }
    return {
        redirect:{
            destination:'/account/sign-in', 
            permanent:false
        }
    }
}


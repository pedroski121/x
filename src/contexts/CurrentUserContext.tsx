import React, { ReactNode, useReducer } from "react";
import { useFetch } from "@hooks/useFetch";
import { AxiosResponse } from "axios";
import { axiosInstance } from "@utils/axiosInstance";



export type IUser = {
    firstName:string, 
    lastName:string,
    email:string,
    phoneNumber?:number,
    additionalPhoneNumber?:number,
    address1?:string,
    address2?:string, 
    state?:string,
    city?:string
}

export enum UserAction  {
    SET_USER = 'get_user'
}

export type TUserAction =
    | { type: UserAction.SET_USER, payload: {user:IUser} }


type TCurrentUserContextState = {
    dispatch?:React.Dispatch<TUserAction>
    userState: IUser
}



const userDefaultValues = {
    firstName:'', 
    lastName:'',
    email:'',
}



const userSessionReducer =  (state:IUser, action:TUserAction) =>{
    switch (action.type) {
        case UserAction.SET_USER:
            const currentUser = action.payload.user
            return {...currentUser}
        default:
            return state
    }
}


export const CurrentUserContext = React.createContext<TCurrentUserContextState>({userState:userDefaultValues})
export const CurrentUserProvider = ({ children }: { children: ReactNode }) => {
    const [userState, dispatch] = useReducer(userSessionReducer, userDefaultValues)
    return (
        <CurrentUserContext.Provider value={{userState, dispatch}}>
            {children}
        </CurrentUserContext.Provider>
    )

}
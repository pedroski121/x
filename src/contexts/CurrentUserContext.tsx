import React, { ReactNode, useReducer } from "react";
import { TCurrentUserContextState } from "@lib/types/account";
import { userSessionReducer } from "@lib/reducers/user-session";


const userDefaultValues = {
    firstName:'', 
    lastName:'',
    email:'',
    _id:''
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
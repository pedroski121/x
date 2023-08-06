import { TUserSessionAction } from "@lib/types/account"
import { IUser } from "@lib/types/current-user";
import { UserSessionAction } from "@lib/enums";

 export const userSessionReducer =  (state:IUser, action:TUserSessionAction) =>{
    switch (action.type) {
        case UserSessionAction.SET_USER:
            const currentUser = action.payload.user
            return {...currentUser}
        default:
            return state
    }
}
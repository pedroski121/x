import { TCurrentUser } from "@lib/types/current-user";
import { TAccountPageProps } from "@lib/types/account";

export const shouldRender = (userSession:TAccountPageProps):boolean => {
    const session = userSession.userSession[0]
    function isTCurrentUser(obj: any): obj is TCurrentUser {
        return '_id' in obj && 'email' in obj && 'iat' in obj && 'exp' in obj;
    }
    if(isTCurrentUser(session)){
        return true
    }
    return false
    

}


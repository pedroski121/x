import { TUserSession } from "../current-user"
import { UserSessionAction } from "@lib/enums";
import { IUser } from "@lib/types/current-user";
export type TAccountPageProps = {
    userSession: TUserSession[] | { message: string, success: boolean }[];
}

export type TUserSessionAction =
    | { type: UserSessionAction.SET_USER, payload: {user:IUser} }


export type TCurrentUserContextState = {
    dispatch?:React.Dispatch<TUserSessionAction>
    userState: IUser
}

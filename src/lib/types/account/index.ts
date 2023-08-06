import { TUserSession } from "../current-user"

export type TAccountPageProps = {
    userSession: TUserSession[] | { message: string, success: boolean }[];
}
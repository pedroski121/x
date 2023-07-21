import { TCurrentUser } from "../current-user"

export type TAccountPageProps = {
    userSession: TCurrentUser[] | { message: string, success: boolean }[];
}
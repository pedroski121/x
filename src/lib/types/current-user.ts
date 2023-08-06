export type TCurrentUser = {
    _id: string,
   email: string,
   iat: number,
   exp: number,
   success:boolean
}

export type TUserSession = {
    currentUser: {
        _id:string, 
    }, 
    success:boolean
}[]
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

export type IUser = {
    _id:string,
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
export interface IAddressBook {
    phoneNumber?:number,
    additionalPhoneNumber?:number, 
    address1?:string,
     address2?:string, 
     state?:string, 
     city?:string
    };

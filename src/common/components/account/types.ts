import { ACTION_KIND } from "./form-enums"
export type IFormState = {
    spinner:boolean,
    accountInvalidMessage:string,
    passwordInvalidMessage:string,
    fullNameInvalidMessage:string
  }

  export type Action = {
    type:ACTION_KIND,
    payload?:any
  }
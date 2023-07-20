import { ACTION } from "@lib/enums"
import { TFormState, TAction } from "@lib/types"
 
export function signInFormReducer(state:TFormState, action:TAction) {
    switch(action.type){
      case ACTION.TOGGLE_SPINNER:
       return { ...state, spinner: !state.spinner} 
      case ACTION.CHANGE_ACC_INVALID_MESSAGE:
        return {...state, accountInvalidMessage:action.payload}
      case ACTION.CHANGE_PSWD_INVALID_MESSAGE:
          return {...state, passwordInvalidMessage:action.payload}
      case ACTION.CHANGE_FULLNAME_INVALID_MESSAGE:
        
        return {...state, fullNameInvalidessage:action.payload}
      default:
        return state
      }
  
  }
import { ACTION_KIND } from "./form-enums"
import { IFormState, Action } from "./types"
 
export function formReducer(state:IFormState, action:Action) {
    switch(action.type){
      case ACTION_KIND.TOGGLE_SPINNER:
       return { ...state, spinner: !state.spinner} 
      case ACTION_KIND.CHANGE_ACC_INVALID_MESSAGE:
        return {...state, accountInvalidMessage:action.payload}
      case ACTION_KIND.CHANGE_PSWD_INVALID_MESSAGE:
          return {...state, passwordInvalidMessage:action.payload}
      case ACTION_KIND.CHANGE_FULLNAME_INVALID_MESSAGE:
        
        return {...state, fullNameInvalidessage:action.payload}
      default:
        return state
      }
  
  }
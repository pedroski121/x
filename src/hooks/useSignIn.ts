import React,{useState, useReducer} from 'react';
import  { useRouter } from 'next/router';
import {AxiosResponse} from 'axios';
import { axiosInstance } from '@utils/axiosInstance';
import { ACTION } from '@lib/enums';
import { signInFormReducer } from '@lib/reducers/sign-in/form';
import { TResponse } from '@lib/types/response';
import { initialState } from '@lib/states/sign-in/initial-state';


export const useSignIn = () => {
  const [state, dispatch] = useReducer(signInFormReducer, initialState)
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const router = useRouter();
  async function handleSignInFormSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({type:ACTION.TOGGLE_SPINNER})
    dispatch({type:ACTION.CHANGE_ACC_INVALID_MESSAGE, payload:''})
    dispatch({type:ACTION.CHANGE_PSWD_INVALID_MESSAGE,payload:''})

    const data = {email, password};
    await axiosInstance.post('/api/auth/sign-in', data, {
      withCredentials:true,
      headers: { crossDomain: true, 'Content-Type': 'application/json' },
  })
    .then((response: AxiosResponse<TResponse>)=>{
      router.push('/')
      console.log(response)
    }).catch((err)=>{
      err.response?.data.map((obj:{message:'string', success:boolean, field?:string})=>{
        if(obj.field == 'password'){
          dispatch({type:ACTION.CHANGE_PSWD_INVALID_MESSAGE,payload:obj.message})
        }
        else if (obj.field == 'email') {
          dispatch({type:ACTION.CHANGE_ACC_INVALID_MESSAGE, payload:obj.message})
        }
        else {
          dispatch({type:ACTION.CHANGE_ACC_INVALID_MESSAGE, payload:obj.message})
          dispatch({type:ACTION.CHANGE_PSWD_INVALID_MESSAGE,payload:obj.message})
        }
      })
    })
    dispatch({type:ACTION.TOGGLE_SPINNER});
    setEmail(''); setPassword(''); 
  }
  return {handleSignInFormSubmit,email, setEmail, state, password, setPassword}
}
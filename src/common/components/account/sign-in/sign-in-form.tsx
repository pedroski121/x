import React,{useState, useReducer} from 'react';
import Link from 'next/link';
import  { useRouter } from 'next/router';
import {AxiosResponse} from 'axios';
import accountStyles from '@components/account/account.module.css';
import { ToHomeIcon } from '@components/HomeIcon';
import { dancingScript} from '@utils/font';
import { axiosInstance } from '@utils/axiosInstance';
import styles from './sign-in-form.module.css';
import { ACTION_KIND } from '../form-enums';
import { formReducer } from '../form-reducer';
import { initialState } from '../initialStates';

const SignInForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const router = useRouter();
  async function handleSignInFormSumbit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({type:ACTION_KIND.TOGGLE_SPINNER})
    dispatch({type:ACTION_KIND.CHANGE_ACC_INVALID_MESSAGE, payload:''})
    dispatch({type:ACTION_KIND.CHANGE_PSWD_INVALID_MESSAGE,payload:''})

    const data = {email, password};

    await axiosInstance.post('api/auth/sign-in', data)
    .then((response: AxiosResponse)=>{
      router.push('/')
    }).catch((err)=>{
      err.response?.data.map((obj:{message:'string', success:boolean, field?:string})=>{
        if(obj.field == 'password'){
          dispatch({type:ACTION_KIND.CHANGE_PSWD_INVALID_MESSAGE,payload:obj.message})
        }
        else if (obj.field == 'email') {
          dispatch({type:ACTION_KIND.CHANGE_ACC_INVALID_MESSAGE, payload:obj.message})
        }
        else {
          dispatch({type:ACTION_KIND.CHANGE_ACC_INVALID_MESSAGE, payload:obj.message})
          dispatch({type:ACTION_KIND.CHANGE_PSWD_INVALID_MESSAGE,payload:obj.message})
        }
      })
    })
    dispatch({type:ACTION_KIND.TOGGLE_SPINNER});
    setEmail(''); setPassword(''); 
  }
    return (
    <div className={`d-flex flex-column justify-content-between ${accountStyles.side}`}>
   <ToHomeIcon/>
      <div className={`p-3 ${styles.sign_in_form} align-self-center`}>
         <div className={`text-center ${dancingScript.className}`}>
      <h1>Welcome back</h1>
      <p className='text-secondary'>Fashion in a way you never imagined</p>
         </div>
         <form data-testid="sign-in-form" onSubmit={handleSignInFormSumbit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} 
              className={`form-control ${state.accountInvalidMessage.length==0 ? '' :' is-invalid'} rounded-0 shadow-none ${styles.input_type}`} id="email" aria-describedby="emailHelp"/>
                  <div  className="invalid-feedback">
                    {state.accountInvalidMessage}
                 </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-bold">Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              className={`form-control rounded-0 ${state.passwordInvalidMessage.length == 0 ? '' :' is-invalid'}   shadow-none ${styles.input_type}`} id="password"/>
                    <div className="invalid-feedback">
                      {state.passwordInvalidMessage}
                    </div>
            </div>
            <div className='row p-2 d-flex align-content-between'>
            <div className="mb-3 form-check col-6">
              <input type="checkbox" className={`form-check-input ${styles.custom_checkbox}  shadow-none border-0`} id="check"/>
              <label className="form-check-label" htmlFor="check">Remember Me</label>

            </div>
            <div className='col-6'>
              <Link href="#" legacyBehavior>
                <a className='link-dark pe-auto'>Forgot Password</a>
              </Link>
            </div>
            </div>
            <div className='d-grid gap-2'>
                <button type="submit" role="signIn" className="btn btn-dark rounded-0">Sign In  &nbsp;
                <span className={state.spinner ? "spinner-border spinner-border-sm" : "invisible"} role="status" aria-hidden="true"> </span>
                </button>
                <button type="submit" className="btn btn-light rounded-0 border border-secondary">Sign In with Google</button>
            </div>
         </form>
      </div>
      <p className='align-self-center'><span className='text-secondary'>{`Don't have an account? `}</span> 
      <Link href="/account/sign-up" legacyBehavior>
        <a className='link-dark pe-auto'>Sign Up</a>
      </Link>
      </p>
    </div>
 )
}

export { SignInForm }
import React,{useState, useReducer} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {AxiosResponse} from 'axios';
import styles from './sign-up-form.module.css';
import { axiosInstance } from '@utils/axiosInstance';
import accountStyles from '@components/account/account.module.css';
import { ToHomeIcon } from '@components/HomeIcon';
import { dancingScript} from '@utils/font';
const SignUpForm = () => {

  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [spinner, setSpinner] = useState<boolean>(false);

  const [accountInValidityMessage, setAccountInValidityMessage] = useState<string>('');
  const [passwordInValidityMessage, setPasswordInvalidityMessage] = useState<string>('');
  const [fullNameInValidityMessage, setFullNameInValidityMessage] = useState<string>('');
  const router = useRouter();
  
  async function handleSignUpFormSumbit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSpinner(true); 
    setAccountInValidityMessage(''); setPasswordInvalidityMessage(''); setFullNameInValidityMessage('')
    const data = {email, fullName, password};

    await axiosInstance.post('https://x-backend-service.onrender.com/api/auth/sign-up', data)
    .then((response: AxiosResponse)=>{
      router.push('/account/sign-in')
    })
    .catch((err)=>{
      err.response?.data.map((obj:{message:'string', success:boolean, field?:string})=>{
        if(obj.field == 'password'){
          setPasswordInvalidityMessage(obj.message)
        }
        else if (obj.field == 'email') {
          setAccountInValidityMessage(obj.message)
        }
        else if(obj.field == 'fullName') {
          setFullNameInValidityMessage(obj.message)
        }
        else {
          setPasswordInvalidityMessage(obj.message); setAccountInValidityMessage(obj.message); setFullName(obj.message);
        }
      })
    });
    setSpinner(false); setEmail(''); setPassword(''); setFullName('');
  }
    return (
    <div className={`d-flex flex-column justify-content-between ${accountStyles.side}`}>
      <ToHomeIcon/>
      <div className={`p-1 ${styles.sign_up_form} align-self-center`}>
         <div className={`text-center ${dancingScript.className}`}>
      <h1>Welcome</h1>
      <p className='text-secondary'>Elevate your style with our latest fashion finds.</p>
         </div>
         <form data-testid="sign-up-form" onSubmit={handleSignUpFormSumbit} noValidate>
            <div className="mb-1">
              <label htmlFor="fullName" className="form-label fw-bold">Full Name</label>
              <input type="text" value={fullName} onChange={e=>setFullName(e.target.value)} 
              className={`form-control ${fullNameInValidityMessage.length == 0 ? '' :' is-invalid'}  rounded-0 shadow-none ${styles.input_type}`} id="fullName" aria-describedby="what full Name"/>
                               <div  className="invalid-feedback">
                    {fullNameInValidityMessage}
                    </div>
            </div>

            <div className="mb-1">
              <label htmlFor="email" className="form-label fw-bold">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} 
              className={`form-control ${accountInValidityMessage.length==0 ? '' :' is-invalid'} rounded-0 shadow-none ${styles.input_type}`} id="email" aria-describedby="emailHelp"/>
                    <div  className="invalid-feedback">
                    {accountInValidityMessage}
                    </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-bold">Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              className={`form-control rounded-0 ${passwordInValidityMessage.length == 0 ? '' :' is-invalid'} shadow-none ${styles.input_type}`} id="password"/>
               <div  className="invalid-feedback">
                    {passwordInValidityMessage}
                    </div>
            </div>
            <div className='d-grid gap-1'>
                <button type="submit" role="signUp" className="btn btn-dark rounded-0">Sign Up  &nbsp;
                <span className={spinner ? "spinner-border spinner-border-sm" : "invisible"} role="status" aria-hidden="true"> </span>
                </button>
                <button type="submit" className="btn btn-light rounded-0 border border-secondary">Sign Up with Google</button>
            </div>
         </form>
      </div>
      <p className='align-self-center'><span className='text-secondary'>Have an account? </span> 
      <Link href="/account/sign-in" legacyBehavior>
          <a className='link-dark pe-auto'>Sign In</a>
      </Link>
      </p>
    </div>
 )
}

export { SignUpForm }
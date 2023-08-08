import Link from 'next/link';
import accountStyles from '@components/account/account.module.css';
import { dancingScript} from '@utils/font';
import styles from './sign-in-form.module.css';
import { useSignIn } from '@hooks/account/auth/useSignIn';


const SignInForm = () => {
  const {handleSignInFormSubmit, email, setEmail, state, password, setPassword} = useSignIn()


    return (
    <div className={`d-flex flex-column justify-content-center ${accountStyles.side}`}>
       <div className={`p-3 ${styles.sign_in_form} align-self-center`}>
         <div className={`text-center ${dancingScript.className}`}>
      <h1>Welcome</h1>
      <p className='text-secondary'>Stay ahead of the fashion curve with our latest collection</p>
         </div>
         <form data-testid="sign-in-form" onSubmit={handleSignInFormSubmit} noValidate>
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
              className={`form-control rounded-0 ${state.passwordInvalidMessage.length == 0 ? '' :' is-invalid'} shadow-none ${styles.input_type}`} id="password"/>
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
            </div>
         </form>
      </div>
      <p className='align-self-center'><span className='text-secondary'>Don't have an account? </span> 
      <Link href="/account/sign-up" className="link-dark pe-auto">
        Sign Up
      </Link>
      </p>
    </div>
 )
}

export { SignInForm }
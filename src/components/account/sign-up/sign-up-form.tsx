import Link from 'next/link';
import styles from './sign-up-form.module.css';
import accountStyles from '@components/account/account.module.css';
import { dancingScript} from '@utils/font';
import { useSignUp } from '@hooks/useSignUp';
const SignUpForm = () => {
  const { handleSignUpFormSumbit,fullName,setFullName,fullNameInValidityMessage,email,accountInValidityMessage,spinner, password,passwordInValidityMessage, setPassword,setEmail} = useSignUp()
  
    return (
    <div className={`d-flex flex-column justify-content-center ${accountStyles.side}`}>
      <div className={`p-1 ${styles.sign_up_form} align-self-center`}>
         <div className={`text-center ${dancingScript.className}`}>
      <h1>Welcome</h1>
      <p className={`text-secondary fs-6 ${dancingScript.className}`}>Elevate your style with our latest fashion finds.</p>
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
            </div>
         </form>
      </div>
      <p className='align-self-center mt-3'><span className='text-secondary'>Have an account? </span> 
      <Link href="/account/sign-in" className="link-dark pe-auto">   Sign In   </Link>
      </p>

    </div>
 )
}

export { SignUpForm }
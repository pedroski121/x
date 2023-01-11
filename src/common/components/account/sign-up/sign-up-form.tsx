import accountStyles from '@components/account/account.module.css';
import { dancingScript} from '@utils/font';
import styles from './sign-up-form.module.css';

const SignUpForm = () => {
    return (
    <div className={`d-flex flex-column justify-content-between ${accountStyles.side}`}>
    <div className="pt-3 ps-5 fw-bold">X</div>
      <div className={`p-3 ${styles.sign_up_form} align-self-center`}>
         <div className={`text-center ${dancingScript.className}`}>
      <h1>Welcome to X</h1>
      <p className='text-secondary'>Your No.1 stop for fashion</p>
         </div>
         <form data-testid="sign-up-form">
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">Full Name</label>
              <input type="text" className={`form-control rounded-0 shadow-none ${styles.input_type}`} id="name" aria-describedby="whatName"/>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">Email</label>
              <input type="email" className={`form-control rounded-0 shadow-none ${styles.input_type}`} id="email" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-bold">Password</label>
              <input type="password" className={`form-control rounded-0 shadow-none ${styles.input_type}`} id="password"/>
            </div>
            <div className='row p-2 d-flex align-content-between'>
            <div className="mb-3 form-check col-6">
              <input type="checkbox" className={`form-check-input ${styles.custom_checkbox} shadow-none border-0`} id="check"/>
              <label className="form-check-label" htmlFor="check">Remember Me</label>
            </div>
            <div className='col-6'>
                <a href="#" className='link-dark pe-auto'>Forgot Password</a>
            </div>
            </div>
            <div className='d-grid gap-2'>
                <button type="submit" role="signUp" className="btn btn-dark rounded-0">Sign Up</button>
                <button type="submit" className="btn btn-light rounded-0 border border-secondary">Sign Up with Google</button>
            </div>
         </form>
      </div>
      <p className='align-self-center'><span className='text-secondary'>Have an account? </span> 
        <a href="#" className='link-dark pe-auto'>Sign In</a>
      </p>
    </div>
 )
}

export { SignUpForm }
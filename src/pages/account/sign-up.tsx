import {SignUpForm} from '@components/account/sign-up/sign-up-form';
import {RightSide} from '@components/account/right-side';
import styles from '@components/account/account.module.css'

const SignUp = () => {
    return (
        <>
        <div className={`container-fluid p-0 ${styles.side}`}>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <SignUpForm/>
                </div>
                <div className='col-6 d-none d-md-block'>
                    <RightSide/>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp
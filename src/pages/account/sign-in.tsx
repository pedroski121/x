import { SignInForm } from '@components/account/sign-in/sign-in-form';
import { RightSide } from '@components/account/right-side';
import styles from '@components/account/account.module.css'
import { Footer } from '@components/general/footer';
const SignUp = () => {
    return (
        <>
            <div className={`container-fluid p-0 ${styles.side}`}>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <SignInForm />
                    </div>
                    <div className='col-6 d-none d-md-block'>
                        <RightSide />
                    </div>
                </div>
            </div>
            <div className='d-block d-md-none'>
                <Footer />
            </div>
        </>
    )
}

export default SignUp
import Image from 'next/image';
import styles from './sign-up/sign-up-form.module.css';
import { useRouter } from 'next/router';



const RightSide =() =>{
    const router = useRouter();
   return (
        <>
            <div className={styles.bgWrap}>
      <Image
        alt="travel"
        src={router.pathname === '/account/sign-up' ? '/girl-on-hat.jpg' : '/face.jpg'}
        fill
      />
</div>
        </>
    )
}
export {RightSide}
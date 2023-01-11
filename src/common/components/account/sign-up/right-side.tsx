import Image from 'next/image';
import styles from './sign-up-form.module.css';


const RightSide =() =>{
    return (
        <>
            <div className={styles.bgWrap}>
      <Image
        alt="travel"
        src="/girl-on-hat.jpg"
        fill
      />
</div>
        </>
    )
}
export {RightSide}
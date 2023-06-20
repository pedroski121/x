import HomeCss from '../Home.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const Extras: FC = () => {
    return <>
        <div className="row mt-3 mt-3 mt-md-5 m-2 justify-content-around">


            <section className={`col-5 px-2 border rounded-3 ${HomeCss.vertical_cover}`}>
                <Link href={'/test'}>
                    <Image src='/cover1.jpg' alt='/' className="rounded-3" fill style={{ objectFit: "cover" }} />
                </Link>
            </section>
            <section className={` col-5  border rounded-3 ${HomeCss.vertical_cover}`}>
                <Link href={'/test'}>
                    <Image src='/men/senator.jpg' alt='/' fill className='rounded-3' style={{ objectFit: "cover" }} />
                </Link>
            </section>

        </div>
    </>
}
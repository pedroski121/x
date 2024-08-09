import HomeCss from '../Home.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const Extras: FC = () => {
    return <>
        <div className='container bg-dark'>
            <div className="row justify-content-around mt-1 mt-md-0 " >

                <section className={`col-12 col-md-4 rounded-bottom  ${HomeCss.vertical_cover}`}>
                    <Link href={'/test'}>
                        <Image src='/red-dress.jpg' alt='/' className=" rounded-bottom " fill style={{ objectFit: "cover" }} />
                    </Link>
                </section>
                <section className={` col-12 col-md-4 border rounded-1 ${HomeCss.vertical_cover}`}>
                    <Link href={'/test'}>
                        <Image src='/men/senator.jpg' alt='/' fill className='rounded-1' style={{ objectFit: "cover" }} />
                    </Link>
                </section>
                <section className={` col-12 col-md-4 border rounded-1 ${HomeCss.vertical_cover}`}>
                    <Link href={'/test'}>
                        <Image src='/men/senator.jpg' alt='/' fill className='rounded-1' style={{ objectFit: "cover" }} />
                    </Link>
                </section>

            </div>
        </div>
    </>
}
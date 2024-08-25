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
                        <Image src='/traditional.jpg' alt='/' className=" rounded-bottom " fill style={{ objectFit: "cover" }} />

                    </Link>
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        color: 'white',
                        padding: '10px',
                        textAlign: 'start',
                        fontSize: '18px'
                    }}>
                        Shop Traditional
                    </div>
                </section>
                <section className={` col-12 col-md-4 border rounded-1 ${HomeCss.vertical_cover}`}>
                    <Link href={'/test'}>
                        <Image src='/corporate.jpg' alt='/' fill className='rounded-1' style={{ objectFit: "cover" }} />
                    </Link>
                    Go Corporate
                </section>
                <section className={` col-12 col-md-4 border rounded-1 ${HomeCss.vertical_cover}`}>
                    <Link href={'/test'}>
                        <Image src='/okirika.jpg' alt='/' fill className='rounded-1' style={{ objectFit: "cover" }} />
                    </Link>
                    Shop within budget
                </section>

            </div>
        </div>
    </>
}
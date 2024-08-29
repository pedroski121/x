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
                        <Image src='/jewelry.jpg' alt='/' className=" rounded-bottom " fill style={{ objectFit: "cover" }} />

                    </Link>
                    <div className={`${HomeCss.vertical_cover_bottom_text} p-2 fw-bold`}>
                        JEWELRIES
                    </div>
                </section>
                <section className={` col-12 col-md-4 border rounded-1 ${HomeCss.vertical_cover}`}>
                    <Link href={'/test'}>
                        <Image src='/corporate.jpg' alt='/' fill className='rounded-1' style={{ objectFit: "cover" }} />
                    </Link>
                    <div className={`${HomeCss.vertical_cover_bottom_text} p-2 fw-bold`}>
                        OFFICIAL BRANDS
                    </div>
                </section>
                <section className={` col-12 col-md-4 border rounded-1 ${HomeCss.vertical_cover}`}>
                    <Link href={'/test'}>
                        <Image src='/okirika.jpg' alt='/' fill className='rounded-1' style={{ objectFit: "cover" }} />
                    </Link>
                    <div className={`${HomeCss.vertical_cover_bottom_text} p-2 fw-bold`}>
                        OKIRIKA
                    </div>

                </section>

            </div >
        </div >
    </>
}
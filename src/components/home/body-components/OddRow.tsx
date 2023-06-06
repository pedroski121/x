// This is the 1st row on the page of such design and if it is successively rendered on odd positions of similar row design/structure

import Image from "next/image"
import HomeCss from '../Home.module.css'
import { FC } from "react"
import Link from "next/link"
export const OddRow: FC = () => {
    return <div className="row">
        <div className="col-md-6">
            <section>
                <div className={`p-5 bg-light border rounded-5 ${HomeCss.horizontal_cover}`}>
                    <Link href={'/'}>

                        <Image src='/okirika.jpg' alt='/' fill className={`rounded-5 ${HomeCss.image}`} style={{ objectFit: "cover" }} />
                    </Link>

                </div>

                <div className={`p-5 bg-light border mt-3 rounded-5 ${HomeCss.horizontal_cover}`}>
                    <Link href={'/'}>

                        <Image src='/suit.jpg' alt='/' fill className={`rounded-5 `} style={{ objectFit: "cover" }} />                </Link>

                </div>
            </section>
        </div>
        <div className="col-md-6 d-flex flex-row mt-3 mt-md-0 align-items-md-center">

            <div className={`p-5 bg-light border me-3 rounded-5 ${HomeCss.vertical_cover}`}>
                <Link href={'/test'}>
                    <Image src='/cover1.jpg' alt='/' fill className={`rounded-5 `} style={{ objectFit: "cover" }} />

                </Link>
            </div>
            <div className={`p-5 bg-light border  rounded-5 ${HomeCss.vertical_cover}`}>
                <Image src='/face.jpg' alt='/' fill className={`rounded-5 `} style={{ objectFit: "cover" }} />
            </div>
        </div>
    </div>
}
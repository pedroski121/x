// This is the 2nd row on the page of such design and if it is successively rendered on odd positions of similar row design/structure

import Image from "next/image"
import HomeCss from '../Home.module.css'
import Link from "next/link"

export const EvenRow = () => {
    return <div className='row'>

        <div className="col-md-6 d-flex flex-row mt-3 align-items-md-center order-1 order-md-0">

            <div className={`p-5 bg-light border me-3 rounded-5 ${HomeCss.vertical_cover}`}>
                <Link href={'/#'}> <Image src='/men/senator.jpg' alt='/' fill className={`rounded-5 `} style={{ objectFit: "cover" }} /></Link>

            </div>
            <div className={`p-5 bg-light border  rounded-5 ${HomeCss.vertical_cover}`}>
                <Image src='/women/african-women.jpg' alt='/' fill className={`rounded-5 `} style={{ objectFit: "cover" }} />

            </div>

        </div>
        <div className="col-md-6 mt-3 order-0 order-md-1">
            <section>
                <div className={`p-5 bg-light border rounded-5 ${HomeCss.horizontal_cover}`}>
                    <Image src='/women/perfumes.jpg' alt='/' fill className={`rounded-5 `} style={{ objectFit: "cover" }} />

                </div>
                <div className={`p-5 bg-light border mt-3 rounded-5 ${HomeCss.horizontal_cover}`}>
                    <Image src='/women/gelle.jpg' alt='/' fill className={`rounded-5 `} style={{ objectFit: "cover" }} />

                </div>
            </section>

        </div>
    </div>
}
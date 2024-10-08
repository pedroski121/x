import { FC } from "react"
import { offers } from "@lib/constants"
import { Typewriter } from 'react-simple-typewriter'
import Link from "next/dist/client/link"
const ExploreNav: FC = () => {

    return <>
        <div className="row mt-3 mx-0 mx-md-3 my-2">
            <section className="col-12 col-md-6 order-2 order-md-1 col-md-3 ">
                <div className={`d-flex fw-bold justify-content-center justify-content-md-start`}>
                    <span className={`bi bi-lightning-charge-fill fs-4 mt-1 mt-md-0`}>
                        Find<span className="text-secondary border border-dark">&</span>Buy The Best <span className="text-light border border-dark bg-secondary">
                            <Typewriter words={offers} typeSpeed={70} loop={false} cursor delaySpeed={1000} /></span>
                    </span>
                </div>


            </section>
            <section className="col-12 col-md-6 order-1 order-md-2">
                <div className={`d-flex justify-content-center justify-content-md-end `}>
                    <div className="btn-group me-3" role="group">
                        <button type="button" className="btn btn-outline-dark fw-bold active">All</button>
                        <Link href='/categories/women'>
                            <button type="button" className="btn btn-outline-dark fw-bold">Women</button>
                        </Link>
                        <Link href='/categories/men'>
                            <button type="button" className="btn btn-outline-dark fw-bold">Men</button>
                        </Link>

                    </div>
                    {/* <button type="button" className="btn btn-outline-dark fw-bold me-1">Filter</button> */}
                    {/* <button className="btn btn-outline-dark fw-bold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"><span> Explore</span></button> */}
                </div>
            </section>
        </div>
    </>
}

export { ExploreNav }
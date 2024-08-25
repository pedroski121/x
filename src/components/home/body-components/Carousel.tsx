// This is the 1st row on the page of such design and if it is successively rendered on odd positions of similar row design/structure

import Image from "next/image"
import HomeCss from '../Home.module.css'
import { FC } from "react"
import Link from "next/link"

export const Carousel: FC = () => {
    return (
        <><div className="row justify-content-center">
            <div id="homePageIndicators" className="carousel slide col-12 col-md-10 p-0 rounded-3" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#homePageIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#homePageIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#homePageIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className={`carousel-inner rounded-3 `}>
                    <div className={`carousel-item active `}>
                        <Link href={'#'}>
                            <div className={`${HomeCss.carousel_image} `}>

                                <Image src="/icons/SlucentLogoVariation-02.png" alt="Slide 2" fill />

                            </div>
                        </Link>
                    </div>
                    <div className={`carousel-item`}>
                        <div className={`${HomeCss.carousel_image}`}>
                            <Link href={'#'}>
                                <Image src="/okirika.jpg" alt="Slide 2" fill />

                            </Link>
                        </div>
                    </div>
                    <div className={`carousel-item`}>
                        <div className={`${HomeCss.carousel_image}`}>
                            <Link href={"#"}>
                                <Image src="/suit.jpg" alt="Slide 2" fill />
                                <div className="carousel-caption  text-start">
                                    <h2>Inspired by the Best</h2>
                                    <p><u>Shop Men</u></p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#homePageIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#homePageIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
        </>
    )

}
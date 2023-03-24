import { BreadCrumbNav } from "@components/category"
import { Footer } from "@components/footer"
import { ProductCarousal } from "./ProductCarousel"

const RightSide = () => {
    return (
        <>
            <section className="col-12 col-md-6 text-dark p-0 d-flex flex-column justify-content-between">

                <div className='p-3'>
                    <BreadCrumbNav pages={['product', 'leather shoe']} />
                </div>
                <ProductCarousal />
                <div className='d-none d-md-block'>
                    <Footer />
                </div>
            </section>

        </>
    )
}

export { RightSide }
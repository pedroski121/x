import { BreadCrumbNav } from "@components/BreadCrumbNav"
import { Footer } from "@components/footer"
import { ProductCarousal } from "./ProductCarousel"
import { TRightSide } from "./types"


const RightSide = (props: TRightSide) => {
    // get the array of paths but without the nameURLId attached and create a new one
    let newActivePaths = props.activePaths.slice(0, props.activePaths.length - 1)

    return (
        <>
            <section className="col-12 col-md-6 text-dark p-0 d-flex flex-column justify-content-between">
                <div className='p-3'>
                    <BreadCrumbNav pages={[...newActivePaths, props.name]} />
                </div>
                <ProductCarousal imgURLs={props.imgURLs} />
                <div className='d-none d-md-block'>
                    <Footer />
                </div>
            </section>

        </>
    )
}

export { RightSide }
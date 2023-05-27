import { useContext } from "react"
import { ProductContext } from '@contexts/ProductContext';
import { IProductDetailsRightSide } from "@lib/types/product"
import { BreadCrumbNav } from "@general-components/BreadCrumbNav"
import { Footer } from "@general-components/footer"
import { ProductCarousal } from "./ProductCarousel"



const RightSide = () => {
    const data = useContext(ProductContext);
    const { name, imgURLs, activePaths }: IProductDetailsRightSide = data.data

    // get the array of paths but without the name+URLId attached and create a new one
    let newActivePaths = activePaths.slice(0, activePaths.length - 1)
    return (
        <>
            <section className="col-12 col-md-6 text-dark p-0 d-flex flex-column justify-content-between">
                <div className='p-3'>
                    <BreadCrumbNav pages={[...newActivePaths, name]} />
                </div>
                <ProductCarousal imgURLs={imgURLs} />
                <div className='d-none d-md-block'>
                    <Footer />
                </div>
            </section>
        </>
    )
}

export { RightSide }
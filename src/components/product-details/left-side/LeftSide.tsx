import ProductDetailsCss from '../ProductDetails.module.css';
import { SpecAccordion, ReviewsAccordion, Headline, BagAndFavoriteButton } from './index';

const LeftSide = () => {
    return (
        <>
            <section className={`col-12 col-md-6 text-dark p-0 d-flex flex-column justify-content-between ${ProductDetailsCss.content_details}`}>
                <div className='p-3 p-md-5'>
                    <Headline />
                    <div className={`accordion accordion-flush mt-5`} id="accordionExample">
                        <SpecAccordion />
                        <ReviewsAccordion />
                    </div>
                </div>
                <BagAndFavoriteButton />
            </section>
        </>
    )
}

export { LeftSide }
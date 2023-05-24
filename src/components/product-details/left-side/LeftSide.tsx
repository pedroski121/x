import ProductDetailsCss from '../ProductDetails.module.css';
import { SpecAccordion, ReviewsAccordion, Headline, BagAndFavoriteButton } from './index';

interface IProductDetailsLeftSide {
    name: string,
    price: number,
    specification: string,
    rating: number,
    reviews?: { userID: string; review: string; date: string; }[]
}

const LeftSide = (props: IProductDetailsLeftSide) => {
    return (
        <>
            <section className={`col-12 col-md-6 text-dark p-0 d-flex flex-column justify-content-between ${ProductDetailsCss.content_details}`}>
                <div className='p-3 p-md-5'>
                    <Headline name={props.name} price={props.price} rating={props.rating} />
                    <div className={`accordion accordion-flush mt-5`} id="accordionExample">
                        <SpecAccordion specification={props.specification} />
                        <ReviewsAccordion reviews={props.reviews} />
                    </div>
                </div>
                <BagAndFavoriteButton />
            </section>
        </>
    )
}

export { LeftSide }
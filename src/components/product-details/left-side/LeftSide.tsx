import ProductDetailsCss from '../ProductDetails.module.css';
import { SpecAccordion, ReviewsAccordion, Headline, BagAndFavoriteButton } from './index';
import { ProductContext } from '@contexts/ProductContext';
import { useContext } from 'react';
import { IProductDetailsLeftSide } from '@lib/types/product';


const LeftSide = () => {
    const data = useContext(ProductContext);
    const { name, price, specification, rating, reviews }: IProductDetailsLeftSide = data.data

    return (
        <>
            <section className={`col-12 col-md-6 text-dark p-0 d-flex flex-column justify-content-between ${ProductDetailsCss.content_details}`}>
                <div className='p-3 p-md-5'>
                    <Headline name={name} price={price} rating={rating} />
                    <div className={`accordion accordion-flush mt-5`} id="accordionExample">
                        <SpecAccordion specification={specification} />
                        <ReviewsAccordion reviews={reviews} />
                    </div>
                </div>
                <BagAndFavoriteButton />
            </section>
        </>
    )
}

export { LeftSide }
import { FC } from 'react';
import ProductDetailsCss from '../ProductDetails.module.css';
import { starArray } from '@utils/star-array';

interface IHeadlineProps {
    name: string,
    price: number,
    rating: number,
}

const Headline: FC<IHeadlineProps> = (props) => {

    return (
        <>
            <h1 className={`fw-bolder ${ProductDetailsCss.increase_heading_fontsize}`}>{props.name}</h1>
            <div className='d-flex justify-content-between'>
                <p className='display-6'>₦{props.price}</p>

                <span>
                    {starArray(props.rating).map((star) => star)}
                </span>
            </div>
        </>
    )
}

export { Headline }
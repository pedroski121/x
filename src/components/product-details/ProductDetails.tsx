import { LeftSide } from './left-side';
import { RightSide } from './right-side';
import { IProductsData } from '@lib/types/products-data-type';
import { NextPage } from 'next';

const ProductDetails: NextPage<IProductsData> = ({ name, price, rating, specification, reviews, imgURLs, imgAltText, activePaths }) => {
    if (!imgAltText) {
        imgAltText = 'Image goes here'
    }
    if (!activePaths) {
        activePaths = ['']
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row vh-100 flex-sm-row-reverse">
                    <RightSide imgURLs={imgURLs} imgAltText={imgAltText} activePaths={activePaths} name={name} />
                    <LeftSide name={name} price={price} rating={rating} specification={specification} reviews={reviews} />
                </div>
            </div>



        </>
    )
}
export { ProductDetails }

import ProductDetailsCss from '../ProductDetails.module.css';
import { BagModal } from '@components/general/bag-modal';
import { ProductContext } from '@contexts/ProductContext';
import { useContext } from 'react';

const BagAndFavoriteButton = () => {
    const { name, price, imgURLs, _id } = useContext(ProductContext).data
    return (
        <>
            <div className={`d-grid p-0 ${ProductDetailsCss.button_height_increase}`}>
                <button className="btn btn-dark rounded-0" data-bs-toggle="modal" data-bs-target={`#bagModal${_id}`} type="button">Add to Bag</button>
                <button className="btn btn-secondary rounded-0" type="button">Favorite</button>
                {/* <BagModal name={name} price={price} imgURLs={imgURLs} _id={_id} /> */}
            </div>
        </>
    )
}

export { BagAndFavoriteButton }
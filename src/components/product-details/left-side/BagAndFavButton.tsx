import ProductDetailsCss from '../ProductDetails.module.css';
import { BagModal } from '@components/general/bag-modal';
import { ProductContext } from '@contexts/ProductContext';
import { useContext } from 'react';

// import { useCardState } from '@hooks/sub-category/useCardState';

const BagAndFavoriteButton = () => {
    const productsData = useContext(ProductContext).data
    // const { itemInBag, modalDetails } = useCardState(productsData);

    return (
        <>
            <div className={`d-grid p-0 ${ProductDetailsCss.button_height_increase}`}>
                {/* <button className="btn btn-dark rounded-0" data-bs-toggle="modal" data-bs-target={`#bagModal${productsData._id}`} type="button">{itemInBag ? 'Remove from' : 'Add to'} Bag</button> */}
                <button className="btn btn-secondary rounded-0" type="button">Favorite</button>
                {/* <BagModal {...modalDetails} /> */}
            </div>
        </>
    )
}

export { BagAndFavoriteButton }
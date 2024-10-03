import ProductDetailsCss from '../ProductDetails.module.css';
import { BagModal } from '@components/general/bag-modal';
import { ProductContext } from '@contexts/ProductContext';
import { useContext } from 'react';
import { useBag } from '@hooks/bag/useBag';
import { useWishList } from '@hooks/wishlist/useWishList';
import { CurrentUserContext } from '@contexts/CurrentUserContext';


// import { useCardState } from '@hooks/sub-category/useCardState';
import { useState } from 'react';
import { BorderSpinner } from '@components/general/spinners';
const BagAndFavoriteButton = () => {
    const productsData = useContext(ProductContext).data
    const { bagItems } = useBag()
    const [addingItemToBag, setAddingItemToBag] = useState<string>('')
    const { userState } = useContext(CurrentUserContext)

    let { data: wishListData, changeWish, changingWish } = useWishList(userState._id)


    const addItemToBag = (_id: string): void => {
        setAddingItemToBag(_id)
    }


    const itemInBag = bagItems?.filter(item => item.productID === productsData._id)
    return (
        <>
            <div className={`d-grid p-0 ${ProductDetailsCss.button_height_increase}`}>
                <button className="btn btn-dark fw-bold rounded-0 d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target={`#bagModal${productsData._id}`} type="button">
                    <span className='pe-2'> {itemInBag && itemInBag.length !== 0 ? 'Remove from' : 'Add to'} Bag</span> {addingItemToBag !== productsData._id ? '' : <BorderSpinner white={true} size={false} />} </button>
                {
                    changingWish !== productsData._id && wishListData ?
                        <button onClick={() => changeWish(productsData._id, wishListData)}
                            className="btn btn-secondary rounded-0 fw-bold" type="button">
                            {wishListData.map(wish => wish.productID).includes(productsData._id) ? 'Add to' : 'Remove from'} Wishlist
                        </button>
                        : <BorderSpinner size={false} />
                }

                <BagModal itemInBag={itemInBag} product={productsData} addItemToBag={addItemToBag} />
            </div>
        </>
    )
}

export { BagAndFavoriteButton }
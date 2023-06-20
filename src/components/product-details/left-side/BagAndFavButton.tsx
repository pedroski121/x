import ProductDetailsCss from '../ProductDetails.module.css';
import { BagModal } from '@components/general/bag-modal';
import { ProductContext } from '@contexts/ProductContext';
import { useContext, useState, useEffect } from 'react';
import { EAvailableBagAction, IModalDetails, BagDefaultValues } from "@lib/types/bag";
import { BagContext } from "@contexts/BagContext";


const BagAndFavoriteButton = () => {
    const { name, price, imgURLs, _id } = useContext(ProductContext).data

    const [itemInBag, setItemInBag] = useState<boolean>(false);
    const [modalDetails, setModalDetails] = useState<IModalDetails>({ name, _id, price, imgURLs });

    const { dispatch, bagState } = useContext(BagContext)

    const handleToggle = (bag: string) => {
        if (bag === 'bag') {
            const inBagorNot = bagState?.some(bag => bag._id === _id)
            setItemInBag(inBagorNot)
            setModalDetails({ ...modalDetails, inBag: inBagorNot })
        }
    }
    useEffect(() => {
        handleToggle('bag')
    }, [bagState])

    useEffect(() => {
        dispatch ? dispatch({ type: EAvailableBagAction.IN_BAG }) : BagDefaultValues
    }, [])

    return (
        <>
            <div className={`d-grid p-0 ${ProductDetailsCss.button_height_increase}`}>
                <button className="btn btn-dark rounded-0" data-bs-toggle="modal" data-bs-target={`#bagModal${_id}`} type="button">{itemInBag ? 'Remove from' : 'Add to'} Bag</button>
                <button className="btn btn-secondary rounded-0" type="button">Favorite</button>
                <BagModal {...modalDetails} />
            </div>
        </>
    )
}

export { BagAndFavoriteButton }
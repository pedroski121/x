import { BagContext } from "@contexts/BagContext"
import { IModalDetails } from "@lib/types/bag"
import Image from "next/legacy/image"
import { FC, ReactElement, useContext, useState } from "react"
import { EAvailableBagAction } from "@lib/types/bag/EAvailableBagAction"
import { BorderSpinner } from "../spinners"
import BagModalCss from './BagModal.module.css'

const BagModal: FC<IModalDetails> = ({ name, _id, imgURLs, price, inBag }) => {
    const [isAdding, setIsAdding] = useState<boolean>(false);
    const [added, setAdded] = useState<boolean>(false);
    const { dispatch } = useContext(BagContext);

    function addToBag(): void {
        if (dispatch && inBag !== true) {
            setIsAdding(true);
            setTimeout(() => {
                dispatch({ type: EAvailableBagAction.ADD_TO_BAG, payload: { name, _id, imgURL: imgURLs[0], price } })
                setIsAdding(false)
                setAdded(true)
            }, 150)
        }
    }

    function removeFromBag(): void {
        if (dispatch && inBag === true) {
            setIsAdding(true)
            setTimeout(() => {
                dispatch({ type: EAvailableBagAction.REMOVE_FROM_BAG, payload: { _id } });
                setIsAdding(false)
                setAdded(false)
            }, 150)
        }
    }
    function modalCover(): ReactElement {
        if (isAdding) {
            return <BorderSpinner />
        }
        if (added) {
            return <div className={`${BagModalCss.check} d-flex justify-content-center align-items-center text-dark`}>
                <span className="bi bi-check-circle"></span>

            </div>
        }
        else {
            return <div className={`row modal-body d-flex justify-content-center`}>
                <div className="col-12 text-center">
                    <Image src={imgURLs[0]} alt={`${name} image`} className="rounded-0" height={200} width={200} objectFit="cover" />
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <p className="fs-5 ">{name} - <span className="fw-bold">₦{price}</span></p>
                </div>
            </div>
        }
    }


    return (
        <>
            <div className="modal fade" id={`bagModal${_id}`} aria-labelledby="bagModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" >{inBag ? 'Remove from' : 'Add to'} Bag</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {
                            modalCover()}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light rounded-0 border border-dark" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={inBag ? removeFromBag : addToBag} className="btn btn-dark rounded-0">{inBag ? 'Remove' : 'Add'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { BagModal }
import { IModalDetails } from "@lib/types/bag"
import { FC } from "react"
import BagModalCss from './BagModal.module.css'
import { useBagModal } from "@hooks/bag/useBagModal"
import { ModalBody } from "./ModalBody"
import { ModalHeader } from "./ModalHeader"
import { ModalFooter } from "./ModalFooter"

const BagModal: FC<IModalDetails> = ({ itemInBag, addItemToBag, product }) => {
    const { changeAmountOfItemsToBeBought, amountOfItemsToBeBought, removeFromBag, addToBag, setSize, size } = useBagModal({ itemInBag, addItemToBag, product })
    return (
        <>
            <div className="modal fade" id={`bagModal${product._id}`} aria-labelledby="bagModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content rounded-0">
                        <ModalHeader itemInBag={itemInBag} />

                        <ModalBody itemInBag={itemInBag} size={size} BagModalCss={BagModalCss} product={product}
                            setSize={setSize} amountOfItemsToBeBought={amountOfItemsToBeBought}
                            changeAmountOfItemsToBeBought={changeAmountOfItemsToBeBought} />

                        <ModalFooter itemInBag={itemInBag} removeFromBag={removeFromBag} addToBag={addToBag} />
                    </div>
                </div>
            </div>
        </>
    )
}

export { BagModal }
import { TBag } from "@lib/types/bag"
import { useAuth } from "@clerk/nextjs"
type TModalFooter = {
    itemInBag: TBag[] | undefined;
    removeFromBag: () => Promise<void>;
    addToBag: () => Promise<void>;
    productQuantity: number;
}


export const ModalFooter = ({ itemInBag, removeFromBag, addToBag, productQuantity }: TModalFooter) => {

    const { isSignedIn } = useAuth()
    const bagAction = () => {

        if (isSignedIn && itemInBag && itemInBag.length !== 0) {
            removeFromBag()
        } else {
            addToBag()
        }

    }
    return <div className="modal-footer">
        <button type="button" className="btn btn-light rounded-0 border border-dark" data-bs-dismiss="modal">Close</button>

        <button type="button" onClick={bagAction}
            data-bs-dismiss="modal" className={`btn btn-dark rounded-0 ${productQuantity <= 0 ? 'disabled' : ''}`}>{itemInBag && itemInBag.length !== 0 ? 'Remove' : 'Add'}
        </button>
    </div>
}
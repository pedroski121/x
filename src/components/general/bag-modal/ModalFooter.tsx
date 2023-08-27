import { TBag } from "@lib/types/bag"


type TModalFooter = {
    itemInBag: TBag[] | undefined;
    removeFromBag: () => Promise<void>;
    addToBag: () => Promise<void>;
}


export const ModalFooter = ({ itemInBag, removeFromBag, addToBag }: TModalFooter) => {

    return <div className="modal-footer">
        <button type="button" className="btn btn-light rounded-0 border border-dark" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={itemInBag?.length !== 0 ? removeFromBag : addToBag}
            data-bs-dismiss="modal" className="btn btn-dark rounded-0">{itemInBag?.length !== 0 ? 'Remove' : 'Add'}
        </button>
    </div>
}
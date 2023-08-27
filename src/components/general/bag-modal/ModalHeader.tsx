import { TBag } from "@lib/types/bag"

type TModalHeader = {
    itemInBag: TBag[] | undefined
}

export const ModalHeader = ({ itemInBag }: TModalHeader) => {
    return (
        <div className="modal-header">
            <h5 className="modal-title" >{itemInBag && itemInBag.length !== 0 ? 'Remove from' : 'Add to'} Bag</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
    )
}
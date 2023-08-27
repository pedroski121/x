import { TBag } from "@lib/types/bag"
import { useContext } from "react"
import { CurrentUserContext } from "@contexts/CurrentUserContext"
import { useRouter } from "next/router"
type TModalFooter = {
    itemInBag: TBag[] | undefined;
    removeFromBag: () => Promise<void>;
    addToBag: () => Promise<void>;
}


export const ModalFooter = ({ itemInBag, removeFromBag, addToBag }: TModalFooter) => {
    const { userState } = useContext(CurrentUserContext)
    const router = useRouter()
    const bagAction = () => {
        // !userState._id ? <></> : itemInBag?.length !== 0 ? removeFromBag : addToBag
        if (!userState._id) {
            router.push('/account/sign-in')
        } else if (itemInBag && itemInBag.length !== 0) {
            removeFromBag()
        } else {
            addToBag()
        }

    }
    return <div className="modal-footer">
        <button type="button" className="btn btn-light rounded-0 border border-dark" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={bagAction}
            data-bs-dismiss="modal" className="btn btn-dark rounded-0">{itemInBag && itemInBag.length !== 0 ? 'Remove' : 'Add'}
        </button>
    </div>
}
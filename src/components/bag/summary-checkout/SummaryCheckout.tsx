import { FC, useContext } from "react"
import { BagContext } from "@contexts/BagContext"
import { EAvailableBagAction } from "@lib/types/bag"
import Link from "next/link"



const SummaryCheckout: FC<{ sumOfItems: number }> = ({ sumOfItems }) => {
    const { dispatch } = useContext(BagContext)

    function emptyBag() {
        dispatch ? dispatch({ type: EAvailableBagAction.EMPTY_BAG }) : ''
    }

    return (
        <>
            <div className="row justify-content-between">

                <div className="col-7">
                    <div className="row">
                        <div className=" col-5 border border-dark p-3 text-center">
                            Delivery - <b>₦0</b>
                        </div>
                        <div className="col-7 border border-dark p-3 text-center ">
                            SubTotal - <b>₦{sumOfItems}</b>
                        </div>
                    </div>
                </div>
                <div className="col-4 border border-dark p-3 text-center ">
                    Total - <b>₦{sumOfItems}</b>
                </div>
                <Link href='/checkout'>
                    <button className="btn btn-dark p-3 text-center rounded-0 col-12 mt-5">
                        Checkout
                    </button>
                </Link>
                <Link href='/'>
                    <button className="btn btn-light p-3 text-center rounded-0 col-12 border border-dark">
                    Continue Shopping
                </button>
                </Link>
                <button onClick={emptyBag} className="btn btn-danger mt-2 rounded-0 fw-bold">EMPTY BAG</button>

            </div>
        </>
    )
}

export { SummaryCheckout }
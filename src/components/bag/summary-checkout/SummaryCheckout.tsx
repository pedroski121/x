import { FC } from "react"

import Link from "next/link"
import { useSummaryCheckout } from "@hooks/bag/useSummaryCheckout"

const SummaryCheckout: FC<{ sumOfItems: number, mutate: any }> = ({ sumOfItems, mutate }) => {
    const { loading, emptyBag } = useSummaryCheckout(mutate)

    return (
        <>
            <div className="row justify-content-between">


                <div className="col-12 border border-dark p-3 text-center ">
                    SubTotal - <b>₦{sumOfItems}</b>
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
                <button onClick={emptyBag} className="btn btn-danger mt-2 rounded-0 fw-bold ">
                    EMPTY BAG {loading && <span className="spinner-border spinner-border-sm "></span>}
                </button>

            </div>
        </>
    )
}

export { SummaryCheckout }
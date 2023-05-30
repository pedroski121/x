import { FC } from "react"

const SummaryCheckout: FC = () => {
    return (
        <>
            <div className="row justify-content-between">
                <div className="col-6">
                    <div className="row">
                        <div className=" col-6 border border-dark p-3 text-center">
                            Delivery - <b>₦500</b>
                        </div>
                        <div className="col-6 border border-dark p-3 text-center ">
                            SubTotal - <b>₦20000</b>
                        </div>
                    </div>
                </div>
                <div className="col-4 border border-dark p-3 text-center ">
                    Total - <b>₦20500</b>
                </div>
                <button className="btn btn-dark p-3 text-center rounded-0 col-12 mt-5">
                    Checkout
                </button>
                <button className="btn btn-light p-3 text-center rounded-0 col-12 border border-dark">
                    Continue Shopping
                </button>
            </div>
        </>
    )
}

export { SummaryCheckout }
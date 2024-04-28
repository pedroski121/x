import CheckoutHeader from "@components/Checkout/Header"
import { Footer } from "@components/general/footer"
import Image from "next/image"
import PaymentButton from "@components/Checkout/PaymentButton"
import { BorderSpinner } from "@components/general/spinners"
import { useReview } from "@hooks/checkout/useReview"

const Review = () => {
    const {
        checkImportantDetails,
        productSum,
        getItem,
        currentUser,
        pickUpStation,
        isLoading,
        error,
        missingDetails,
        router } = useReview()

    return <>
        <CheckoutHeader activePage="review" />
        <div className="container">
            <h5 className="mt-2">Items</h5>
            <section className="border border-dark border-opacity-25 border-2 ">
                <ul className="list-group mt-2 border-2">
                    {
                        productsInBag?.map((product) => {
                            return <li key={product._id} style={{ whiteSpace: "nowrap", height: "150px" }} className={`list-group-item  overflow-auto shadow m-2 rounded-1 p-0 mb-3 d-flex flex-row justify-content-between `}>
                                <div className={` d-flex flex-row `}>
                                    <div style={{ height: "100%", width: "140px", position: "relative" }}>
                                        <Image src={product.imgURLs[0]} style={{ objectFit: "cover" }} alt="An item in the bag image" fill />
                                    </div>
                                    <div className=" text-center text-md-start px-3">

                                        <p className={`fw-bold text-secondary`}>{product.name}<br /></p>
                                        <p className="text-dark">₦{product.price}</p>
                                        <p className="text-dark">Quantity - {getItem(product)?.quantity}</p>
                                        <p className="fw-bold text-secondary">    {
                                            getItem(product)?.size
                                                ?
                                                <span className="">
                                                    Size -  {getItem(product)?.size}
                                                </span>

                                                : ''
                                        }</p>

                                    </div>

                                </div>
                            </li>
                        })
                    }
                </ul>
                <h6 className="ms-2">Total - ₦{productSum}</h6>
                <button onClick={() => router.push('/bag')} className="btn btn-dark mb-3 mx-2 mt-1 rounded-0">Modify Bag</button>

            </section>

            <h5 className="mt-4">Delivery Information</h5>
            <section className="border border-dark border-opacity-25 border-2">
                <div>
                    <ul className="list-group m-2">
                        <li className="list-group-item border border-secondary border-1 p-0 ps-3 pt-1">
                            <span className="fw-bold text-secondary">Pick-up Station</span>
                            {
                                isLoading
                                    ? <div className="p-5"> <BorderSpinner size={false} /> </div>
                                    : error
                                        ? <p>Please select another Pick-up station</p>
                                        : <>
                                            <h6>{pickUpStation?.logisticsCompany}</h6>
                                            <p className="m-0">{pickUpStation?.address} <br /> {pickUpStation?.city}, {pickUpStation?.state}
                                            </p>
                                        </>
                            }
                            <button onClick={() => router.push('/checkout')} className="btn btn-dark mb-3 mt-1 rounded-0">Change</button>
                        </li>
                        <li className={`list-group-item border ${missingDetails ? 'border-danger' : 'border-secondary'} border-1 p-0 ps-3 pt-1 mt-2 `}>
                            <span className="fw-bold text-secondary">Contact Information</span>
                            <p className=" p-0 m-0 px-3 mt-1"><i className="bi bi-telephone-fill me-1"></i><span>
                                +234{currentUser?.phoneNumber}
                            </span></p>
                            <p className="  m-0 p-0 px-3 mt-1"> <i className="bi bi-envelope-fill me-2"></i><span >
                                {currentUser && currentUser.email}
                            </span></p>
                            <button onClick={() => router.push('/account/address-book/edit')} className="btn btn-dark mb-3 mt-1 rounded-0">Change</button>

                        </li>
                    </ul>
                </div>

            </section>
            <PaymentButton checkImportantDetails={checkImportantDetails} />
        </div>
        <Footer />
    </>

}
export default Review
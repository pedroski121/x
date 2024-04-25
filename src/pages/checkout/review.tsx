import CheckoutHeader from "@components/checkout/Header"
import { Footer } from "@components/general/footer"
import Image from "next/image"
import { useRouter } from "next/router"
const Review = () => {
    const router = useRouter()

    return <>
        <CheckoutHeader activePage="review" />
        <div className="container">
            <h5 className="mt-2">Items</h5>
            <section className="border border-dark border-3 ">
                <ul className="list-group mt-2 border-2">

                    <li style={{ whiteSpace: "nowrap", height: "150px", cursor: 'pointer' }} className={`list-group-item  overflow-auto shadow m-2 rounded-1 p-0 mb-3 d-flex flex-row justify-content-between `}>
                        <div className={` d-flex flex-row `}>
                            <div style={{ height: "100%", width: "140px", position: "relative" }}>
                                <Image src='/face.jpg' style={{ objectFit: "cover" }} alt="An item in the bag image" fill />
                            </div>
                            <div className=" text-center text-md-start px-3">
                                <p className={`fw-bold `}>Face of the faceless<br /></p>
                                <p className="text-dark">$10000</p>
                                <p className="text-dark">Quantity - 1</p>
                            </div>
                            <p className="fw-bold text-end text-secondary mx-md-5">Size -  XXL</p>

                        </div>
                    </li>
                </ul>
                <h6 className="ms-2">Total - $37000</h6>
                <button className="btn btn-dark mb-3 mx-2 mt-1 rounded-0">Modify Bag</button>

            </section>

            <h5 className="mt-4">Delivery Information</h5>
            <section className="border border-dark border-3">
                <div>
                    <ul className="list-group m-2">
                        <li className="list-group-item border border-secondary border-1 p-0 ps-3 pt-1">
                            <span className="fw-bold text-secondary">Pick-up Station</span>
                            <h6>Gavice</h6>
                            <p className="m-0">No, 2 Ojike Street off Bende Road <br /> Umuahia, Abia State
                            </p>
                            <button className="btn btn-dark mb-3 mt-1 rounded-0">Change</button>
                        </li>

                        <li className="list-group-item border border-secondary border-1 p-0 ps-3 pt-1 mt-2">
                            <span className="fw-bold text-secondary">Contact Information</span>
                            <p className=" p-0 m-0 px-3 mt-1"><i className="bi bi-telephone-fill me-1"></i><span >+234 816 112 0000</span></p>
                            <p className="  m-0 p-0 px-3 mt-1"> <i className="bi bi-envelope-fill me-2"></i><span >slucent@g.com</span></p>
                            <button className="btn btn-dark mb-3 mt-1 rounded-0">Change</button>

                        </li>
                    </ul>

                </div>

            </section>
        </div>
        <Footer />
    </>

}
export default Review
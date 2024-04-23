import { Footer } from "@components/general/footer";
import { NextPage } from "next";
import Delivery from "@components/Checkout/Delivery";

const CheckOut: NextPage = () => {

    return <>
        <header className="d-flex flex-column flex-md-row justify-content-between py-2 px-2 border-bottom ">
            <h1 className="fw-bold fs-6 text-secondary">DELIVERY</h1>
            <section>
                <span className="text-dark"> <i className="bi bi-1-circle-fill"></i> Delivery - </span>
                <span className="text-secondary"> <i className="bi bi-2-circle-fill"></i> Review -  </span>
                <span className="text-secondary"> <i className="bi bi-3-circle-fill"></i> Payment </span>
            </section>
        </header>
        <Delivery />
        <Footer />
    </>
}

export default CheckOut
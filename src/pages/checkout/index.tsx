import { Footer } from "@components/general/footer";
import { NextPage } from "next";
import Delivery from "@components/checkout/Delivery";
import CheckoutHeader from "@components/checkout/Header";

const CheckOut: NextPage = () => {

    return <>
        <CheckoutHeader activePage="delivery" />

        <Delivery />
        <Footer />
    </>
}

export default CheckOut
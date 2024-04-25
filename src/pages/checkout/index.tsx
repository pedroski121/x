import { Footer } from "@components/general/footer";
import { NextPage } from "next";
import Delivery from "@components/Checkout/Delivery";
import CheckoutHeader from "@components/Checkout/Header";

const CheckOut: NextPage = () => {

    return <>
        <CheckoutHeader activePage="delivery" />

        <Delivery />
        <Footer />
    </>
}

export default CheckOut
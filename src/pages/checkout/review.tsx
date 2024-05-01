import CheckoutHeader from "@components/Checkout/Header"
import { Footer } from "@components/general/footer"
import { ReviewComponent } from "@components/Checkout/ReviewComponent"

const Review = () => {
    return <>
        <CheckoutHeader activePage="review" />
        <ReviewComponent />
        <Footer />
    </>

}
export default Review
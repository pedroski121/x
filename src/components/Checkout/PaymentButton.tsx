import { PaystackButton } from "react-paystack"
import { FC } from "react"

interface IPaymentButton {
    checkImportantDetails: () => boolean
}

const PaymentButton: FC<IPaymentButton> = ({ checkImportantDetails }) => {

    // const componentProps = {
    //     email: 'obipedrodevtest@gmail.com',
    //     amount: productSum * 100,
    //     metadata: {
    //         name: currentUser?.firstName,
    //         phone: currentUser?.phoneNumber,
    //     },
    //     publicKey: 'pk_test_3159c177cbcc19e4218cbb70d020a4c75907e022',
    //     text: "Pay Now",
    //     onSuccess: () =>
    //         alert("Thanks for doing business with us! Come back soon!!"),
    //     onClose: () => alert("Wait! Don't leave :("),
    // }
    return <div className="text-end">
        <button onClick={checkImportantDetails} className="btn btn-dark mt-2 rounded-0 px-0 px-5 fw-bold">Checkout</button>

    </div>
    {/* <PaystackButton {...componentProps} /> */ }

}

export default PaymentButton
import { PaystackButton } from "react-paystack"
import { FC } from "react"
import { UserResource } from "@clerk/types";
interface IPaymentButton {
    checkImportantDetails: () => boolean;
    productSum: number;
    currentUser?: UserResource | null;
    onPaymentSuccess: (reference: any) => void;
    onPaymentClose: (reference: any) => void;
}

const PaymentButton: FC<IPaymentButton> = ({ checkImportantDetails, productSum, currentUser, onPaymentSuccess, onPaymentClose }) => {
    const componentProps = {
        email: `${currentUser?.primaryEmailAddress}` || '',
        amount: productSum * 100,
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
        text: "Checkout",

        reference: (new Date()).getTime().toString(),
        onSuccess: (reference: any) => onPaymentSuccess(reference),
        onClose: (reference: any) => onPaymentClose(reference),
        className: `btn btn-dark mt-2 rounded-0 px-0 px-5 fw-bold ${checkImportantDetails() || productSum === 0 ? 'disabled' : ''}`,
        metadata: {
            custom_fields: [
                {
                    display_name: currentUser?.firstName || '',
                    variable_name: currentUser?.lastName || '',
                    value: 'Payment of ₦' + productSum + ' successfully made.'
                }
            ]
        }

    }
    return <div className="text-end">
        <PaystackButton {...componentProps} />
    </div>

}

export default PaymentButton
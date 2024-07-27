import { useRouter } from "next/router"
import { useFetch } from "@hooks/general/useFetch"

export interface IOrder {
    userID: string;
    orderID: string;
    productDetails: [{
        productID: string,
        quantity: number,
        size: string,
        amountPaid: number,
        currentStatus: string,
        pendingDate: string,
        confirmedDate?: string,
        shippedDate?: string,
        deliveredDate?: string,
    }];
    pickUpStationID: string;
    orderInitiationTime: string;
    createdAt: string;
    updatedAt?: string;
    totalAmountPaid: number;
    status: string;
    referenceID: string
}

const OrdersTable = () => {
    const { data: orderData, error } = useFetch<IOrder[]>('/api/order/all')
    const router = useRouter()
    return (
        <>
            {!error ?
                <div className="row">
                    <div className="col-md-9">

                        <table className="table table-hover">
                            <thead>

                                <tr>
                                    <th>Order ID</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    orderData?.map((order: IOrder) => {
                                        const date = new Date(order.orderInitiationTime)
                                        const orderTimeCreationHour = date.getHours()
                                        const orderTimeCreationMinutes = date.getMinutes()
                                        let orderCompleted: boolean = true
                                        order.productDetails.map((product) => {
                                            if (product.currentStatus != 'delivered') {
                                                orderCompleted = false
                                            }
                                        })
                                        return <tr key={order.orderID} className={
                                            //@ts-ignore
                                            orderCompleted == false ? `table-warning` : 'table-success'} style={{ cursor: "pointer" }
                                            } onClick={() => router.push(`/admin/orders/${order.orderID}`)}>
                                            <th scope="row">{order.orderID}</th>
                                            <td>{order.createdAt}</td>
                                            <td>{`${orderTimeCreationHour}:${orderTimeCreationMinutes}`}</td>
                                            <td>{order.totalAmountPaid}</td>
                                            <td>{order.status}</td>
                                        </tr>

                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div> : <p className="text-center">{error.message}</p>}

        </>
    )
}
export default OrdersTable 
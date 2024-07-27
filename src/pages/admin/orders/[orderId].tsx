import { Footer } from "@components/general/footer"
import { useDynamicPath } from "@hooks/general/useDynamicPath"
import { useFetch } from "@hooks/general/useFetch"
import { useFetchMultipleParams } from "@hooks/general/useFetchMultipleParams"
import { IOrder, IPickUpStation } from "@lib/types/checkout"
import { IUser } from "@lib/types/current-user"
import { IProductsData } from "@lib/types/product"
import { Header } from "@components/admin"
import { axiosInstance } from "@utils/axiosInstance"
import { useRouter } from "next/router"
const OrderDetails = () => {
    const router = useRouter()
    const { pages } = useDynamicPath()
    const productsID: string[] = [];
    const orderID = pages[1]
    const { data: orderData } = useFetch<IOrder>(`/api/order/product/${orderID}`)
    orderData?.productDetails.map((product) => {
        productsID.push(product.productID)
    })
    const { data: user } = useFetch<IUser>(`/api/user/${orderData?.userID}`)
    const { data: productsData } = useFetchMultipleParams<IProductsData>('/api/product', productsID)
    const { data: pickUpStation } = useFetch<IPickUpStation>(`/api/pick-up-station/${orderData?.pickUpStationID}`)

    const updateOrder = async (newStatus: string, productID: string) => {
        const date = new Date().toLocaleDateString()

        await axiosInstance.patch('/api/order/update', { currentStatus: newStatus, orderID, productID, date }).then(() => router.reload())

    }
    return <>

        <div className="container-fluid">
            <Header pageName="Order" />

            <h1 className="fs-5">ID {orderID}</h1>
            <p>{user?.firstName} {user?.lastName} <br></br> +234{user?.phoneNumber} <br></br>{user?.email}</p>
            <section>
                <h2 className="fs-5">Pick Up Station</h2>
                <p>
                    {pickUpStation?.logisticsCompany} <br></br>
                    {pickUpStation?.address}<br></br>
                    {pickUpStation?.city}<br></br>
                    {pickUpStation?.state}
                </p>
            </section>

            <div className="overflow-auto">
                <table className="table  table-striped">
                    <thead className="table-dark">

                        <tr className="">
                            <th >Product Name</th>
                            <th >Store Name</th>
                            <th >Store Phone Number</th>
                            <th>Quantity</th>
                            <th>Size</th>
                            <th>Product Cost</th>
                            <th>Current Status</th>
                            <th>Pending Date</th>
                            <th>Confirmed Date</th>
                            <th>Shipped Date</th>
                            <th>Delivered Date</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            productsData?.map((product) => {
                                const order = orderData?.productDetails.filter((orderedProduct) => orderedProduct.productID === product._id);
                                const productQuantity = order && order[0]
                                return <tr key={product._id}>
                                    <th>{product.name}</th>
                                    <td>{product.storeName}</td>
                                    <td>+000000</td>
                                    <td>{productQuantity ? productQuantity.quantity : '_'}</td>
                                    <td>{productQuantity ? productQuantity.size : '_'}</td>
                                    <td>{productQuantity ? `₦${productQuantity.amountPaid}` : '_'}</td>
                                    <td>
                                        <div className="dropdown" >
                                            <button className={`btn ${productQuantity?.currentStatus === 'pending' ?
                                                'btn-warning' : productQuantity?.currentStatus === 'confirmed' ? 'btn-secondary' :
                                                    productQuantity?.currentStatus === 'shipped' ? 'btn-dark' : productQuantity?.currentStatus === 'delivered' ? 'btn-success disabled' : 'btn-danger disabled'
                                                } btn-secondary dropdown-toggle`} type="button" id="current_state_dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                {productQuantity ? productQuantity.currentStatus : '_'}

                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="current_state_dropdown">
                                                {
                                                    productQuantity?.currentStatus === 'pending' ? (
                                                        <li><a className="dropdown-item p-0 ms-2" onClick={() => updateOrder('confirmed', product._id)}>Confirmed</a></li>
                                                    ) : (
                                                        productQuantity?.currentStatus === 'confirmed' ? (
                                                            <li><a className="dropdown-item p-0 ms-2" onClick={() => updateOrder('shipped', product._id)}>Shipped</a></li>
                                                        ) : productQuantity?.currentStatus === 'shipped' ? (
                                                            <li><a className="dropdown-item p-0 ms-2" onClick={() => updateOrder('delivered', product._id)}>Delivered</a></li>
                                                        ) : (
                                                            <li>_</li>
                                                        )
                                                    )}

                                            </ul>
                                        </div>

                                    </td>
                                    <td>{productQuantity && productQuantity.pendingDate ? productQuantity.pendingDate : '_'}</td>
                                    <td>{productQuantity && productQuantity.confirmedDate ? productQuantity.confirmedDate : '_'}</td>
                                    <td>{productQuantity && productQuantity.shippedDate ? productQuantity.shippedDate : '_'}</td>
                                    <td>{productQuantity && productQuantity.deliveredDate ? productQuantity.deliveredDate : '_'}</td>






                                </tr>
                            })
                        }


                    </tbody>
                </table></div>
        </div>
        <Footer />
    </>
}

export default OrderDetails
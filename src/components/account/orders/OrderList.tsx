import Image from "next/image"
import { useFetch } from "@hooks/general/useFetch"
import { IOrder } from "@lib/types/checkout"
import { useFetchMultipleParams } from "@hooks/general/useFetchMultipleParams"
import { IProductsData } from "@lib/types/product"


export const OrderList = () => {
    const { data: orders, isLoading: orderListLoading } = useFetch<IOrder[]>('/api/order')
    const productsIDs: string[] = []
    orders && orders.map((order) => {
        const products = order.productDetails
        products.map((product) => {
            if (productsIDs.indexOf(product.productID) === -1) {
                productsIDs.push(product.productID)

            }
        })
    })
    const { data: products, isLoading: productsListLoading } = useFetchMultipleParams<IProductsData>('/api/product', productsIDs)

    return (<>
        <ul className="list-group">
            {
                productsListLoading || orderListLoading ? <></> :
                    orders && orders.length !== 0 ? orders.map((order) => {

                        const productDetails = order.productDetails
                        return productDetails.map((productDetail) => {

                            return products?.map((product) => {
                                if (product._id === productDetail.productID) {
                                    return <li style={{ whiteSpace: "nowrap" }} key={productDetail.productID} className={`list-group-item overflow-auto border border-secondary  rounded-0 p-0 mb-3 d-flex flex-row justify-content-between  `}>
                                        <div className={` d-flex flex-row`}>
                                            <div style={{ height: "100%", width: "140px", position: "relative" }}>
                                                <Image src={product.imgURLs[0]} style={{ objectFit: "cover" }} alt={`${product.imgAltText}`} fill />
                                            </div>


                                            <div className=" text-center text-md-start px-3">
                                                <p className={`fw-bold `}>{productDetail.quantity} {product.name}<br />
                                                    <span className="text-secondary" style={{ fontSize: '13px', fontStyle: 'italic' }}>Order - {order.orderID}</span>
                                                </p>
                                                <span>Price - ₦{order.totalAmountPaid}</span>

                                                <p>

                                                    {
                                                        productDetail.currentStatus === 'pending' ?
                                                            <>
                                                                <span className="badge bg-warning">{productDetail.currentStatus}</span>
                                                                <br /> {productDetail.pendingDate ? `On ${productDetail.pendingDate}` : ''}
                                                            </> :
                                                            productDetail.currentStatus === 'confirmed' ?
                                                                <>
                                                                    <span className="badge bg-light">{productDetail.currentStatus}</span>
                                                                    <br />  {productDetail.confirmedDate ? `On ${productDetail.confirmedDate}` : ''}
                                                                </> :
                                                                productDetail.currentStatus === 'shipped' ?
                                                                    <>
                                                                        <span className="badge bg-secondary">{productDetail.currentStatus}</span>
                                                                        <br /> {productDetail.shippedDate ? `On ${productDetail.shippedDate}` : ''}
                                                                    </> :
                                                                    productDetail.currentStatus === 'delivered' ?
                                                                        <>
                                                                            <span className="badge bg-success">{productDetail.currentStatus}</span>
                                                                            <br /> {productDetail.deliveredDate ? `On ${productDetail.deliveredDate}` : ''}
                                                                        </> :
                                                                        <>
                                                                            <span className="badge bg-danger">Unknown</span>

                                                                        </>
                                                    }

                                                </p>
                                            </div>

                                        </div>

                                    </li>
                                }
                            })
                        })

                    }) : <></>
            }


        </ul>
    </>)
}
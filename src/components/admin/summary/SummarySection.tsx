import Link from "next/link"
import { USER_LINKS } from "@lib/types/admin"
import { useFetch } from "@hooks/general/useFetch"
import { useFetchMultipleParams } from "@hooks/general/useFetchMultipleParams"

type TOrderStateSummary = {
    status: string;
    count: number;
}

enum ORDERSTATE {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    SHIPPED = 'shipped',
    DELIVERED = 'delivered'
}
export const SummarySection = () => {
    const { data: userCount } = useFetch('/api/user/count')
    const { data: productCount } = useFetch('/api/product/count')
    const { data: orderCount } = useFetch('/api/order/count')

    const params = ["pending", "confirmed", "shipped", "delivered"]


    const { data } = useFetchMultipleParams<TOrderStateSummary>('/api/order', params)

    const getDetailOfSpecificOrders = (status: string): TOrderStateSummary => {
        return data?.find(currentStatus => currentStatus.status === status) || { status: '', count: 0 }
    }
    return (
        <>
            <section className="row m-3">
                <div className="col-6">
                    <div className="row flex-column gap-2 me-1">
                        <Link href={'/admin/orders'} className="link-warning">
                            <div className="bg-warning p-3 rounded-2">
                                <p className="h6 text-white fw-bold">Pending Orders <br /><span>{getDetailOfSpecificOrders(ORDERSTATE.PENDING).count}</span></p>
                            </div>
                        </Link>
                        <Link href={'/admin/orders'} className="link-light">
                            <div className="bg-light p-3 rounded-2 border border-secondary border-1">
                                <p className="h6 text-dark fw-bold">Confirmed Orders <br /><span>{getDetailOfSpecificOrders(ORDERSTATE.CONFIRMED).count}</span></p>
                            </div>
                        </Link>
                        <Link href={'/admin/orders'} className="link-secondary">
                            <div className="bg-secondary p-3 rounded-2">
                                <p className="h6 text-white fw-bold">Shipped Orders <br /><span>{getDetailOfSpecificOrders(ORDERSTATE.SHIPPED).count}</span></p>
                            </div>
                        </Link>
                        <Link href={'/admin/orders'} className="link-success">
                            <div className="bg-success p-3 rounded-2">
                                <p className="h6 text-white fw-bold">Delivered Orders <br /><span>{getDetailOfSpecificOrders(ORDERSTATE.DELIVERED).count}</span></p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-6 border border-dark rounded-2 d-flex  flex-column justify-content-center align-items-center">
                    <p className="h2 text-secondary">Total Number of Orders -<span className="text-dark"> {orderCount?.orderCount || 0}</span></p>
                </div>
            </section>

            <ol className="list-group mt-5">
                <Link href={`${USER_LINKS.BASE_LINK}/1`} className="link-light my-1">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-1 me-auto">
                            <div className="fw-bold">Total Number of Users</div>
                            {userCount?.userCount || 0}
                        </div>
                    </li>
                </Link>
                <Link href={'/admin/products'} className="link-light">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-1 me-auto">
                            <div className="fw-bold">Total Number of Products</div>
                            {productCount?.productCount || 0}
                        </div>
                    </li>
                </Link>

            </ol>
        </>
    )
}

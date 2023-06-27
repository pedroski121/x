import { HomeIcon } from "@components/HomeIcon"
import Link from "next/link"
export const SummarySection = () => {
    return (
        <>
            <section className="row m-3">
                <div className="col-6">
                    <div className="row flex-column gap-2 me-1">
                        <Link href={'/admin/orders'} className="link-dark">
                            <div className="bg-dark p-3 rounded-2">
                                <p className="h6 text-white fw-bold">Awaiting Delivery <br /><span>0 orders</span></p>
                            </div>
                        </Link>
                        <Link href={'/admin/orders'} className="link-secondary">
                            <div className="bg-secondary p-3 rounded-2">
                                <p className="h6 text-white fw-bold">Successful Delivery <br /><span>0</span></p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-6 border border-dark rounded-2 d-flex  flex-column justify-content-center align-items-center">
                    <p className="h2 text-secondary">Total Number of Sales -<span className="text-dark"> ₦0</span></p>
                </div>
            </section>

            <ol className="list-group mt-5">
                <Link href={'/admin/users'} className="link-light">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-1 me-auto">
                            <div className="fw-bold">Total Number of Users</div>
                            0
                        </div>
                    </li>
                </Link>
                <Link href={'/admin/products'} className="link-light">

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-1 me-auto">
                            <div className="fw-bold">Total Number of Products</div>
                            0
                        </div>
                    </li>
                </Link>
                <Link href={'/admin/vendors'} className="link-light">

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-1 me-auto">
                            <div className="fw-bold">Total number of Vendors</div>
                            0
                        </div>
                    </li>
                </Link>
            </ol>
        </>
    )
}

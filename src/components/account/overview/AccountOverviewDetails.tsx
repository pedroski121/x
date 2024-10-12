import Link from "next/link"
import { useFetch } from "@hooks/general/useFetch"
export type TAccountData = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber?: number,
    additionalPhoneNumber?: number,
    address1?: string,
    address2?: string,
    state?: string,
    city?: string
}
export const AccountOverviewDetails = () => {
    const { data, error, isLoading } = useFetch<TAccountData>(`/api/user/s`)
    if (isLoading) {
        return <p>loading...</p>
    }
    if (error) {
        return <p>An error occured fetching the overview of your account details</p>
    }


    return (
        <>
            <div className="mx-5 d-block d-md-none">
                <Link href={"/account/address-book"}> <button type="button" className="btn btn-outline-dark m-1 rounded-0">Address Book</button></Link>
                <button type="button" className="btn btn-outline-dark m-1 rounded-0">Manage Account</button>
            </div>
            {
                data
                    ? <section className="row gap-2 justify-content-center mt-3">

                        <div className="col-10 col-md-5 ">
                            <div className="card border-0" style={{ height: "220px" }}>
                                <div className="card-header border border-dark text-dark fw-bold  fs-6">
                                    ACCOUNT DETAILS
                                </div>
                                <div className="card-body border border-dark border-top-0">
                                    <h5 className="card-title">{`${data.firstName} ${data.lastName}`}</h5>
                                    <p className="card-text">
                                        <span className="bi bi-envelope-fill"></span> {data.email}<br></br>
                                        {data.phoneNumber ? <> <span className="bi bi-telephone-fill"></span> <span></span>0{data.phoneNumber}</> : <></>}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 col-md-5 mt-3 mt-md-0">
                            <div className="card  border-0" style={{ height: "220px" }}>
                                <div className="card-header border border-dark text-dark fw-bold fs-6 d-flex flex-row justify-content-between">
                                    ADDRESS BOOK
                                    <Link href="/account/address-book" className="btn btn-outline-dark rounded-5 p-0 border-0 px-1">
                                        <i className="bi bi-pencil"></i>
                                    </Link>
                                </div>
                                {!data.address1 && !data.city && !data.state ?
                                    <div className="card-body border border-dark border-top-0">
                                        <h5 className="card-title">Your address book is empty</h5>
                                    </div> :
                                    <div className="card-body border border-dark border-top-0">
                                        <h5 className="card-title">Shipping Address</h5>
                                        <p className="card-text">{data.address1}</p>
                                        <p>{data.city}, {data.state}</p>
                                    </div>
                                }

                            </div>
                        </div>
                    </section>

                    : <></>
            }

        </>
    )
}
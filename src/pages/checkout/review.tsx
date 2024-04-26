import CheckoutHeader from "@components/Checkout/Header"
import { Footer } from "@components/general/footer"
import Image from "next/image"
import { useRouter } from "next/router"
import { useBag } from "@hooks/bag/useBag"
import { useBagCheck } from "@hooks/bag/useBagCheck"
import { useEffect, useState } from "react"
import { useTable } from "@hooks/bag/useTable"
import { ProductDefaultValues } from "@lib/types/product"
import { bagDefault } from "@lib/types/bag"
import { useFetch } from "@hooks/general/useFetch"
import { useCurrentUser } from "@hooks/account/auth/useCurrentUser"

export interface IPickUpStation {
    logisticsCompany: string;
    state: string;
    city: string;
    address: string;
    _id: string;
}

const Review = () => {
    const router = useRouter()
    const [pickUpStationId, setPickUpStationId] = useState<string>('')
    let { productsInBag, bagItems, mutate } = useBag()
    const currentUser = useCurrentUser()

    const { data: pickUpStation, isLoading, error } = useFetch<IPickUpStation>(`/api/pick-up-station/${pickUpStationId}`)
    if (bagItems === undefined) {
        bagItems = [bagDefault]
    }
    if (productsInBag === undefined) {
        productsInBag = [ProductDefaultValues]
    }
    const { productSum, getItem } = useTable(mutate, bagItems, productsInBag)

    useEffect(() => {
        const pickUpId = window.sessionStorage.getItem('pick_up_station_id')
        pickUpId !== null && setPickUpStationId(pickUpId)
    }, [])

    return <>
        <CheckoutHeader activePage="review" />
        <div className="container">
            <h5 className="mt-2">Items</h5>
            <section className="border border-dark border-opacity-25 q border-2 ">
                <ul className="list-group mt-2 border-2">
                    {
                        productsInBag?.map((product) => {
                            console.log(product)
                            return <li key={product._id} style={{ whiteSpace: "nowrap", height: "150px" }} className={`list-group-item  overflow-auto shadow m-2 rounded-1 p-0 mb-3 d-flex flex-row justify-content-between `}>
                                <div className={` d-flex flex-row `}>
                                    <div style={{ height: "100%", width: "140px", position: "relative" }}>
                                        <Image src={product.imgURLs[0]} style={{ objectFit: "cover" }} alt="An item in the bag image" fill />
                                    </div>
                                    <div className=" text-center text-md-start px-3">

                                        <p className={`fw-bold text-secondary`}>{product.name}<br /></p>
                                        <p className="text-dark">₦{product.price}</p>
                                        <p className="text-dark">Quantity - {getItem(product)?.quantity}</p>
                                        <p className="fw-bold text-secondary">    {
                                            getItem(product)?.size
                                                ?
                                                <span className="">
                                                    Size -  {getItem(product)?.size}
                                                </span>

                                                : ''
                                        }</p>

                                    </div>

                                </div>
                            </li>
                        })
                    }
                </ul>
                <h6 className="ms-2">Total - ₦{productSum}</h6>
                <button onClick={() => router.push('/bag')} className="btn btn-dark mb-3 mx-2 mt-1 rounded-0">Modify Bag</button>

            </section>

            <h5 className="mt-4">Delivery Information</h5>
            <section className="border border-dark border-opacity-25 border-2">
                <div>
                    <ul className="list-group m-2">
                        <li className="list-group-item border border-secondary border-1 p-0 ps-3 pt-1">
                            <span className="fw-bold text-secondary">Pick-up Station</span>
                            <h6>{pickUpStation?.logisticsCompany}</h6>
                            <p className="m-0">{pickUpStation?.address} <br /> {pickUpStation?.city}, {pickUpStation?.state}
                            </p>
                            <button onClick={() => router.push('/checkout')} className="btn btn-dark mb-3 mt-1 rounded-0">Change</button>
                        </li>

                        <li className="list-group-item border border-secondary border-1 p-0 ps-3 pt-1 mt-2">
                            <span className="fw-bold text-secondary">Contact Information</span>
                            <p className=" p-0 m-0 px-3 mt-1"><i className="bi bi-telephone-fill me-1"></i><span>
                                +234{currentUser?.phoneNumber}
                            </span></p>
                            <p className="  m-0 p-0 px-3 mt-1"> <i className="bi bi-envelope-fill me-2"></i><span >
                                {currentUser && currentUser.email}
                            </span></p>
                            <button onClick={() => router.push('/account/address-book/edit')} className="btn btn-dark mb-3 mt-1 rounded-0">Change</button>

                        </li>
                    </ul>

                </div>

            </section>
            <div className="text-end">
                <button className="btn btn-dark mt-2 rounded-0 px-0 px-5 fw-bold">Checkout</button>

            </div>
        </div>
        <Footer />
    </>

}
export default Review
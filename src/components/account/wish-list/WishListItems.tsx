import Image from "next/image"
import { useRouter } from "next/router"
import { IProductsData } from "@lib/types/product"

import { useWishList } from "@hooks/wishlist/useWishList"


export const WishListItems = ({ currentUserId }: { currentUserId: string }) => {
    const router = useRouter()
    const { productData, changingWish, deleteWishList, isLoading, loading } = useWishList(currentUserId)


    if (loading || isLoading) {
        return <p>loading...</p>
    }

    if (!productData || productData?.length === 0) { return <p>Make a wish!</p> };

    return <>
        <ul className="list-group">
            {productData && productData.map((product: IProductsData) => {

                const available = product.quantity > 0
                return <li key={product._id} style={{ whiteSpace: "nowrap", height: "150px" }} className={`list-group-item overflow-auto border border-secondary rounded-1 p-0 mb-3 d-flex flex-row justify-content-between `}>
                    <div className={` d-flex flex-row `}>
                        <div style={{ height: "100%", width: "140px", position: "relative" }}>
                            <Image src={product.imgURLs[0]} style={{ objectFit: "cover" }} alt="An item in the bag image" fill />
                        </div>

                        <div className=" text-center text-md-start px-3">
                            <p className={`fw-bold `}>{product.name} <br /> <span className={` ${available ? 'badge bg-success' : 'badge bg-danger'}  p-2 mt-2`}>
                                {available ? 'AVAILABLE' : 'NOT AVAILABLE'}</span></p>
                        </div>

                    </div>
                    <div className=" d-flex justify-content-between flex-column m-2">
                        <button className="btn btn-dark rounded-0" onClick={() => router.push(`/categories/${product.category}/${product.subCategory}/${product.name.split(" ").join("-")}-${product._id}`)}>See Details</button>
                        <button className="btn btn-outline-danger py-1 rounded-0" onClick={() => deleteWishList(product._id)}>
                            Remove {changingWish === product._id ? <span className="spinner-border spinner-border-sm "></span> : <></>}  </button>
                    </div>
                </li>
            })}
        </ul>
    </>
}
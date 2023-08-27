import Image from "next/image"
import { FC } from "react"
import { TTable } from "@lib/types/bag"
import { useTable } from "@hooks/bag/useTable"
import { SummaryCheckout } from "@components/bag"


const Table: FC<TTable> = ({ bagItems, products, mutate }) => {

    const { deleting, getItem, removeItem, productSum } = useTable(mutate, bagItems, products)


    return (
        <>
            <div className="overflow-auto">
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col" className="fw-light"></th >
                            <th scope="col" className="fw-light">Name</th >

                            <th scope="col" className="fw-light">Size</th>
                            <th scope="col" className="fw-light">Quantity</th>
                            <th scope="col" className="fw-light">Remove</th>
                            <th scope="col" className="fw-light text-center">Price</th>

                        </tr >
                    </thead >

                    <tbody>

                        {
                            products?.map((product, key) => {
                                return <tr key={key}>
                                    <th scope="row">
                                        <div style={{ maxWidth: '200px', maxHeight: '200px' }}>
                                            <Image src={product.imgURLs[0]} style={{ objectFit: "cover" }} alt="An item in the bag image" width={200} height={150} />
                                        </div>

                                    </th>
                                    <td >
                                        <div className="me-4">
                                            <span className="fw-normal">{product.name}</span><br />
                                        </div>
                                    </td>
                                    <td>
                                        {
                                            getItem(product)?.size
                                                ? <div className="input-group">
                                                    <span className="input-group-text bg-white rounded-0 border border-secondary">
                                                        {getItem(product)?.size}
                                                    </span>
                                                </div>
                                                : ''
                                        }

                                    </td>
                                    <td >
                                        <div className="input-group">

                                            <span className="input-group-text bg-white rounded-0 border border-secondary">
                                                {getItem(product)?.quantity}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <button type="button" onClick={() => removeItem(product)} className="btn btn-outline-dark border border-secondary rounded-0">


                                            {
                                                deleting === product._id ? <span className="spinner-border spinner-border-sm "></span> : 'x'
                                            }
                                        </button>

                                    </td>
                                    <td className="text-center"> ₦{product.price} </td>


                                </tr>

                            })
                        }
                    </tbody>

                </table >

            </div>
            <SummaryCheckout sumOfItems={productSum} mutate={mutate} />
        </>

    )
}

export { Table }
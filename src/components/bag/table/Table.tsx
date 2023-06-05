import Image from "next/image"
import { FC, useContext } from "react"
import { BagContext } from "@contexts/BagContext"
import { EAvailableBagAction } from "@lib/types/bag"


const Table: FC = () => {
    const { bagState, dispatch } = useContext(BagContext);

    function removeItem(_id: string) {
        dispatch ? dispatch({ type: EAvailableBagAction.REMOVE_FROM_BAG, payload: { _id } }) : ''
    }

    return (
        <div className="overflow-auto">
            <table className="table mt-4">

                <thead>
                    <tr>
                        <th scope="col" className="fw-light"></th >
                        <th scope="col" className="fw-light">Description</th >
                        <th scope="col" className="fw-light">Size</th>
                        <th scope="col" className="fw-light">Quantity</th>
                        <th scope="col" className="fw-light">Remove</th>
                        <th scope="col" className="fw-light">Price</th>
                    </tr >
                </thead >
                <tbody>

                    {
                        bagState.map((bagItem, key) => {
                            // check for the default value and return nothing
                            if (bagItem._id.length === 0) {
                                return ''
                            }

                            return <tr key={key}>
                                <th scope="row">
                                    <div style={{ maxWidth: '200px', maxHeight: '200px' }}>
                                        <Image src={bagItem.imgURL} style={{ objectFit: "cover" }} alt="An item in the bag image" width={200} height={150} />
                                    </div>

                                </th>
                                <td >
                                    <div className="me-4">
                                        <span className="fw-normal">{bagItem.name}</span><br />
                                        <small className="fw-light">Product Code: <span className="fw-normal">{bagItem._id}</span></small>
                                    </div>
                                </td>
                                <td>
                                    <div className="input-group">
                                        <span className="input-group-text bg-white rounded-0 border border-secondary">XS</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Button group to select the quantity of a product to buy">
                                        <button type="button" className="btn btn-dark rounded-0">+</button>
                                        <span className="input-group-text bg-white rounded-0 ">0</span>
                                        <button type="button" className="btn btn-light rounded-0 border border-secondary">-</button>
                                    </div>
                                </td>
                                <td>
                                    <button type="button" onClick={() => removeItem(bagItem._id)} className="btn btn-light border border-secondary rounded-0">x</button>
                                </td>
                                <td>{bagItem.price}</td>
                            </tr>

                        })
                    }

                </tbody>
            </table ></div>
    )
}

export { Table }
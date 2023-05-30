import Image from "next/image"

const Table = () => {
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

                    <tr>
                        <th scope="row">
                            <div style={{ maxWidth: '200px', maxHeight: '200px' }}>
                                <Image src="/child.jpg" style={{ objectFit: "cover" }} alt="An item in the bag image" width={200} height={150} />
                            </div>

                        </th>
                        <td >
                            <div className="me-4">
                                <span className="fw-normal">Product Name</span><br />
                                <small className="fw-light">Product Code: <span className="fw-normal">XFGTH</span></small>
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
                            <button type="button" className="btn btn-light border border-secondary rounded-0">x</button>
                        </td>
                        <td>₦23,000</td>
                    </tr>


                </tbody>
            </table ></div>
    )
}

export { Table }
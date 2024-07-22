import { Footer } from "@components/general/footer"

const OrderDetails = () => {
    return <>
        <div className="container-fluid">
            <h1 className="fs-5">ORDER 1</h1>
            <p>Lorem Ipsum <br></br> +23400000000 <br></br>lorem@email.com</p>
            <div className="overflow-auto">
                <table className="table  table-striped">
                    <thead className="table-dark">

                        <tr className="">
                            <th >Product ID</th>
                            <th >Store ID</th>
                            <th>PickUp Station ID</th>
                            <th >Product Name</th>
                            <th >Store Name</th>
                            <th >Vendor Phone</th>
                            <th>Quantity</th>
                            <th>Size</th>
                            <th>Product Cost</th>
                            <th>Color</th>
                            <th>Current Status</th>
                            <th>Delivery Status</th>
                            <th>Delivery Address</th>
                            <th>Delivery Cost</th>
                            <th>Pending Date</th>
                            <th>Confirmed Date</th>
                            <th>Shipped Date</th>
                            <th>Delivered Date</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>@mdo</td>
                            <td>Larry the Bird</td>
                            <td>Otto</td>
                            <td>@mdo</td>

                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>@mdo</td>
                            <td>Larry the Bird</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>@mdo</td>
                            <td>Larry the Bird</td>
                            <td>Otto</td>
                            <td>@mdo</td>


                        </tr>


                    </tbody>
                </table></div>
        </div>
        <Footer />
    </>
}

export default OrderDetails
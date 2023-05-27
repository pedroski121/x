import Image from "next/legacy/image"
const CartModal = () => {
    return (
        <>
            <div className="modal fade" id="cartModal" aria-labelledby="cartModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add to Bag</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="row modal-body d-flex justify-content-center">
                            <div className="col-12 text-center">
                                <Image src='/men/shoes.jpg' alt="Cart Image" className="rounded" height={200} width={200} objectFit="cover" />
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <p className="display-6 fs-5 ">Black Suede Suit - <span className="fw-bold">₦2000</span></p>
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center">

                                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups for item sizes">

                                    <div className="btn-group  d-flex flex-wrap" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-outline-dark">42</button>
                                        <button type="button" className="btn btn-outline-dark">43</button>
                                        <button type="button" className="btn btn-outline-dark">44</button>
                                        <button type="button" className="btn btn-outline-dark">45</button>
                                        <button type="button" className="btn btn-outline-dark">46</button>
                                        <button type="button" className="btn btn-outline-dark">47</button>


                                    </div>
                                </div></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light rounded-0 border border-dark" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-dark rounded-0">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { CartModal }
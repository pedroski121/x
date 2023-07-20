import Link from "next/link"
export const AccountOverviewDetails = () =>{
    return (
        <>
        <div className="mx-5 d-block d-md-none">
          <Link href={"/account/address-book"}> <button type="button" className="btn btn-outline-dark m-1 rounded-0">Address Book</button></Link>
           <button type="button" className="btn btn-outline-dark m-1 rounded-0">Manage Account</button>
        </div>
        <section className="row gap-2 justify-content-center mt-3">

            <div className="col-10 col-md-5 ">
            <div className="card border-0" style={{height:"220px"}}>
            <div className="card-header border border-dark text-dark fw-bold  fs-6">
                ACCOUNT DETAILS
            </div>
            <div className="card-body border border-dark border-top-0">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text"><span className="bi bi-envelope-fill"></span> obipedrodevtest@gmail.com <br></br>
                <span className="bi bi-telephone-fill"></span> +234 816 000 0000</p>
            </div>
            </div>
            </div>
            
            <div className="col-10 col-md-5 mt-3 mt-md-0">
            <div className="card  border-0" style={{height:"220px"}}>
            <div className="card-header border border-dark text-dark fw-bold fs-6 d-flex flex-row justify-content-between">
                ADDRESS BOOK
                <Link href="/account/address-book" className="btn btn-outline-dark rounded-5 p-0 border-0 px-1"><i className="bi bi-pencil"></i></Link>
            </div>
            <div className="card-body border border-dark border-top-0">
                <h5 className="card-title">Shipping Address</h5>
                <p className="card-text">...</p>
                <p> Umuahia, Abia</p>

            </div>
            </div>
            </div>
        </section>
        </>
    )
}
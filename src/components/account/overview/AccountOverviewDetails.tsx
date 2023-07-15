import Link from "next/link"
export const AccountOverviewDetails = () =>{
    return (
        <div className="col-md-9 shadow-lg pb-5 pd-md-0">
        <h4 className= "m-0">Account Overview</h4>
        <hr className="m-0 mb-2 mt-1 text-secondary"/>
        <div className="mx-5 d-block d-md-none">
        <button type="button" className="btn btn-outline-dark m-1 rounded-0">Manage Account</button>
<button type="button" className="btn btn-outline-dark m-1 rounded-0">Address Book</button>
</div>
        <section className="row gap-2 justify-content-center mt-3">

            <div className="col-10 col-md-5">
            <div className="card rounded-0 border-0" style={{height:"220px"}}>
            <div className="card-header border border-dark text-dark fw-bold rounded-0 fs-6">
                ACCOUNT DETAILS
            </div>
            <div className="card-body border border-dark border-top-0">
                <h5 className="card-title">Pedro Obi</h5>
                <p className="card-text"><span className="bi bi-envelope-fill"></span> obipedrodevtest@gmail.com <br></br>
                <span className="bi bi-telephone-fill"></span> +234 816 000 0000</p>
            </div>
            </div>
            </div>
            <div className="col-10 col-md-5 mt-3 mt-md-0">
            <div className="card rounded-0 border-0" style={{height:"220px"}}>
            <div className="card-header border border-dark text-dark fw-bold rounded-0 fs-6 d-flex flex-row justify-content-between">
                ADDRESS BOOK
                <Link href="#" className="link-dark"><i className="bi bi-vector-pen"></i></Link>
            </div>
            <div className="card-body border border-dark border-top-0">
                <h5 className="card-title">Shipping Address</h5>
                <p className="card-text">...</p>
                <p> Umuahia, Abia</p>

            </div>
            </div>
            </div>
        </section>
    </div>
    )
}
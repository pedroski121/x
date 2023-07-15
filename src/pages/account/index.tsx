import { Footer } from "@components/general/footer"
import { NavBar } from "@components/general/navbar"
import Link from "next/link"

const AccountOverview = () =>{
    return <>
        <NavBar/>
        <div className="container-fluid">
            
            <div className="row mt-4 justify-content-between">
                <div className="col-md-3 border d-none d-md-block  border-dark p-0">
<div className=" d-flex flex-column justify-content-between" style={{height:"80vh"}}>
<div className="d-grid">
    <button className="btn btn-outline-dark rounded-0 border-end-0 border-bottom-0 border-top-0 fw-bold">My X Account</button>
    <button className="btn btn-outline-dark rounded-0 border-end-0 border-bottom-0 fw-bold">Orders</button>
    <button className="btn btn-outline-dark rounded-0 border-end-0 border-bottom-0 fw-bold">Wishlist</button>
    <button className="btn btn-outline-dark rounded-0 border-end-0 border-bottom-0 fw-bold">Manage Account</button>
    <button className="btn btn-outline-dark rounded-0 border-end-0 fw-bold">Address Book</button>

    </div>
    <div className="d-grid">
    <button className="btn btn-danger rounded-0 fw-bold">Sign Out</button>
    </div>
    </div>
    </div>
                <div className="col-md-9 shadow-lg pb-5 pd-md-0">
                    <h4 className= "m-0">Account Overview</h4>
                    <hr className="m-0 mb-2 mt-1 text-secondary"/>
                    <div className="mx-5 d-block d-md-none">
                    <button type="button" className="btn btn-outline-dark m-1">Manage Account</button>
  <button type="button" className="btn btn-outline-dark m-1">Address Book</button>
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
            </div>
        </div>
        <Footer/>
   </>
}

export default AccountOverview
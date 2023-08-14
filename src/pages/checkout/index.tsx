import { Footer } from "@components/general/footer";
import { NextPage } from "next";

const CheckOut: NextPage = () => {
    return <>
        <header className="d-flex flex-wrap justify-content-between py-2 px-2 border-bottom ">
            <h1 className="fw-bold fs-6 text-secondary">DELIVERY</h1>
            <section >
                <span className="text-dark"> <i className="bi bi-1-circle-fill"></i> Delivery - </span>
                <span className="text-secondary"> <i className="bi bi-2-circle-fill"></i> Payment -  </span>
                <span className="text-secondary"> <i className="bi bi-3-circle-fill"></i> Review </span>
            </section>
        </header>
        <section className="container">
            <div>
                <div className="d-flex flex-column">
                    <h2 className="fs-5 mt-3">Select a Pick-up station</h2>
                    <div className="alert alert-danger alert-dismissible fade show mt-1 " role="alert">
                        <strong>Coming Soon!</strong> Other delivery options
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            </div>
            <form>
                <select className="form-select shadow-none border border-dark" aria-label="Default select example">
                    <option selected>Region</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select className="form-select mt-2 shadow-none border border-dark" aria-label="Default select example">
                    <option selected>City</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </form>
            <div className="mt-3">
                <h3 className="fs-5">Stations</h3>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-dark list-group-item-action active" aria-current="true">
                        <div className="d-flex w-100 flex-column">
                            <h5 className="mb-1">Ohafia Station</h5>
                            <p>No.13 Ohafia Street <br />Behind Slot House </p>
                            <span>Umuahia, Abia State</span>
                        </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-dark ">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">List group item heading</h5>
                            <small className="text-body-secondary">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small className="text-body-secondary">And some muted small print.</small>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action list-group-item-dark ">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">List group item heading</h5>
                            <small className="text-body-secondary">3 days ago</small>
                        </div>
                        <p className="mb-1">Some placeholder content in a paragraph.</p>
                        <small className="text-body-secondary">And some muted small print.</small>
                    </a>
                </div>
            </div>
        </section>
        <Footer />
    </>
}

export default CheckOut
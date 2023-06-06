// import HomeCss from './Home.module.css'

const ExploreNav = () => {
    return <>
        <div className="row m-3">
            <section className="col-sm-12 order-2 order-md-1 col-md-3 ">
                <div className={`d-flex fw-bold h1 justify-content-center justify-content-md-start mt-2 mt-md-0`}>
                    <i className="bi bi-lightning-charge-fill"></i> New In</div>
            </section>
            <section className="col-sm-12 order-1 order-md-2 col-md-9">
                <div className={`d-flex justify-content-center justify-content-md-end `}>
                    <div className="btn-group me-2" role="group">
                        <button type="button" className="btn btn-outline-dark fw-bold active">Women</button>
                        <button type="button" className="btn btn-outline-dark fw-bold">Men</button>
                    </div>
                    <button type="button" className="btn btn-outline-dark fw-bold me-1">Filter</button>
                    <button className="btn btn-outline-dark fw-bold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"><span> Explore</span></button>
                </div>
            </section>
        </div>
    </>
}

export { ExploreNav }
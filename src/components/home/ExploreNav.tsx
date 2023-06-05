import HomeCss from './Home.module.css'

const ExploreNav = () => {
    return <>
        <div className="row mt-3">
            <section className="col-4 col-md-3"><div className={`fw-bold h2 ${HomeCss.explore_text} me-2`}><i className="bi bi-lightning-charge-fill"></i> New In</div></section>
            <section className="col-8 col-md-9">
                <div className={`d-flex justify-content-end ${HomeCss.btns}`}>
                    <div className="btn-group me-2" role="group">
                        <button type="button" className="btn btn-outline-dark fw-bold active border-0">Women</button>
                        <button type="button" className="btn btn-outline-dark fw-bold">Men</button>
                    </div>
                    <button className="btn btn-outline-dark fw-bold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"><span> Explore</span></button>
                </div>
            </section>
        </div>
    </>
}

export { ExploreNav }
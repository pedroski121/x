import { dancingScript } from "@utils/font"

export const EmptyBag = () => {
    return (
        <section className="row justify-content-center">
            <div className="text-center col-12" style={{ transform: 'skew(12deg)' }}>
                <i className="bi bi-handbag" style={{ fontSize: '200px' }}></i>
            </div>
            <div className={`col-12 text-center  `}>
                <h6 className={`fw-bold ${dancingScript.className}`} style={{ fontSize: '30px' }}>Hey, it feels so light!</h6>
                <p className={`text-secondary fs-5 ${dancingScript.className}`}>There is nothing in your bag let add some items</p>
                <button className="btn btn-outline-dark rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"> Explore</button>
            </div>
        </section>
    )
}
import { FC } from "react"

interface ICheckoutHeader {
    activePage: string
}

const CheckoutHeader: FC<ICheckoutHeader> = ({ activePage }) => {
    return <header className="d-flex flex-column flex-md-row justify-content-between py-2 px-2 border-bottom ">
        <h1 className="fw-bold fs-6 text-secondary">{activePage.toUpperCase()}</h1>
        <section>
            <span className={`${activePage === 'delivery' ? 'text-dark' : 'text-secondary'}`}> <i className="bi bi-1-circle-fill"></i> Delivery - </span>
            <span className={`${activePage === 'review' ? 'text-dark' : 'text-secondary'}`}> <i className="bi bi-2-circle-fill"></i> Review -  </span>
            <span className={`${activePage === 'payment' ? 'text-dark' : 'text-secondary'}`}> <i className="bi bi-3-circle-fill"></i> Payment </span>
        </section>
    </header>
}

export default CheckoutHeader
const OrdersHeader = () => {
    return (<>
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-1">
                                <button className="btn btn-outline-dark active rounded-0">All status</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-warning mx-1 rounded-0">Pending</button>

                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-secondary  mx-1 rounded-0">On progress</button>

                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-success  mx-1 rounded-0">Delivered</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-danger  mx-1 rounded-0">Failed</button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    </>)
}

export default OrdersHeader
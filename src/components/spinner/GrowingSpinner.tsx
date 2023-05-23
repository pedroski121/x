const GrowingSpinner = () => {
    return (<div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-grow text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>)
}

export { GrowingSpinner }
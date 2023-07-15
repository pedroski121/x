import { useDynamicPath } from "@hooks/useDynamicPath"

export const AccountSideBar = () => {
    const {currentPagePath} = useDynamicPath()
    return (
        <div className="col-md-3 border d-none d-md-block  border-dark p-0">
        <div className=" d-flex flex-column justify-content-between" style={{height:"80vh"}}>
        <div className="d-grid">
            <button className={`btn btn-outline-dark rounded-0 ${currentPagePath === '/account' ? 'active' : ''} border-end-0 border-bottom-0 border-top-0 fw-bold`}>My X Account</button>
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
    )
} 
import { useDynamicPath } from "@hooks/general/useDynamicPath"
import { useRouter } from "next/router"

import { useClerk } from "@clerk/nextjs"

export const AccountSideBar = () => {
    const { signOut } = useClerk();
    const router = useRouter()

    const navigateTo = (page: string) => {
        router.push(page)
    }

    const { currentPagePath } = useDynamicPath()
    return (
        <div className="col-md-3 border d-none d-md-block  border-dark p-0">
            <div className=" d-flex flex-column justify-content-between" style={{ height: "80vh" }}>
                <div className="d-grid">
                    <button onClick={() => navigateTo('/account')} className={`btn btn-outline-dark rounded-0 ${currentPagePath === '/account' ? 'active' : ''} border-end-0 border-bottom-0 border-top-0 fw-bold`}>
                        Overview
                    </button>
                    <button onClick={() => navigateTo('/account/orders')} className={`btn btn-outline-dark rounded-0 ${currentPagePath === '/account/orders' ? 'active' : ''} border-end-0 border-bottom-0 fw-bold`}>
                        Orders
                    </button>
                    <button onClick={() => navigateTo('/account/wish-list')} className={`btn btn-outline-dark rounded-0 ${currentPagePath === '/account/wish-list' ? 'active' : ''} border-end-0 border-bottom-0 fw-bold`}>
                        WishList
                    </button>
                    <button onClick={() => navigateTo('/account/address-book')} className={`btn btn-outline-dark rounded-0  ${currentPagePath === '/account/address-book' || currentPagePath === '/account/address-book/edit' ? 'active' : ''} border-end-0 border-bottom-0 fw-bold`}>
                        Address Book
                    </button>
                    <button className={`btn btn-outline-dark ${currentPagePath === '/account/manage-account' ? 'active' : ''} rounded-0 border-end-0 fw-bold`} onClick={() => navigateTo('/account/manage-account')}>
                        Manage Account
                    </button>

                </div>
                <div className="d-grid">
                    <button className="btn btn-danger rounded-0 fw-bold" onClick={() => signOut()}>
                        Sign out
                    </button>
                </div>
            </div>
        </div>
    )
} 
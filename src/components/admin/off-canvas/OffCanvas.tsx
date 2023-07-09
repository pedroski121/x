import { useRouter } from "next/router";
import { HomeIcon } from "@components/HomeIcon"
import { useDynamicPath } from "@hooks/useDynamicPath";
import { ActivePages } from "@lib/types/admin";

export const OffCanvas = () => {
    const router = useRouter()
    const currentAdminPage = useDynamicPath()[0]
    const changePage = (adminPage: string) => {
        if (adminPage == "users"){
            adminPage = "users/1"
        }
        router.push({ pathname: `/admin/${adminPage}` })
    }
    return (
        <>

            <button className="btn btn-dark rounded-1 px-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAdmin" aria-controls="offcanvasAdmin">
                Navigate Admin
            </button>

            <div className={`offcanvas offcanvas-start `} data-bs-backdrop="static" id="offcanvasAdmin" aria-labelledby="offcanvasAdminLabel">
                <div className="offcanvas-header">
                    <HomeIcon />
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body p-0">
                    <div className="btn-group-vertical-large d-grid gap-3" role="group" aria-label="buttons to navigate the admin page">
                        <button type="button" onClick={() => changePage(ActivePages.SUMMARY)} data-bs-dismiss="offcanvas" className={`btn btn-outline-dark rounded-0 text-capitalize ${currentAdminPage == ActivePages.SUMMARY ? 'active' : ''}`}>{ActivePages.SUMMARY}</button>
                        <button type="button" onClick={() => changePage(ActivePages.USERS)} data-bs-dismiss="offcanvas" className={`btn btn-outline-dark rounded-0 text-capitalize ${currentAdminPage == ActivePages.USERS ? 'active' : ''} `}>{ActivePages.USERS}</button>
                        <button type="button" onClick={() => changePage(ActivePages.PRODUCTS)} data-bs-dismiss="offcanvas" className={`btn btn-outline-dark rounded-0 text-capitalize ${currentAdminPage == ActivePages.PRODUCTS ? 'active' : ''} `}>{ActivePages.PRODUCTS}</button>
                        <button type="button" onClick={() => changePage(ActivePages.ORDERS)} data-bs-dismiss="offcanvas" className={`btn btn-outline-dark rounded-0 text-capitalize ${currentAdminPage == ActivePages.ORDERS ? 'active' : ''} `}>{ActivePages.ORDERS}</button>
                    </div>
                </div>
            </div>

        </>
    )
}

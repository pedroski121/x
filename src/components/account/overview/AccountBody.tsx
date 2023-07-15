import { AccountOverviewDetails } from "./AccountOverviewDetails"
import { AccountSideBar } from "./AccountSideBar"
export const AccountBody = () => {
    return <>
        <div className="container-fluid">
            
            <div className="row mt-4 justify-content-between">
                <AccountSideBar/>
                <AccountOverviewDetails/>           
            </div>
        </div>
    </>
}
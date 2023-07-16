import { AccountSideBar } from "./AccountSideBar"
import { ReactNode } from "react"
export const AccountBody = ({children, sectionHeading}:{children:ReactNode, sectionHeading:string}) => {
    return <>
        <div className="container-fluid">
            
            <div className="row mt-4 justify-content-between">
                    <AccountSideBar/>
                <div className="col-md-9 shadow-lg pb-5 pd-md-0">
                    <h4 className= "m-0">{sectionHeading}</h4>
                    <hr className="m-0 mb-2 mt-1 text-secondary"/>
                    <div style={{height:"65vh", overflowY:'scroll', overflowX:'hidden'}}>

                    {children}
                    </div>
                </div>         
            </div>
        </div>
    </>
}
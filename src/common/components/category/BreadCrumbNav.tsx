import Link from "next/link";
import { FC } from "react"

type BreadCrumbNavType = {
    currentpage:string;
}

const BreadCrumbNav:FC<BreadCrumbNavType> = ({currentpage}) => {
    return (
        <>
            <header className="d-flex flex-wrap justify-content-center py-2 border-bottom ">
           <div className=" mb-1 mb-md-0 me-md-auto text-dark text-decoration-none">
           <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/" legacyBehavior><a className="link-dark">Home</a></Link></li>
                <li className="breadcrumb-item active text-capitalize" aria-current="page">{currentpage}</li>
              </ol>
            </nav>
      </div>

    </header>
        </>
    )
}
export {BreadCrumbNav}
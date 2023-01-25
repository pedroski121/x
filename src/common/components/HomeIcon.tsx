import Link from "next/link";

const ToHomeIcon = () => {
    return (
        <Link href="/" legacyBehavior>
        <a className="d-flex align-items-center  mb-lg-0 me-lg-auto text-dark text-decoration-none">
            <span className='fs-4 ps-5 fw-bold' ></span>
           <span className="fs-4 fw-bold">X</span>
        </a>
         </Link>
    )
}

export {ToHomeIcon}
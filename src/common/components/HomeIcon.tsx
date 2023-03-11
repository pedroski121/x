import Link from "next/link";

const ToHomeIcon = () => {
    return (
        <Link href="/" legacyBehavior>
        <a className="align-items-center text-dark text-decoration-none">
           <span className="fs-4 p-3 fw-bold">X</span>
        </a>
         </Link>
    )
}

export {ToHomeIcon}
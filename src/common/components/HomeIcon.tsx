import Link from "next/link";
import { FC } from "react";
type HomeIcon ={
    iconColor?:string;
}

const ToHomeIcon:FC<HomeIcon> = (prop) => {
    const {iconColor='text-dark'} = prop;
    return (
        <Link href="/" legacyBehavior>
        <a className={`align-items-center ${iconColor} text-decoration-none`}>
           <span className="fs-4 p-3 fw-bold">X</span>
        </a>
         </Link>
    )
}

export {ToHomeIcon}
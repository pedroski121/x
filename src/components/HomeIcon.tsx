import Link from "next/link";
import { FC } from "react";
type THomeIcon = {
    iconColor?: string;
}

const HomeIcon: FC<THomeIcon> = (prop) => {
    const { iconColor = 'text-dark' } = prop;
    return (
        <Link href="/" className={`align-items-center ${iconColor} text-decoration-none border border-dark`}>
            <span className="fs-4 p-3 fw-bold">X</span>
        </Link>
    )
}

export { HomeIcon }
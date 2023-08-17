import Link from "next/link";
import { FC } from "react";
type THomeIcon = {
    iconColor?: string;
}

const HomeIcon: FC<THomeIcon> = (prop) => {
    const { iconColor = 'text-dark' } = prop;
    return (
        <Link href="/" className={`align-items-center ${iconColor} text-decoration-none  px-2 py-1 `}>
            <span className="fs-4 fw-bold">Slucent</span>
        </Link>
    )
}

export { HomeIcon }
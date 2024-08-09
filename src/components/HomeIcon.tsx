import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
type THomeIcon = {
    iconColor?: string;
}

const HomeIcon: FC<THomeIcon> = (prop) => {
    const { iconColor = 'text-dark' } = prop;
    return (
        <Link style={{ height: '60px' }} href='/'>
            <div style={{ height: "100%", width: "60px", position: "relative", backgroundColor: 'white' }}>
                <Image src="/icons/SlucentLogo.svg" style={{ objectFit: "cover" }} alt={`Brand Icon`} fill />
            </div>
        </Link>

    )
}

export { HomeIcon }
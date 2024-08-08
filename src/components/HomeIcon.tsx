import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import SlucentLogo from '../../public/icons/SlucentLogo.svg'
type THomeIcon = {
    iconColor?: string;
}

const HomeIcon: FC<THomeIcon> = (prop) => {
    const { iconColor = 'text-dark' } = prop;
    return (
        // <a className="navbar-brand bg-dark" href="#">
        //     {/* <img src="/icons/SlucentLogo.svg" alt="" width="30" height="24" /> */}
        //     <Image src="/icons/SlucentLogo.svg" alt="My Icon" width={100} height={100} />

        // </a>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                {/* <img src="/icons/SlucentLogo.svg" alt="" width="30" height="100" className="d-inline-block align-text-top" /> */}
                <Image src="/icons/SlucentLogo.svg" alt="My Icon" className="d-inline-block align-text-top bg-dark" width={100} height={100} />

                Lucent
            </a>
        </div>

    )
}

export { HomeIcon }
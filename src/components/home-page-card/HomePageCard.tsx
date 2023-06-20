import { FC } from "react"
import Link from "next/link";
import Image from "next/legacy/image";
import { cardTypes } from "./types";

export const HomePageCard: FC<cardTypes> = (props) => {
    const { name, imageURL, link, altText = `${name} image on home page` } = props;
    return (
        <div className="col-xs-12 col-sm-6 p-3 ">
            <div className="card bg-dark ">
                <Image src={imageURL} alt={altText} width={300} height={200} layout="responsive" className="card-img" objectFit="cover" />
                <div className="card-img-overlay">
                    <Link href={link} className="stretched-link text-decoration-none">
                        <h5 className="card-title text-white">{name}</h5>
                    </Link>
                </div>
            </div></div>
    )
}
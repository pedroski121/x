import {FC} from "react"
import Link from "next/link";
import Image from "next/legacy/image";
import { cardTypes } from "./types";

export const HomePageCard:FC<cardTypes> = (props) => {
    const {name, imageURL, link, altText="card image on home page"} = props;
    return (
        <div className="card bg-dark">
        <Image src={imageURL} alt={altText} width={300} height={200} layout="responsive" className="card-img"/>
        <div className="card-img-overlay">
        <Link href={link} legacyBehavior>
             <a className="stretched-link text-decoration-none">
                <h5 className="card-title  text-white">{name}</h5>
             </a>
        </Link>
       </div>
       </div>
    )
}
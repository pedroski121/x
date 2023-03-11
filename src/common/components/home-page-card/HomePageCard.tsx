import {FC} from "react"
import Link from "next/link";
import { cardTypes } from "./types";

export const HomePageCard:FC<cardTypes> = (props) => {
    const {name, imageURL, link, altText="card image on home page"} = props;
    return (
        <div className="card bg-dark">
        <img src={imageURL} className="card-img" alt={altText}/>
        <div className="card-img-overlay">
        <Link href={link} legacyBehavior>
        <a className="stretched-link text-decoration-none"><h5 className="card-title  text-white">{name}</h5></a>
            </Link>
       </div>
       </div>
    )
}
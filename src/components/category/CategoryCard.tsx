import { FC } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { ISubCategory } from "@lib/types/category";

export const CategoryCard: FC<ISubCategory> = ({ imgURL, altText = "sub category card image goes here", name, categoryName }) => {
    return (
        <>
            <div className="col-5 col-md-3">
                <div className="card">
                    <Image src={imgURL} alt={altText} width={300} height={200} layout="responsive" className="card-img" objectFit="cover" />
                    <div className="card-body p-2 p-md-3">
                        <Link href={{ pathname: `/categories/${categoryName}/${name}` }} className="stretched-link text-decoration-none text-dark">
                            <p className="card-text text-capitalize fw-bold">{name}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

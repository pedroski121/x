import { FC } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { ICategoryCard } from "./types";

export const CategoryCard: FC<ICategoryCard> = ({ imgSrc, queryString, altText = "image goes here", subCategoryName, categoryName }) => {
    return (
        <>
            <div className="col-6 col-md-4 p-2">
                <div className="card">
                    <Image src={imgSrc} alt={altText} width={300} height={200} layout="responsive" className="card-img" objectFit="cover" />
                    <div className="card-body">
                        <Link href={{ pathname: `/categories/${categoryName}/${queryString}` }} className="stretched-link text-decoration-none text-dark">
                            <p className="card-text text-capitalize fw-bold">{subCategoryName}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

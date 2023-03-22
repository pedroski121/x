import Link from "next/link"
import { FC } from "react";
import Image from "next/legacy/image";

interface ICategoryCard {
    imgSrc: string;
    queryString: string;
    categoryName: string;
    subCategoryName: string;
    altText?: string;
}

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

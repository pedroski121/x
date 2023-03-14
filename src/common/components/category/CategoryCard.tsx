import Link from "next/link"
import { FC } from "react";
import Image from "next/legacy/image";

interface ICategoryCard  {
    ImgSrc:string;
    QueryString:string;
    CategoryName:string;
    SubCategoryName:string;
    AltText?:string;
}

export const CategoryCard:FC<ICategoryCard> = ({ImgSrc,QueryString,AltText="image goes here",SubCategoryName, CategoryName}) =>{
    return (
        <>
            <div className="col-6 col-md-4 p-2">     
                <div className="card">
                     <Image src={ImgSrc} alt={AltText} width={300} height={200} layout="responsive" className="card-img" objectFit="cover"/>

                     <div className="card-body">
                        <Link href={{pathname:`/products/${CategoryName}`,query:{"sub-category":QueryString} }} className="stretched-link text-decoration-none text-dark">
                            <p className="card-text fw-bold">{SubCategoryName}</p>
                        </Link>
                     </div>
                     </div>
               </div>
        </>
    )
}

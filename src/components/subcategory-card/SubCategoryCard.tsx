import { useState, FC, MouseEvent, useEffect } from "react";
import Link from "next/link";
import SubCategoryCss from './SubCategoryCard.module.css';
import Image from "next/legacy/image";
import { IProductsData } from "@lib/types/product";

import { CartModal } from "@general-components/cart";

const SubCategoryCard: FC<IProductsData> = (props) => {
  const [cartEmpty, setCartEmpty] = useState(false);
  const [favorite, setFavorite] = useState(false)
  const handleToggle = (e: MouseEvent, eventType: string) => {
    e.preventDefault();
  }
  return (<>
    <div className="col-6 col-md-3 mb-2 ">
      <div className={`card rounded-0 `}>
        <Link href={{ pathname: `/categories/${props.activePaths[0]}/${props.activePaths[1]}/${props.name.split(" ").join("-")}-${props._id}` }} className=" text-decoration-none text-dark">
          <Image src={props.imgURLs ? props.imgURLs[0] : '/default-product-not-found.jpg'} alt={props.imgAltText} width={300} height={200} layout="responsive" className="card-img" objectFit="cover" />
        </Link>
        <div className="card-body">

          <p className="card-title d-flex flex-column fw-bold">
            {props.name.length > 28 ? `${props.name.substring(0, 28)}...` : props.name}  <span className={`text-secondary mt-1`}>₦{props.price}</span>
          </p>

        </div>
        <div className="card-footer d-flex justify-content-between ">
          <span data-bs-toggle="modal" data-bs-target="#cartModal" className={`bi ${cartEmpty ? 'bi-bag-check-fill text-dark' : 'bi-bag-plus'} ${SubCategoryCss.pointer} h4`}></span>
          <span onClick={(e) => { handleToggle(e, 'favorite') }} className={`bi ${favorite ? ' bi-heart-fill text-dark' : 'bi-heart'} ${SubCategoryCss.pointer} h4`}></span>
        </div>
      </div>
    </div>
    <CartModal />
  </>)
}
export { SubCategoryCard }
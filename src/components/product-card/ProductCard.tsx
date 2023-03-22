import { useState, FC, MouseEvent } from "react";
import Link from "next/link";
import { dancingScript } from "@utils/font";
import ProductCardCss from './ProductCard.module.css';

interface IProductCard {
  title: string,
  price: number,
  imgURL: string,
  altText?: string,
}

const ProductCard: FC<IProductCard> = (props) => {
  const [cartEmpty, setCartEmpty] = useState(false);
  const [favorite, setFavorite] = useState(false)
  const handleToggle = (e: MouseEvent, eventType: string) => {
    e.preventDefault();
    eventType == 'cartEmpty' ? setCartEmpty(!cartEmpty) : setFavorite(!favorite);
  }
  return (<>

    <div className="col-6 col-md-3 pb-2">
      <div className="card ">
        <Link href={{ pathname: `/product/${props.title}` }} className=" text-decoration-none text-dark">
          <img src={props.imgURL} className="card-img-top " alt={props.altText} />
        </Link>
        <div className="card-body">

          <h6 className="card-title d-flex justify-content-between ">
            {props.title}  <span className={`text-secondary ${dancingScript.className}`}>₦{props.price}</span>
          </h6>

        </div>
        <div className="card-footer d-flex justify-content-between ">
          <span onClick={(e) => handleToggle(e, 'cartEmpty')} className={`bi ${cartEmpty ? 'bi-bag-check-fill text-dark' : 'bi-bag-plus'} ${ProductCardCss.pointer} h4`}></span>
          <span onClick={(e) => { handleToggle(e, 'favorite') }} className={`bi ${favorite ? ' bi-heart-fill text-dark' : 'bi-heart'} ${ProductCardCss.pointer} h4`}></span>
        </div>
      </div>
    </div>

  </>)
}
export { ProductCard }
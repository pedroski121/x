import { useState, useContext, FC, useEffect } from "react";
import Link from "next/link";
import SubCategoryCss from './SubCategoryCard.module.css';
import Image from "next/legacy/image";
import { IProductsData } from "@lib/types/product";
import { BagModal } from "@components/general/bag-modal";
import { EAvailableBagAction, IModalDetails, BagDefaultValues } from "@lib/types/bag";
import { BagContext } from "@contexts/BagContext";



const SubCategoryCard: FC<IProductsData> = (props) => {
  const [itemInBag, setItemInBag] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [modalDetails, setModalDetails] = useState<IModalDetails>({ name: props.name, _id: props._id, price: props.price, imgURLs: props.imgURLs });
  const { dispatch, bagState } = useContext(BagContext)

  const handleToggle = (bag: string) => {
    if (bag === 'bag') {
      const inBagorNot = bagState?.some(bag => bag._id === props._id)
      setItemInBag(inBagorNot)
      setModalDetails({ ...modalDetails, inBag: inBagorNot })
    }

  }
  useEffect(() => {
    handleToggle('bag')
  }, [bagState])

  useEffect(() => {
    dispatch ? dispatch({ type: EAvailableBagAction.IN_BAG }) : BagDefaultValues
  }, [])

  return (<>

    <div className="col-6 col-md-3 mb-2 ">
      <div className={`card rounded-2 `}>
        <Link href={{ pathname: `/categories/${props.activePaths[0]}/${props.activePaths[1]}/${props.name.split(" ").join("-")}-${props._id}` }} className=" text-decoration-none text-dark">
          <Image src={props.imgURLs ? props.imgURLs[0] : '/default-product-not-found.jpg'} alt={props.imgAltText} width={300} height={200} layout="responsive" className="card-img rounded-2" objectFit="cover" />
        </Link>
        <div className="card-body p-0 ms-2">

          <p className="card-title d-flex flex-column fs-6">
            {/* Check if the product name is greater than a certain number. If it is, use '...' to represent the rest */}
            {props.name.length > 20 ? `${props.name.substring(0, 25)}...` : props.name} <b className={`text - dark mt - 1`}>₦{props.price}</b>
          </p>

        </div>
        <div className="card-footer d-flex justify-content-between p-0 bg-white border-0 ms-2 me-2">
          <span data-bs-toggle="modal" onClick={() => handleToggle('bag')} data-bs-target={`#bagModal${modalDetails._id} `} className={`bi ${itemInBag ? 'bi-bag-check-fill text-dark' : 'bi-bag-plus'} ${SubCategoryCss.pointer} h4`}></span>
          <span className={`bi ${favorite ? ' bi-heart-fill text-dark' : 'bi-heart'} ${SubCategoryCss.pointer} h4`}></span>
        </div>
      </div>
    </div>
    <BagModal {...modalDetails} />

  </>)
}
export { SubCategoryCard }
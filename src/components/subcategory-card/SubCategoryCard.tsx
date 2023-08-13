import { FC } from "react";
import Link from "next/link";
import SubCategoryCss from './SubCategoryCard.module.css';
import Image from "next/legacy/image";
import { BagModal } from "@components/general/bag-modal";
import { useCardState } from "@hooks/sub-category/useCardState";
import { TSubCategoryCard } from "@lib/types/category/ISubCategory";


const SubCategoryCard: FC<TSubCategoryCard> = ({productsData, activePaths, wishListData, changeWish}) => {
  const { itemInBag, modalDetails, handleToggle } = useCardState(productsData);

  return (<>

    <div className="col-6 col-md-3 mt-3">
      <div className={`card rounded-2 `}>
        <Link href={{ pathname: `/categories/${activePaths[0]}/${activePaths[1]}/${productsData.name.split(" ").join("-")}-${productsData._id}` }} className=" text-decoration-none text-dark">
          <Image src={productsData.imgURLs ? productsData.imgURLs[0] : '/default-product-not-found.jpg'} alt={productsData.imgAltText} width={300} height={200} layout="responsive" className="card-img rounded-2" objectFit="cover" />
        </Link>
        <div className="card-body p-0 ms-2">

          <p className="card-title d-flex flex-column fs-6">
            {/* Check if the product name is greater than a certain number. If it is, use '...' to represent the rest */}
            {productsData.name.length > 20 ? `${productsData.name.substring(0, 25)}...` : productsData.name} <b className={`text - dark mt - 1`}>₦{productsData.price}</b>
          </p>

        </div>
        <div className="card-footer d-flex justify-content-between p-0 bg-white border-0 ms-2 me-2">
          <span data-bs-toggle="modal" onClick={() => handleToggle('bag')} data-bs-target={`#bagModal${modalDetails._id} `} className={`bi ${itemInBag ? 'bi-bag-check-fill text-dark' : 'bi-bag-plus'} ${SubCategoryCss.pointer} h4`}></span>

          <span onClick = {()=>changeWish(productsData._id, wishListData)} className={` bi ${wishListData.map(wish => wish.productID).includes(productsData._id) ? ' bi-heart-fill text-dark' :  'bi-heart'}  ${SubCategoryCss.pointer} h4`}></span>
        </div>
      </div>
    </div>
    <BagModal {...modalDetails} />

  </>)
}
export { SubCategoryCard }
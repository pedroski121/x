import { FC, useState } from "react";
import Link from "next/link";
import SubCategoryCss from './SubCategoryCard.module.css';
import Image from "next/legacy/image";
import { BagModal } from "@components/general/bag-modal";
import { TSubCategoryCard } from "@lib/types/category/ISubCategory";
import { BorderSpinner } from "@components/general/spinners";
import { useAuth } from "@clerk/nextjs";
import { SignInButton } from '@clerk/nextjs';
import { usePathname } from "next/navigation";
const SubCategoryCard: FC<TSubCategoryCard> = ({ productsData, activePaths, wishListData, changeWish, changingWish, bagItems }) => {
  const [addingItemToBag, setAddingItemToBag] = useState<string>('')
  const { isSignedIn } = useAuth()
  const pathname = usePathname()

  const itemInBag = bagItems?.filter(item => item.productID === productsData._id)

  const addItemToBag = (_id: string): void => {
    setAddingItemToBag(_id)
  }

  return (<>

    <div className="col-6 col-md-3">
      <div className={`card mt-1 rounded-2 `}>
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
          {
            addingItemToBag !== productsData._id
              ? <span data-bs-toggle="modal" data-bs-target={`#bagModal${productsData._id} `}
                className={`bi ${itemInBag && itemInBag.length !== 0 ? 'bi-bag-check-fill text-dark' : 'bi-bag-plus'} ${SubCategoryCss.pointer} h4`}></span>
              : <BorderSpinner size={false} />
          }

          {
            !isSignedIn ? <SignInButton mode='modal' forceRedirectUrl={pathname}>
              <button className="nav-link border-0 bg-transparent">
                <i className='bi bi-heart fs-5'></i>
              </button>
            </SignInButton> : changingWish !== productsData._id
              ? <span onClick={() => changeWish(productsData._id, wishListData)}
                className={` bi ${wishListData.map(wish => wish.productID).includes(productsData._id) ? ' bi-heart-fill text-dark' : 'bi-heart'}  ${SubCategoryCss.pointer} h4`}></span>
              : <BorderSpinner size={false} />
          }
        </div>
      </div>
    </div>

    <BagModal itemInBag={itemInBag} addItemToBag={addItemToBag} product={productsData} />

  </>)
}
export { SubCategoryCard }
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { TBag } from '@lib/types/bag'
import { IProductsData } from '@lib/types/product';
import { Dispatch, SetStateAction } from 'react';
type TModalBody = {
    itemInBag: TBag[] | undefined;
    size: string;
    BagModalCss: {
        readonly [key: string]: string;
    };
    product: IProductsData;
    setSize: Dispatch<SetStateAction<string>>;
    amountOfItemsToBeBought: number;

    changeAmountOfItemsToBeBought: (action: string) => void;
}

export const ModalBody = ({ itemInBag, size, BagModalCss, product, setSize, amountOfItemsToBeBought, changeAmountOfItemsToBeBought }: TModalBody) => {

    return <>
        {
            itemInBag && itemInBag.length !== 0 ? <div className={`${BagModalCss.check} d-flex justify-content-center align-items-center text-dark`}>
                <span className="bi bi-check-circle"></span>

            </div> :
                <div className={`row modal-body d-flex justify-content-center`}>
                    <div className="col-12 text-center">
                        <Image src={product.imgURLs[0]} alt={`${product.name} image`} style={{ objectFit: 'cover' }} className="rounded-0" height={200} width={200} />
                    </div>
                    <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                        <p className="fs-5 ">{product.name} - <span className="fw-bold">₦{product.price}</span></p>
                        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div className="btn-group me-2" role="group" aria-label="First group">
                                {
                                    product && product.sizes && product.sizes.length !== 0
                                        ? product.sizes.map((itemSize: string) => {
                                            const key = uuidv4()

                                            return (
                                                <button key={key} type="button" onClick={() => setSize(itemSize)} className={`btn btn-outline-dark ${itemSize === size ? 'active' : ''} rounded-0`}>
                                                    {itemSize}
                                                </button>)

                                        })

                                        : <></>
                                }

                            </div>
                        </div>
                        <div className="btn-group mt-3" role="group" aria-label="Button group to select the quantity of a product to buy">
                            <button type="button"
                                onClick={() => changeAmountOfItemsToBeBought('minus')} className="btn btn-light  border border-secondary">-</button>
                            <span className="input-group-text bg-white rounded-0">{product.quantity <= 0 ? '0' : amountOfItemsToBeBought}</span>
                            <button type="button"
                                onClick={() => changeAmountOfItemsToBeBought('plus')} className="btn btn-light  border border-secondary">+</button>
                        </div>
                    </div>

                </div>

        }
    </>
}
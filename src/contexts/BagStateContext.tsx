import { ReactNode, createContext, useState } from 'react'

import { IModalDetails, TBagState } from '@lib/types/bag';


interface IBagStateContext {
    modalDetails: IModalDetails;
    itemInBag: boolean;
    toggleModalDetails?(props: IModalDetails, inBag: boolean): void
    toggleItemInBag?(bagState: TBagState[], props: IModalDetails): void;
}

const initialModalDetails = { name: '', price: 0, _id: '', imgURLs: [''] }
export const BagStateContext = createContext<IBagStateContext>({ modalDetails: initialModalDetails, itemInBag: false })


export const BagStateProvider = ({ children }: { children: ReactNode }) => {
    const [itemInBag, setItemInBag] = useState<boolean>(false);
    const [modalDetails, setModalDetails] = useState<IModalDetails>({ name: '', price: 0, _id: '', inBag: itemInBag, imgURLs: [''] })

    function toggleModalDetails(props: IModalDetails, inBag: boolean) {

        setModalDetails(props)
        console.log(props)
    }
    function toggleItemInBag(bagState: TBagState[], props: IModalDetails): void {
        const inBagorNot = bagState.some(bag => bag._id === props._id)
        setItemInBag(inBagorNot)
        toggleModalDetails(props, inBagorNot)
    }

    return <>
        <BagStateContext.Provider value={{ itemInBag, modalDetails, toggleItemInBag, toggleModalDetails }}>
            {children}
        </BagStateContext.Provider>
    </>
}

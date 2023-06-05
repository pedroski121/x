import React, { ReactNode, useReducer } from "react";
import { TBagState, EAvailableBagAction, BagDefaultValues, TBagAction, TBagContextState } from "@lib/types/bag";
import { getItem, setItem, removeItem } from "@utils/local-storage";


const bagReducer = (state: TBagState[], action: TBagAction): TBagState[] => {

    switch (action.type) {
        case EAvailableBagAction.ADD_TO_BAG:

            // find if the item is in the bag. If not in bag add it, otherwise return the previous state
            const itemIndex = state.findIndex((item) => item._id === action.payload._id);
            if (itemIndex === -1) {
                const newBagState = [...state, { ...action.payload }];
                setItem('bag', newBagState)
                return newBagState;
            }
            return [...state]

        case EAvailableBagAction.REMOVE_FROM_BAG:
            const newBagItems = state.filter(item => item._id !== action.payload._id)
            setItem('bag', newBagItems)
            return newBagItems;

        case EAvailableBagAction.EMPTY_BAG:
            removeItem('bag')
            return [];
        case EAvailableBagAction.IN_BAG:
            const itemsInbag = getItem('bag')
            return itemsInbag ? itemsInbag : BagDefaultValues
        default:
            return state
    }
}

export const BagContext = React.createContext<TBagContextState>({ bagState: BagDefaultValues })

export const BagProvider = ({ children }: { children: ReactNode }) => {

    const [bagState, dispatch] = useReducer(bagReducer, BagDefaultValues)
    return (
        <BagContext.Provider value={{ bagState, dispatch }}>
            {children}
        </BagContext.Provider>
    )

}
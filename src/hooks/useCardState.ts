import { useState, useContext, FC, useEffect } from "react";
import { IProductsData } from "@lib/types/product";
import { EAvailableBagAction, IModalDetails, BagDefaultValues } from "@lib/types/bag";
import { BagContext } from "@contexts/BagContext";

interface IUseCardState {
    itemInBag:boolean;
    favorite:boolean;
    modalDetails:IModalDetails;
    handleToggle(bag:string) : void
}

export const useCardState = (props:IProductsData):IUseCardState => {
    const [itemInBag, setItemInBag] = useState<boolean>(false);
    const [favorite, setFavorite] = useState<boolean>(false);

    const [modalDetails, setModalDetails] = useState<IModalDetails>({
      name: props.name,
      _id: props._id,
      price: props.price,
      imgURLs: props.imgURLs,
    });
  
    const { dispatch, bagState } = useContext(BagContext);
  
    const handleToggle = (bag: string) => {
      if (bag === "bag") {
        const inBagorNot = bagState?.some((bag) => bag._id === props._id);
        setItemInBag(inBagorNot);
        setModalDetails({ ...modalDetails, inBag: inBagorNot });
      }
    };
  
    useEffect(() => {
      handleToggle("bag");
    }, [bagState]);
  
    useEffect(() => {
      dispatch
        ? dispatch({ type: EAvailableBagAction.IN_BAG })
        : BagDefaultValues;
    }, []);
  
    return { itemInBag, favorite, modalDetails, handleToggle };
}
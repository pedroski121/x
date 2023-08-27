import { useState, useContext, useEffect } from "react";
import { IProductsData } from "@lib/types/product";
import { EAvailableBagAction, IModalDetails, BagDefaultValues } from "@lib/types/bag";
import { BagContext } from "@contexts/BagContext";

interface IUseCardState {
    itemInBag:boolean;
    modalDetails:IModalDetails;
    handleToggle(bag:string) : void
}


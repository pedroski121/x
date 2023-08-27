import { IProductsData } from "../product";
import { TBag } from "./TBag";
export interface IModalDetails {
    itemInBag?: TBag[] | undefined;
    addItemToBag?:(_id:string)=>void;
    product:IProductsData
  }
import { EAvailableBagAction } from "./EAvailableBagAction"
import { TBagState } from "./TBagState"
export type TBagAction =
    | { type: EAvailableBagAction.ADD_TO_BAG, payload: TBagState }
    | { type: EAvailableBagAction.REMOVE_FROM_BAG, payload: {_id:string}}
    | {type: EAvailableBagAction.EMPTY_BAG}
    | {type: EAvailableBagAction.IN_BAG} 



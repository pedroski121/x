import { TBagState } from "./TBagState"
import { TBagAction } from "./TBagAction"
export type TBagContextState = {
    bagState: TBagState[],
    dispatch?: React.Dispatch<TBagAction>
}
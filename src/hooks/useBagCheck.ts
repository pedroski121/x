import { useState, useEffect , useContext} from "react";
import { BagContext } from "@contexts/BagContext";

export const useBagCheck = () =>{
    const [sumOfItems, setSumOfItems] = useState<number>(0)
    const {bagState} = useContext(BagContext)

    function bagEmptyStatus ():boolean {
       return bagState.length == 0 ||  (bagState.length <= 1 && bagState[0]?.name == '')
    }

    useEffect(() => {
        setSumOfItems(bagState.reduce((acc, obj) => {
            return acc + obj.price
        }, 0))
    }, [bagState])

    return {sumOfItems, bagEmptyStatus}
}
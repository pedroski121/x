import {useState, FC,MouseEvent} from "react";
import { dancingScript } from "@utils/font";


const ProductCard:FC = () => {
  const [cartEmpty, setCartEmpty] = useState(false);
  const [favorite, setFavorite] = useState(false)
  const handleToggle = (e:MouseEvent,eventType:string) =>{
    e.preventDefault();
    eventType == 'cartEmpty' ? setCartEmpty(!cartEmpty) : setFavorite(!favorite);
  }
    return (<>

          <div className="col-6 col-md-3 p-3">
          <div className="card">
             <img src="/men/suit.jpg" className="card-img-top" alt="..."/> 
             <div className="card-body">
                <h6 className="card-title d-flex justify-content-between ">
                  Black Tuxedo  <span className={`text-secondary ${dancingScript.className}`}>$100</span></h6>
                <div className="d-flex justify-content-between">
                  <a> <span onClick={(e)=>handleToggle(e,'cartEmpty')} className={`bi ${cartEmpty ? 'bi-cart-check-fill text-success': 'bi-cart-plus'} h5`}></span></a>
                  <span onClick={(e)=>{handleToggle(e,'favorite')}} className={`bi ${favorite ? ' bi-heart-fill text-danger': 'bi-heart'} h5`}></span>
                </div>
              </div>
            </div>
          </div>
          
    </>)
}
export {ProductCard}
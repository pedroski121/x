import { LeftSide } from './left-side';
import { ProductCarousal } from './right-side/ProductCarousel';
import { RightSide } from './right-side/RightSide';

const ProductDetails = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row vh-100 flex-sm-row-reverse">
                    <RightSide />

                    <LeftSide />
                </div>
            </div>



        </>
    )
}
export { ProductDetails }

import { LeftSide } from './left-side';
import { RightSide } from './right-side';

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

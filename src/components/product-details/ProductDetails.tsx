import { LeftSide } from './left-side';
import { RightSide } from './right-side';
import { NextPage } from 'next';


const ProductDetails: NextPage = () => {
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

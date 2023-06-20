
import { FC } from 'react';
import { ProductsForEachCategory, Carousel, Extras } from './body-components';

const Body: FC = () => {
    return <>
        <Carousel />
        <ProductsForEachCategory />
        {/* <Extras /> */}

    </>
}

export { Body }
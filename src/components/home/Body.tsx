
import { FC } from 'react';
import { SubCategoriesForEachCategory, Carousel, Extras } from './body-components';

const Body: FC = () => {
    return <>

        <Carousel />
        <Extras />

        <SubCategoriesForEachCategory />


    </>
}

export { Body }
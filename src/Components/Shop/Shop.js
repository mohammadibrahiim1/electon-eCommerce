import React, { useContext } from 'react';
import { ProductContext } from '../Context/Context';

const Shop = () => {
    const ring = useContext(ProductContext);
    return (
        <div>
            this is {ring} page 
        </div>
    );
};

export default Shop;
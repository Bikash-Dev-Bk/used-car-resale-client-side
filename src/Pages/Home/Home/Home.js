import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import ProductsCategory from '../ProductsCategory/ProductsCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <ProductsCategory></ProductsCategory>
        </div>
    );
};

export default Home;
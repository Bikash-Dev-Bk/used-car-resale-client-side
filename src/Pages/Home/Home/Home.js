import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import ProductsCategory from '../ProductsCategory/ProductsCategory';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <ProductsCategory></ProductsCategory>
            <Services></Services>
        </div>
    );
};

export default Home;
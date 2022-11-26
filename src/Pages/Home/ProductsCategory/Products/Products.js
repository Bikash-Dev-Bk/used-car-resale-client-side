import React from 'react';
import ProductCard from './ProductCard';
import { useLoaderData } from 'react-router-dom';

const Products = () => {

    const products = useLoaderData();
    console.log('inside products',products);

    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
            {
                products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            }
            
        </div>
    );
};

export default Products;
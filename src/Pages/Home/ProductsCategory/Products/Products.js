import React from 'react';
import ProductCard from './ProductCard';
import { useLoaderData } from 'react-router-dom';

const Products = () => {

    const products = useLoaderData();

    return (
        <section>
            <h2 className='text-center font-bold text-4xl text-orange-600 my-10'>Book Your Car Now!</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
            {
                products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            }
            
        </div>
        </section>
    );
};

export default Products;
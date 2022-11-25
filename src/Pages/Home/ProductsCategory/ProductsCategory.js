import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductsCategory = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
        <div className='my-10'>
            <h2 className='font-bold text-5xl text-center text-orange-600'>Choose your Brand</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
                {
                    products.map((product) => 
                        <ProductCard key={product._id} product={product}></ProductCard>
                    )
                }
            </div>
        </div>
    );
};

export default ProductsCategory;
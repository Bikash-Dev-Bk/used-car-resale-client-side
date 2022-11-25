import React from 'react';
import './ProductCard.css';

const ProductCard = ({product}) => {
    const {title, img} = product;

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl product-card">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
            </div>
        </div>
    );
};

export default ProductCard;
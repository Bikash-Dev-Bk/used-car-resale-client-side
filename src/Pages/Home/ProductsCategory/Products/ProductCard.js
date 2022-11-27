import React from 'react';

const ProductCard = ({product}) => {
    const { img, name, location, resale_price, original_price, years_of_use, time ,seller_name } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Location: {location}</p>
                <p>Original Price: {original_price}</p>
                <p>Resale Price: {resale_price}</p>
                <p>Year of use: {years_of_use}</p>
                <p>Seller Name: {seller_name}</p>
                <p>Posted Time: {time}</p>
                <div className="card-actions justify-center">
                <label htmlFor="booking-modal" className="btn btn-primary">Book now</label>
                </div>
            </div>
        </div>
        
    );
};

export default ProductCard;
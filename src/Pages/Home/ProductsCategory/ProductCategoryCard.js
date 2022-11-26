import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCategoryCard.css';

const ProductCategoryCard = ({productCategory}) => {
    const {_id, category_name, img} = productCategory;

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl product-category-card">
            <Link to={`/category/${_id}`}>
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{category_name}</h2>
                </div>     
            </Link>
        </div>
    );
};

export default ProductCategoryCard;
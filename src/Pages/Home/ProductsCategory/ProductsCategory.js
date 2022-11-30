import React, { useEffect, useState } from "react";
import ProductCategoryCard from "./ProductCategoryCard";

const ProductsCategory = () => {
  const [productsCategory, setProductsCategory] = useState([]);

  useEffect(() => {
    fetch(
      "https://used-products-resale-server-side-three.vercel.app/categories"
    )
      .then((res) => res.json())
      .then((data) => setProductsCategory(data));
  }, []);

  return (
    <div className="my-10">
      <h2 className="font-bold text-5xl text-center text-orange-600">
        Choose your Brand
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
        {productsCategory.map((productCategory) => (
          <ProductCategoryCard
            key={productCategory._id}
            productCategory={productCategory}
          ></ProductCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsCategory;

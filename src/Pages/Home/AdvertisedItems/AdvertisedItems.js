import React, { useEffect, useState } from "react";

const AdvertisedItems = () => {
  const [advertisedItems, setAdvertisedItems] = useState([]);
  console.log("INSIDE ADVERTISE", AdvertisedItems);

  useEffect(() => {
    fetch(
      `https://used-products-resale-server-side-three.vercel.app/category/products/advertise`
    )
      .then((res) => res.json())
      .then((data) => {
        setAdvertisedItems(data);
        console.log("INSIDE ADVERTISE", data);
      });
  }, []);
  return (
    <>
      {advertisedItems.length && (
        <div>
          <h2 className="text-6xl font-bold text-center my-10 text-orange-600">
            Advertised Items
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
          {advertisedItems.map((advertisedItem) => {
            return (
              <div className="card card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src={advertisedItem.img} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{advertisedItem.name}</h2>
                  <p>Location: {advertisedItem.location}</p>
                  <p>Original Price: {advertisedItem.original_price}</p>
                  <p>Resale Price: {advertisedItem.resale_price}</p>
                  <p>Year of use: {advertisedItem.years_of_use}</p>
                  <p>Posted Time: {advertisedItem.time}</p>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      )}
    </>
  );
};

export default AdvertisedItems;

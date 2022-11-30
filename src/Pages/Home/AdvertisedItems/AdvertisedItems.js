import React, { useEffect, useState } from "react";

const AdvertisedItems = () => {
  const [advertisedItems, setAdvertisedItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/category/products/advertise`)
      .then((res) => res.json())
      .then((data) => setAdvertisedItems(data));
  }, []);
  return (
    <>
      {advertisedItems.length && (
        <div className="h-96">
          <h2 className="text-6xl font-bold text-center my-10 text-orange-600">
            This is Advertised Items
          </h2>
        </div>
      )}
    </>
  );
};

export default AdvertisedItems;

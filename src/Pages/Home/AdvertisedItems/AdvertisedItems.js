import React, { useEffect, useState } from "react";

const AdvertisedItems = () => {
  const [advertisedItems, setAdvertisedItems] = useState([]);
  console.log("INSIDE ADVERTISE",AdvertisedItems);

  useEffect(() => {
    fetch(`http://localhost:5000/category/products/advertise`)
      .then((res) => res.json())
      .then((data) => {
        setAdvertisedItems(data)
        console.log("INSIDE ADVERTISE",data);
      });
  }, []);
  return (
    <>
    {
      advertisedItems.length &&
      <div >
    <h2 className="text-6xl font-bold text-center my-10 text-orange-600">
      Advertised Items
    </h2>
    
      { (
        
          advertisedItems.map(advertisedItem =>{
            return (
            
          <div className="card card-side bg-base-100 shadow-xl mb-5">
            <img width="300px" src={advertisedItem.img} alt="Movie"/>
            <div className="card-body">
              <h2 className="card-title font-bold text-5xl">{advertisedItem.name}</h2>
              <p className="font-bold text-4xl"><span className="text-orange-600">Price:</span> {advertisedItem.resale_price}</p>
            </div>
          </div>
        )
          })
        
        
      )}
      </div>
}
    </>
  );
};

export default AdvertisedItems;

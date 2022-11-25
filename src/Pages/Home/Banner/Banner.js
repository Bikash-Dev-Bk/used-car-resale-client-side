import React from 'react';
import banner from "../../../assets/images/banner.jpg";
import './Banner.css';

const Banner = () => {

    return (
        <div className=" relative w-full">
          <div className="banner-image">
            <img src={banner} alt="" className="w-full rounded-xl" />
          </div>
          <div className="absolute transform -translate-y-1/2 lg:left-24 left-8  top-1/3">
            <h1 className="text-5xl font-bold text-white banner-title">
              DISCOVER YOUR SPEED
            </h1>
            <p className="text-2xl text-white banner-text mt-6">Find your next car with us!</p>
          </div>
          <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 lg:left-24 left-8 mt-5 top-1/2">
            <button className="btn btn-outline btn-warning">Book Now</button>
          </div>
        </div>
    );
};

export default Banner;
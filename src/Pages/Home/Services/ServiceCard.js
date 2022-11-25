import React, { useEffect, useState } from 'react';

const ServiceCard = ({service}) => {

    const {img, title, description} = service;
    const [desc, setDesc] = useState([]);

    useEffect(() => {
      const desc = description.split("\n");
      setDesc(desc);
    }, [description]);

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-1/3" />
            </figure>
            <div className="card-body items-center ">
                <h2 className="card-title font-bold text-center">{title}</h2>
                <div>
                    {desc.map((description, index) => (
                        <p key={index} >
                        {description}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
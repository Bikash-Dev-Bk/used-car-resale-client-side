import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const [myProducts, setMyProducts] = useState([]);
    // console.log("inside my products",myProducts);
    useEffect(() => {
        fetch(`http://localhost:5000/category/products/${user.email}`)
        .then((res) => res.json())
          .then((data) => setMyProducts(data));
      },[user.email])

    return (
        <div>
            <h3 className="text-3xl font-bold mb-5" >My Products</h3>
            <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Sales Status</th>
                  <th>Delete</th>
                  <th>Advertise</th>
                </tr>
              </thead>
    
              {myProducts.map((product) => (
                <tbody key={product._id}>
                  
                    <tr>
                      <td>{product.name}</td>
                      <td>{product.resale_price}</td>
                      <td>
                        Available
                      </td>
                      <td>
                        <button className="btn btn-sm btn-error">Delete</button>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-outline btn-warning">Advertise</button>
                      </td>
                    </tr>
                  
                </tbody>
              ))}
            </table>
          </div>
        </div>
    );
};

export default MyProducts;
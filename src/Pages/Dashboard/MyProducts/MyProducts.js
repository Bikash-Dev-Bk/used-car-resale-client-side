import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/category/products/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  }, [user.email]);

  const handleIsAdvertise = (product) => {
    console.log(product);
    fetch(`http://localhost:5000/category/products/${product._id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        fetch(`http://localhost:5000/category/products/${user.email}`)
          .then((res) => res.json())
          .then((data) => setMyProducts(data));
      });
  };

  const handleDelete = (product) => {
    const agree = window.confirm(
      `Are you sure you want to delete: ${product.name}`
    );

    if (agree) {
      // console.log('deleting user with id: ', user._id)
      fetch(`http://localhost:5000/category/products/${product._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          if (data.deletedCount > 0) {
            alert("Product deleted successfully.");
            const remainingProducts = myProducts.filter(
              (prod) => prod._id !== product._id
            );
            setMyProducts(remainingProducts);
          }
        });
    }
  };

  return (
    <div>
      <h3 className="text-3xl font-bold mb-5">My Products</h3>
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
            <tbody key={product._id} product={product}>
              <tr>
                <td>{product.name}</td>
                <td>{product.resale_price}</td>
                <td>Available</td>
                <td>
                  <button
                    onClick={() => handleDelete(product)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    disabled={product?.isAdvertise}
                    className="btn btn-sm btn-outline btn-warning"
                    onClick={() => handleIsAdvertise(product)}
                  >
                    Advertise
                  </button>
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

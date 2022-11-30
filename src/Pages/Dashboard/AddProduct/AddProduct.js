import React, { useContext, useEffect, useState } from "react";
import "./AddProduct.css";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [condition, setCondition] = useState("good");
  const [categoryId, setCategoryId] = useState("");

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const [userinfo, setUserinfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserinfo(data));
  }, [user.email]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategoryId(data[0]?._id);
        setCategories(data);
      });
  }, []);

  const handleAddServices = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const original_price = event.target.original_price.value;
    const resale_price = event.target.resale_price.value;
    const description = event.target.description.value;
    const img = event.target.img.value;
    const time = event.target.time.value;
    const phone = event.target.phone.value;
    const seller_name = event.target.seller_name.value;
    const seller_email = event.target.seller_email.value;
    const years_of_use = event.target.years_of_use.value;
    const location = event.target.location.value;

    const product = {
      name,
      seller_name,
      seller_email,
      resale_price,
      original_price,
      description,
      img,
      category_id: categoryId,
      time,
      phone,
      years_of_use,
      location,
      condition,
    };
    console.log(
      name,
      resale_price,
      original_price,
      description,
      img,
      seller_name,
      condition
    );
    event.target.reset();

    fetch("http://localhost:5000/category/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newProduct = [...products, product];

        setProducts(newProduct);

        toast.success("Successfully added Product");
        setTimeout(() => {
          navigate("/dashboard/myproducts");
        }, 500);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h3 className="text-3xl font-bold mb-5">Add A Product</h3>
      <div className="App">
        <form onSubmit={handleAddServices} className="form">
          <div>
            <label>Choose category:</label>
            <br />
            <select
              className="select-field"
              onChange={(e) => setCategoryId(e.target.value)}
              name="category"
            >
              {categories.map((res, i) => {
                return (
                  <option key={i} value={res._id}>
                    {res.category_name}
                  </option>
                );
              })}
            </select>
          </div>
          <br />
          <input type="text" name="name" placeholder="Product Name" required />
          <br />
          <br />
          <input
            type="text"
            name="description"
            placeholder=" Description"
            required
          />
          <br />
          <br />
          <input
            type="text"
            name="original_price"
            placeholder="Original Price"
            required
          />
          <br />
          <br />
          <input
            type="text"
            name="resale_price"
            placeholder="Resale Price"
            required
          />
          <br />
          <br />
          <input type="text" name="location" placeholder="Location" required />
          <br />
          <br />
          <input
            type="text"
            name="years_of_use"
            placeholder="Years of use"
            required
          />
          <br />
          <br />
          <input type="text" id="img" placeholder=" img Url" required />

          <div>
            <label>Choose condition type:</label>
            <br />
            <select
              className="select-field"
              onChange={(e) => setCondition(e.target.value)}
              name="choice"
            >
              <option value="excellent">Excellent</option>
              <option value="fair">Fair </option>
              <option value="good">Good </option>
            </select>
          </div>
          <br />
          <input
            type="text"
            name="seller_name"
            disabled
            value={userinfo.name}
            placeholder="Seller Name"
            required
          />
          <br />
          <br />
          <input
            type="text"
            name="seller_email"
            disabled
            value={userinfo.email}
            placeholder="Seller Email"
            required
          />
          <br />
          <br />
          <input
            type="text"
            name="time"
            disabled
            value={moment(new Date()).format("MMMM Do YYYY, h:mm:ss a")}
            placeholder="Post Time"
            required
          />
          <br />
          <br />
          <input type="text" name="phone" placeholder="Phone Number" required />
          <br />
          <button className="btn btn-primary my-5" type="submit">
            Add Product
          </button>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

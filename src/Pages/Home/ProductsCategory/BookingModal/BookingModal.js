import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";

const BookingModal = ({ product }) => {
  console.log("product", product);
  const { user } = useContext(AuthContext);

  const [userinfo, setUserinfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserinfo(data));
  }, [user.email]);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;

    form.reset();
    console.log("inside modal", name, email, phone, location);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <input
                name="item"
                type="text"
                disabled
                value={product.name}
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="price"
                type="text"
                disabled
                value={product.resale_price}
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                disabled
                value={userinfo.name}
                placeholder="Your Name"
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                disabled
                value={userinfo.email}
                placeholder="Email Address"
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                className="input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Meeting location</span>
              </label>
              <input
                name="location"
                type="text"
                placeholder="Meeting location"
                className="input w-full input-bordered"
                required
              />
            </div>

            <div className="modal-action">
              <button>
                <label htmlFor="booking-modal" className="btn btn-primary">
                  Submit
                </label>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

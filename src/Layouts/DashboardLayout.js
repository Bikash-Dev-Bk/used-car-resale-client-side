import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {

  const { user } = useContext(AuthContext);

  console.log("inside dashboard layout",user)
  const [isAdmin] = useAdmin(user?.email)

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {
              isAdmin ?
              <>
                <li>
                <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
                <li>
                <Link to="/dashboard/allsellers">Add Sellers</Link>
                </li>
              </>
              :
              <>
                <li>
                <Link to="/dashboard">My Orders</Link>
                </li>
                <li>
                <Link to="/dashboard/myproducts">My Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/addproduct">Add A Product</Link>
                </li>
              </>
            
              
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

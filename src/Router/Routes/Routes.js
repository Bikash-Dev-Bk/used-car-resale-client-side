import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/ProductsCategory/Products/Products";
import InvalidPage from "../../Pages/InvalidPage/InvalidPage";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/category/:id",
        element: <PrivateRoute><Products></Products></PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/category/${params.id}`
          )
      },
      
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/dashboard/allbuyers",
        element: <AllBuyers></AllBuyers>
      },
      {
        path: "/dashboard/allsellers",
        element: <AllSellers></AllSellers>
      },
    ]
  },
  {
    path: "*",
    element: <InvalidPage></InvalidPage>,
  },
]);

export default router;

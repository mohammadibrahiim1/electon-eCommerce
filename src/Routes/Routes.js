import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Components/AboutUs/AboutUs";
import Cart from "../Components/Cart/Cart";
import ContactUs from "../Components/ContactUs/ContactUs";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import ProductsDetails from "../Components/ProductsDetails/ProductsDetails";
// import Shop from "../Components/Shop/Shop";
import Signin from "../Components/Signin/Signin";
import Root from "../Root/Root";
import Shop from "../Pages/Shop/Shop";
import WishList from "../Pages/WishList/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },

      {
        path: "/shop",
        element: <Shop></Shop>,
      },

      {
        path: "/productsDetails/:id",
        element: <ProductsDetails></ProductsDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/wishList",
        element: <WishList></WishList>,
      },
    ],
  },
]);

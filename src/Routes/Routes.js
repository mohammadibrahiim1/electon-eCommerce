import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Components/AboutUs/AboutUs";
import Blog from "../Components/Blog/Blog";
import ContactUs from "../Components/ContactUs/ContactUs";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Shop from "../Components/Shop/Shop";
import Root from "../Root/Root";

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
        path:'/home',
        element: <Home></Home>
      },
      // {
      //   path:'/blog',
      //   element:<Blog></Blog>
      // },
      {
         path:"/shop",
         element:<Shop></Shop>
      },
      {
        path:'/contact',
        element:<ContactUs></ContactUs>
      },
      {
        path:'/about',
        element:<AboutUs></AboutUs>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
    ],
  },
]);

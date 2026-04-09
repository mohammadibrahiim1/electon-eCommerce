import { createBrowserRouter } from "react-router-dom";

import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/auth/pages/Login";
import Register from "../pages/auth/pages/Register";
import Products from "../pages/products/pages/Products";
import Blogs from "../pages/blog/pages/Blogs";
import Home2 from "../pages/Home/Home2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home2",
        element: <Home2 />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "shop",
        element: <Products />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

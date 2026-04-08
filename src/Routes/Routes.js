import { createBrowserRouter } from "react-router-dom";

import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/auth/pages/Login";
import Register from "../pages/auth/pages/Register";

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
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Shared/Footer/Footer";
import HeaderNav from "../Shared/HeaderNav/HeaderNav";

const Root = () => {
  return (
    <div>
      <HeaderNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;

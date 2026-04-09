import { Outlet } from "react-router-dom";
import HeaderNav from "../Shared/HeaderNav/HeaderNav";
import Footer from "../Shared/Footer/Footer";

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

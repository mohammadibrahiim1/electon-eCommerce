import React from "react";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { FaCarSide } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";

// import { Link } from "react-router-dom";
// import { ProductContext } from "../../Components/Context/Context";
import "./Header.css";
import { Text } from "@mantine/core";

const Header = () => {
  // const { user, logOut } = useContext(ProductContext);
  // console.log(user);

  // const handleSignOut = () => {
  //   logOut()
  //     .then(() => {})
  //     .catch((error) => console.error(error));
  // };
  return (
    <div>
      <Text size={"lg"} bg={"gray"}>
        {" "}
        header{" "}
      </Text>
    </div>
  );
};

export default Header;

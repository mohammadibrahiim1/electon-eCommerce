import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <section>
        <div className="header-frame-container">
          <div>
            <small>Need help? Call us: (+98) 0234 456 789</small>
          </div>
          <div className="header-frame-1">
            <div>
              <small>
                <FaMapMarkerAlt />
              </small>
              <Link to="/">
                {" "}
                <small>Our store</small>
              </Link>
            </div>
            <div>
              <small>
                {" "}
                <FaCarSide />
              </small>
              <Link to="/">
                {" "}
                <small>Track your order</small>
              </Link>
            </div>
          </div>
        </div>
      </section>
    <section className="">
    <nav class="navbar navbar-expand-lg p-3">
  <div class="container">
    {/* <a href="https://ibb.co/HXbfSC7"><img src="https://i.ibb.co/qxc3SCB/logo-1.png" alt="logo-1" border="0"></a> */}
    <Link class="navbar-brand" to="#"><img src="https://i.ibb.co/qxc3SCB/logo-1.png" alt="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <form class="d-flex ms-lg-5 mt-md-3 mt-3 ms-md-5 " role="search">
        <input class="form-control me-2 w-75" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

      <ul class="navbar-nav m-auto mb-2 ms-sm-5 mt-sm-3  mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link me-4" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link me-4" to="/shop">Shop</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link me-4" to="/contact">Contact </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link me-4" to="/about">About Us</Link>
        </li>
      
      </ul>

      <div >
        <ul className=" navbar-nav m-auto mb-2 ms-sm-5 mt-sm-3 mb-lg-0">
        {/* <li class="nav-item">
          <Link class="nav-link" to="#"> <span className="me-1"><FaUser/></span>Sign in</Link>
        </li> */}
        <li class="nav-item">
          <Link class="nav-link" to="/login"> <span className="me-1"><FaUser/></span>Log in</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="#"> <span className="me-1"><FaShoppingCart/></span> Cart</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">  <span className="me-1"><FaHeart/></span> wish list</Link>
        </li>
        </ul>
      </div>
     
       
    </div>
  </div>
</nav>
    </section>
    
    </div>
  );
};

export default Header;

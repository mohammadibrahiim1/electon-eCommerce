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
              <Link href="/">
                {" "}
                <small>Our store</small>
              </Link>
            </div>
            <div>
              <small>
                {" "}
                <FaCarSide />
              </small>
              <Link href="/">
                {" "}
                <small>Track your order</small>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/qxc3SCB/logo-1.png" alt="logo-1" border="0"></a> */}
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link class="navbar-brand" href="#"><img src="https://i.ibb.co/qxc3SCB/logo-1.png" alt="logo" /></Link>
      <form class="d-flex ms-5 ps-5" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul class="navbar-nav ms-auto mb-2 gap-5 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" href="#"> <small>< FaUser style={{width:"18px", height:"18px"}}/></small> <small>sign in</small></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#"> <small> < FaHeart style={{width:"18px", height:"18px"}}/> </small> <small>wishlist</small></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link "> <small> < FaShoppingCart style={{width:"18px", height:"18px"}}/>  </small> <small>cart</small></Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
      </section>
    
    </div>
  );
};

export default Header;

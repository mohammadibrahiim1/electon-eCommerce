import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <section>
        {/* <!--====== FOOTER ONE PART START ======--> */}
        <footer class="footer-areLink footer-one">
          <div class="footer-widget">
            <div class="">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-sm-12 text-center text-lg-start text-md-start text-sm-center">
                  <div class="f-about">
                    <div class="footer-logo">
                      <Link to="/">
                        <img
                          src="https://i.ibb.co/qxc3SCB/logo-1.png"
                          alt="Logo"
                        />
                      </Link>
                    </div>
                    <p class="text">
                      64 st james boulevard <br />
                      hoswick , ze2 7zj
                    </p>
                  </div>
                  <div class="footer-icon-container">
                    <h5 class="download-title">find us!</h5>
                    <hr className="w-25 m-auto  pt-2 pb-2" />
                    <Link to="/">
                      <FaFacebook
                        className="text-secondary-emphasis me-3"
                        style={{ height: "22px", width: "22px" }}
                      />
                    </Link>

                    <Link to="/">
                      <FaInstagram
                        className="text-secondary-emphasis me-3"
                        style={{ height: "22px", width: "22px" }}
                      />
                    </Link>
                    <Link to="/">
                      <FaGoogle
                        className="text-secondary-emphasis me-3"
                        style={{ height: "22px", width: "22px" }}
                      />
                    </Link>
                    <Link to="/">
                      <FaYoutube
                        className="text-secondary-emphasis me-3"
                        style={{ height: "22px", width: "22px" }}
                      />
                    </Link>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-sm-12 text-center text-lg-start text-md-start text-sm-center mt-3">
                  <div class="footer-link">
                    <h6 class="footer-title">Company</h6>
                    <ul className="list-unstyled text-decoration-none">
                      <li>
                        <Link to="/">About</Link>
                      </li>
                      <li>
                        <Link to="/">Contact</Link>
                      </li>
                      <li>
                        <Link to="/">Marketing</Link>
                      </li>
                      <li>
                        <Link to="/">Awards</Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- footer link --> */}
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-12 text-center text-lg-start text-md-start text-sm-center  ">
                  <div class="footer-link ">
                    <h6 class="footer-title">Services</h6>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/">Products</Link>
                      </li>
                      <li>
                        <Link to="/">Business</Link>
                      </li>
                      <li>
                        <Link to="/">Developer</Link>
                      </li>
                      <li>
                        <Link to="/">Insights</Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- footer link --> */}
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-12 text-center text-sm-center text-md-start text-lg-start">
                  {/* <!-- Start Footer Contact --> */}
                  <div class="">
                    <h6 class="footer-title mt-4">Help & Suuport</h6>
                    <ul className="list-unstyled">
                      <li>
                        <i class=""></i> Madison Street,
                        NewYork, USA
                      </li>
                      <li>
                        <i class="lni lni-phone-set"></i> +88 556 88545
                      </li>
                      <li>
                        <i class="lni lni-envelope"></i> support@ayroui.com
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End Footer Contact --> */}
                </div>
              </div>
              {/* <!-- row --> */}
            </div>
            {/* <!-- container --> */}
          </div>
          {/* <!-- footer widget --> */}
          <div class="footer-copyright">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div
                    class="
                  copyright
                  text-center
                  d-md-flex
                  justify-content-between
                  align-items-center
                  "
                  >
                    <p class="text">
                      Copyright © 2024 AyroUI. All Rights Reserved
                    </p>
                    <ul class="social">
                      <li>
                        <Link to="/">
                          <i class="lni lni-facebook-filled"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i class="lni lni-twitter-original"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i class="lni lni-instagram-filled"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i class="lni lni-linkedin-original"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- copyright --> */}
                </div>
              </div>
              {/* <!-- row --> */}
            </div>
            {/* <!-- container --> */}
          </div>
          {/* <!-- footer copyright --> */}
        </footer>
        {/* <!--====== FOOTER ONE PART ENDS ======--> */}
      </section>
    </div>
  );
};

export default Footer;

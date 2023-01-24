import React from "react";
import Discount from "./Discount";
import "./Home.css";
import Other from "./Other";
import PopularProducts from "./PopularProducts";
import ProductSlider from "./ProductSlider";

const Home = () => {
  // <a href="https://imgbb.com/"><img src="https://i.ibb.co/0JwrvxF/8-1.png" alt="8-1" border="0"></a>
  // <a href="https://imgbb.com/"><img src="https://i.ibb.co/xMFvbvb/Frame-29.png" alt="Frame-29" border="0"></a>
  // <a href="https://imgbb.com/"><img src="https://i.ibb.co/LQ7TPqC/Frame-29-3.png" alt="Frame-29-3" border="0"></a>
  return (
    <div>
      <section class=" header-section mt-5">
        <div
          id="carouselExampleControls"
          class="carousel slide "
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active bg-white ps-5 pe-5  pb-3  mt-5">
              <div class="row">
                <div class="col-lg-7 d-flex align-items-center">
                  <div>
                    <h1>
                      Canon <br /> Camera
                    </h1>
                    <p>
                      This is the best headphone in the world for people who
                      just want to waste time in front of funky world.
                    </p>
                    <h1>$400</h1>
                    <div className="mt-4">
                      <div class="btn shop-button">shop Now</div>
                      <div class="btn view-button">view more</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 carousel-img ">
                  <img src="https://i.ibb.co/0JwrvxF/8-1.png" alt="..." />
                </div>
              </div>
            </div>
            <div class="carousel-item active bg-white  p-5 pe-5   pb-3  border-0 mt-5">
              <div class="row">
                <div class="col-lg-7 d-flex align-items-center ">
                  <div>
                    <h1>
                      Canon <br /> Camera
                    </h1>
                    <p>
                      This is the best x-box in the world for people who just
                      want to waste time in front of fake sports.
                    </p>
                    <h1>$400</h1>
                    <div className="mt-4">
                      <div class="btn shop-button">shop Now</div>
                      <div class="btn view-button">view more</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 carousel-img">
                  <img src="https://i.ibb.co/0JwrvxF/8-1.png" alt="..." />
                </div>
              </div>
            </div>
            <div class="carousel-item active bg-white p-5 pe-5  pb-3  mt-5">
              <div class="row">
                <div class="col-lg-7 d-flex align-items-center ">
                  <div>
                    <h1>
                      Canon <br /> Camera
                    </h1>
                    <p>
                      This is the best tv in the world for people who just want
                      to waste time in front of tv.
                    </p>
                    <h1>$400</h1>
                    <div className="mt-4">
                      <div class="btn shop-button">shop Now</div>
                      <div class="btn view-button">view more</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 carousel-img">
                  <img src="https://i.ibb.co/0JwrvxF/8-1.png" alt="..." />
                </div>
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* <section className="product-slider"></section> */}

      <ProductSlider></ProductSlider>
      <PopularProducts></PopularProducts>
      <Discount></Discount>
      <Other></Other>

    </div>
  );
};

export default Home;

import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaHeart, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "./ProductsDetails.css";

const ProductsDetails = () => {
  const productsDetails = useLoaderData();
  console.log(productsDetails);

  const {
    title,
    description,
    price,
    brand,
    rating,
    thumbnail,

    images,
    category,
    stock,
    discountPercentage,
  } = productsDetails;

  return (
    <div>
      <section class="py-20 overflow-hidden mt-5 pt-5 mb-5 pb-5">
        <div className="w-3/4 mx-auto">
          <div className="flex gap-5">
            <div>
              <img
                src={thumbnail}
                alt=""
                className="rounded-xl"
                style={{ width: "647px", height: "461px" }}
              />
            </div>

            <div>
              <div className="product-info">
                <h2>{title}</h2>
                <p>${price}</p>
                <p>rating : {rating}</p>
                <p>{stock}</p>
                <hr />
                <p>Hurry up! only {stock} product left in stock</p>
                <p>Brand : {brand}</p>

                <p>
                  Quantity : <button className=" border btn-xs">-</button>
                  <button className="border  btn-xs">0</button>
                  <button className="border  btn-xs">+</button>
                </p>
              </div>

              <div className="flex gap-4">
                <button className="btn btn-warning rounded-full text-xs px-12">
                  add to cart
                </button>
                <button className="btn btn-warning rounded-full text-xs px-12">
                  buy it now
                </button>
                <button className="btn btn-circle btn-outline">
                  <FaHeart className="text-xs" />
                </button>
              </div>
              <hr />
              <div>
                <p>category : {category}</p>
                <p className="flex gap-4">
                  share :{" "}
                  <span className="flex gap-4">
                    <Link to="/">
                      {" "}
                      <FaFacebookF style={{ width: "18px", height: "18px" }} />
                    </Link>
                    <Link to="/">
                      {" "}
                      <FaInstagram style={{ width: "21px", height: "21px" }} />
                    </Link>
                    <Link to="/">
                      {" "}
                      <FaYoutube style={{ width: "21px", height: "21px" }} />
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsDetails;

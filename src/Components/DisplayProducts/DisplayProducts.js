import React from "react";
// import { Link } from "react-router-dom";
import "./DisplayProducts.css";

const DisplayProducts = ({ product }) => {
  console.log(product);
  const { title, price, rating, thumbnail, description, _id } = product;
  return (
    <div>
      <div
        className="card w-96 bg-base-100 shadow-xl  "
        style={{ width: "320.83px", height: "420px" }}
      >
        <figure className="p-5">
          <img
            className="rounded-xl"
            src={thumbnail}
            alt="Shoes"
            style={{
              width: "300px",
              height: "168px",
            }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description.slice(0, 35)}...</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{rating}</div>
            <div className="badge badge-outline">${price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;

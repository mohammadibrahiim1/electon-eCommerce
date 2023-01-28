import React from "react";
import { Link } from "react-router-dom";
import "./DisplayProducts.css";

const DisplayProducts = ({ product }) => {
  console.log(product);
  const { title, price, rating, thumbnail } = product;
  return (
    <div>
      <div class="col">
        <Link to="/" class="card text-decoration-none" style={{ width: "308px", height: "313px" }}>
          <img
            src={thumbnail}
            class="card-img-top m-auto mt-2"
            alt="..."
            style={{ width: "282px", height: "168px" }}
          />
          <div class="card-body">
            <h5 class="card-title">{title.slice(0,20)}</h5>
            <p class="card-text text-dark">Price: ${price}</p>
            <p class="card-text text-dark">Ratings: {rating}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DisplayProducts;

import React from "react";
// import { Link } from "react-router-dom";
import "./DisplayProducts.css";
import { Link, useLoaderData } from "react-router-dom";
// import { useProducts } from "../DataContext/DataContext";
// import { actionTypes } from "../../state/productState/actionTypes";

const DisplayProducts = ({ product }) => {
  // const { dispatch } = useProducts();
  // const productsDetails = useLoaderData();
  // console.log(productsDetails);
  // console.log(product);
  const { title, price, rating, thumbnail, description, _id } = product;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl  " style={{ width: "320.83px", height: "420px" }}>
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
            {/* <button className="btn btn-primary">details</button> */}
            <Link className="badge badge-outline" to={`/productsDetails/${_id}`}>
              Details
            </Link>
            <div className="badge badge-outline">rating:{rating}</div>
            <div className="badge badge-outline">${price}</div>
          </div>
        </div>
        <button className="btn" 
        // onClick={() => dispatch({ type: actionTypes.ADD_TO_CART, payload: { product } })}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default DisplayProducts;

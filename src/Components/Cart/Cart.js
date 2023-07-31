import React from "react";
import "./Cart.css";
import { useProducts } from "../DataContext/DataContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    state: { cart, loading, error },
  } = useProducts();

  let content;

  if (loading) {
    content = <p>loading</p>;
  }
  if (error) {
    content = <p> some thing went wrong</p>;
  }

  if (!loading && !error && cart.length === 0) {
    content = <p> nothing to show , product list is empty</p>;
  }

  if (!loading && !error && cart.length) {
    content = cart.map((product) => (
      <>
        <div className="card w-96 bg-base-100 shadow-xl  " style={{ width: "320.83px", height: "420px" }}>
          <figure className="p-5">
            <img
              className="rounded-xl"
              src={product.thumbnail}
              alt="Shoes"
              style={{
                width: "300px",
                height: "168px",
              }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {product.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{product.description.slice(0, 35)}...</p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">details</button> */}
              <Link className="badge badge-outline" to={`/productsDetails/${product._id}`}>
                Details
              </Link>
              <div className="badge badge-outline">rating:{product.rating}</div>
              <div className="badge badge-outline">${product.price}</div>
            </div>
          </div>
          {/* <button className="btn" onClick={() => dispatch({ type: actionTypes.ADD_TO_CART, payload: { product } })}>
          add to cart
        </button> */}
        </div>
      </>
    ));
  }
  return <div>{content}</div>;
};

export default Cart;

import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actionCreators/productActions";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  // const {
  //   state: { cart, loading, error },
  // } = useProducts();

  // let content;

  // if (loading) {
  //   content = <p>loading</p>;
  // }
  // if (error) {
  //   content = <p> some thing went wrong</p>;
  // }

  // if (!loading && !error && cart.length === 0) {
  //   content = <p> nothing to show , product list is empty</p>;
  // }

  return (
    <div>
      <p>{cart.length}</p>
      {cart?.map((product) => (
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
              <p>{product.description?.slice(0, 35)}...</p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">details</button> */}
                <button className="badge badge-outline" onClick={() => dispatch(removeFromCart(product))}>
                  remove
                </button>
                <div className="badge badge-outline">rating:{product.rating}</div>
                <div className="badge badge-outline">${product.price}</div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Cart;

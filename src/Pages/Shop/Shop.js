import React, { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import DisplayProducts from "../../Components/DisplayProducts/DisplayProducts";
import { useProducts } from "../../Components/DataContext/DataContext";
import "./Shop.css";

const Shop = () => {
  const {
    state: { products, loading, error },
  } = useProducts();

  let content;

  if (loading) {
    content = <p>loading</p>;
  }
  if (error) {
    content = <p> some thing went wrong</p>;
  }

  if (!loading && !error && products.length === 0) {
    content = <p> nothing to show , product list is empty</p>;
  }

  if (!loading && !error && products.length) {
    content = products.map((product) => <DisplayProducts product={product} key={product._id}></DisplayProducts>);
  }

  return (
    <div>
      <section>{content}</section>
    </div>
  );
};

export default Shop;

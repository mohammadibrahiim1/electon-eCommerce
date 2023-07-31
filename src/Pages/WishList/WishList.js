import React from "react";
import { useProducts } from "../../Components/DataContext/DataContext";
import TopRatedProduct from "../../Components/ToRatedProduct/TopRatedProduct";

const WishList = () => {
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
    content = products
      .filter((product) => product.rating > 4.7)
      .map((product) => <TopRatedProduct product={product} key={product._id}></TopRatedProduct>);
    console.log(content);
  }
  return (
    <div>
      <p>{content}</p>
      <p>{content.length}</p>
    </div>
  );
};

export default WishList;

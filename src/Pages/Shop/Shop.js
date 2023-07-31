import React, { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import DisplayProducts from "../../Components/DisplayProducts/DisplayProducts";
import { useProducts } from "../../Components/DataContext/DataContext";
import "./Shop.css";

const Shop = () => {
  const { products } = useProducts();
  // const [allProducts, setAllProducts] = useState([]);
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://electon-e-commerce-server.vercel.app/allproducts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProducts(data);
  //       setAllProducts(data);
  //     });
  // }, []);

  // const [newProducts, setNewProducts] = useState([]);
  // useEffect(() => {
  //   fetch("newProducts.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setNewProducts(data);
  //       console.log(data);
  //     });
  // }, []);

  return (
    <div>
      <section>
        <div className="products-container ">
          <div className="product-category  ">
            {/* <ul className="category-container">
              <li onClick={allCategories}>All Categories</li>
              <li onClick={() => filterProducts("smartphones")}>smartphones </li>
              <li onClick={() => filterProducts("laptops")}>Laptops </li>
              <li onClick={() => filterProducts("skincare")}>SkinCare </li>
              <li onClick={() => filterProducts("groceries")}>Groceries </li>
              <li onClick={() => filterProducts("home-decoration")}>Home-decoration </li>
              <li onClick={() => filterProducts("fragrances")}>Fragrances </li>
              <li>SkinCare</li>
              <li>Groceries</li>
              <li>Home-decoration</li>
              <li>Fragrances</li>
            </ul> */}
            <hr className=" w-75 m-auto" />

            {/* <h5 className="text-start ms-5 pt-5">Brand</h5> */}
            {/* 
            <ul className="category-container">
              <li>Apple</li>
              <li>Apple</li>
              <li>Apple</li>
              <li>Apple</li>
              <li>Apple</li>
            </ul> */}

            {/* {products.map((product) => (
              <>
                <div>
                  <ul>
                    <li>{product.brand}</li>
                  </ul>
                </div>
              </>
            ))} */}
          </div>
          {/* {products.length} */}
          {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
          <div className="display-all-products ">
            {/* {products.map((product) => (
              <DisplayProducts product={product} key={product._id}></DisplayProducts>
            ))} */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;

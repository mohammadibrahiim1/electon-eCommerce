import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import DisplayProducts from "../DisplayProducts/DisplayProducts";

const Shop = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setAllProducts(data);
      });
  }, []);

  const filterProducts = (categoryItem) => {
    const updateProducts = allProducts.filter((currentElement) => {
      return currentElement.category === categoryItem;
    });

    setProducts(updateProducts);
  };

  const allCategories = () => {
    // console.log('categories');
    const allCategories = allProducts.map((allp) => {
      return allp;
    });
    setProducts(allCategories);
  };

  return (
    <div>
      <section>
        <div className="products-container row container m-auto">
          <div className="product-category col-3">
            <ul className="category-container">
              <li onClick={allCategories}>All Categories</li>
              <li onClick={() => filterProducts("smartphones")}>
                smartphones{" "}
              </li>
              <li onClick={() => filterProducts("laptops")}>Laptops </li>
              <li onClick={() => filterProducts("skincare")}>SkinCare </li>
              <li onClick={() => filterProducts("groceries")}>Groceries </li>
              <li onClick={() => filterProducts("home-decoration")}>
                Home-decoration{" "}
              </li>
              <li onClick={() => filterProducts("fragrances")}>Fragrances </li>
              {/* <li>SkinCare</li>
              <li>Groceries</li>
              <li>Home-decoration</li>
              <li>Fragrances</li> */}
            </ul>
            {/* {products.map((product) => (
              <>
                <div>
                  <ul>
                    <li>
                      {product.category}
                    </li>
                  </ul>
                </div>
              </>
            ))} */}
          </div>
          <div className="display-all-products col-9">
            {products.map((product) => (
              <DisplayProducts
                product={product}
                key={product._id}
              ></DisplayProducts>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;

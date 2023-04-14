import React, { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const DataContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  // const [products, setProducts] = useState([]);

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

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  const apiData = { products,allCategories,filterProducts };

  return (
    <div>
      <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>
    </div>
  );
};

export default DataContext;

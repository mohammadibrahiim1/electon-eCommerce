import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllProducts(data);
      });
  }, []);

  return (
    <ProductContext.Provider value={allProducts}>
      {children}
    </ProductContext.Provider>
  );
};

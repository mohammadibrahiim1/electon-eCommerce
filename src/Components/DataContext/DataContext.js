import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { initialState, productReducer } from "../../state/productState/productReducer";
import { actionTypes } from "../../state/productState/actionTypes";

export const ApiContext = createContext();

const DataContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [state, dispatch] = useReducer(productReducer, initialState);
  console.log(state);
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
    dispatch({ type: actionTypes.FETCHING_START });
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then(
        (data) =>
          // console.log(data);
          dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data })
        // setProducts(data);
      )
      .catch(() => {
        dispatch({ type: actionTypes.FETCHING_ERROR });
      });
  }, []);

  const apiData = { state, dispatch, allCategories, filterProducts };

  return (
    <div>
      <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>
    </div>
  );
};

export const useProducts = () => {
  const context = useContext(ApiContext);
  return context;
};
export default DataContext;
